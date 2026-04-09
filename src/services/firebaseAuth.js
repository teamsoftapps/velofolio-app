import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';

export const parseError = error => {
  if (typeof error === 'string') return error;
  
  const code = error.code || '';
  
  switch (code) {
    // Auth Errors
    case 'auth/email-already-in-use':
      return 'An account already exists with this email address.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password. Please try again.';
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please try again in 15 minutes.';
    case 'auth/user-disabled':
      return 'Your account has been disabled. Please contact support.';
    case 'auth/weak-password':
      return 'Your password is too weak. Please use at least 8 characters.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.';
    
    // Database Errors
    case 'database/permission-denied':
    case 'PERMISSION_DENIED':
      return 'You do not have permission to access this data.';
    
    default:
      // Remove technical prefixes like [auth/...] or [database/...]
      let msg = error.message || 'An unexpected error occurred.';
      return msg.replace(/\[.*?\]\s?/, '');
  }
};

const saveUserToRTDB = async (user, name = null) => {
  try {
    const userRef = database().ref(`/users/${user.uid}`);
    
    // 1. Check if CURRENT UID already has data
    const currentSnap = await userRef.once('value');
    if (currentSnap.exists()) {
      // Just update recent info but don't overwrite everything
      await userRef.update({
        email: user.email,
        name: name || user.displayName || currentSnap.val().name || 'User',
        provider: user.providerData[0]?.providerId || currentSnap.val().provider,
      });
      return;
    }

    // 2. Check if EMAIL exists under a DIFFERENT UID (Consolidation)
    const emailQuery = await database()
      .ref('/users')
      .orderByChild('email')
      .equalTo(user.email)
      .once('value');

    let existingData = null;
    let oldUid = null;

    if (emailQuery.exists()) {
      // Find the first matching record that isn't the current one
      const items = emailQuery.val();
      for (const key in items) {
        if (key !== user.uid) {
          oldUid = key;
          existingData = items[key];
          break;
        }
      }
    }

    // 3. Save/Merge data
    await userRef.set({
      uid: user.uid,
      email: user.email,
      name: name || user.displayName || existingData?.name || 'User',
      provider: user.providerData[0]?.providerId,
      createdAt: existingData?.createdAt || Date.now(),
    });

    // 4. Cleanup old duplicate if found
    if (oldUid) {
      await database().ref(`/users/${oldUid}`).remove();
    }
  } catch (error) {
    console.error('Error in saveUserToRTDB:', error);
  }
};

export const signupWithEmail = async (email, password, name) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    await userCredential.user.updateProfile({ displayName: name });
    await userCredential.user.reload();
    await saveUserToRTDB(userCredential.user, name);
    return userCredential.user;
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* LOGIN */
export const loginWithEmail = async (email, password) => {
  try {
    return await auth().signInWithEmailAndPassword(email.trim(), password);
  } catch (e) {
    // Handle the specific "Linked with Google" scenario
    if (
      e.code === 'auth/wrong-password' || 
      e.code === 'auth/user-not-found' || 
      e.code === 'auth/invalid-credential'
    ) {
      try {
        const methods = await auth().fetchSignInMethodsForEmail(email.trim());
        
        // Check if the account exists BUT only via Google
        const isGoogleOnly = methods.includes('google.com') && !methods.includes('password');
        
        if (isGoogleOnly) {
           // We throw a very specific string that we know to be the "Google Tip"
           throw new Error('LINKED_WITH_GOOGLE');
        }
      } catch (checkError) {
        if (checkError.message === 'LINKED_WITH_GOOGLE') {
          throw new Error('This account is linked with Google. Please use "Sign in with Google" instead.');
        }
        // If it was another error (like enumeration protection blocking us), 
        // we fall back to the generic error below.
      }
    }
    throw new Error(parseError(e));
  }
};

export const loginWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const idToken = userInfo?.idToken || userInfo?.data?.idToken;

    const credential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(credential);

    // Save to RTDB
    await saveUserToRTDB(userCredential.user);

    return userCredential;
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* FORGOT PASSWORD */
export const forgotPassword = async (email) => {
  try {
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email');
    }
    await auth().sendPasswordResetEmail(email.trim());
    return 'Password reset email sent! Check your inbox.';
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* LOGOUT */
export const logoutUser = async () => {
  await auth().signOut();
};
