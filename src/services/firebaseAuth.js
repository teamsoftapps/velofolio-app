// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// /* ---------------- EMAIL SIGNUP ---------------- */
// export const signupWithEmail = async (email, password) => {
//   return await auth().createUserWithEmailAndPassword(email, password);
// };

// /* ---------------- EMAIL LOGIN ---------------- */
// export const loginWithEmail = async (email, password) => {
//   return await auth().signInWithEmailAndPassword(email, password);
// };

// /* ---------------- GOOGLE LOGIN ---------------- */
// export const loginWithGoogle = async () => {
//   await GoogleSignin.hasPlayServices();

//   const { idToken } = await GoogleSignin.signIn();

//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   return await auth().signInWithCredential(googleCredential);
// };

// /* ---------------- LOGOUT ---------------- */
// export const logoutUser = async () => {
//   await auth().signOut();
// };

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';







const parseError = error => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Email already exists';
    case 'auth/invalid-email':
      return 'Invalid email format';
    case 'auth/user-not-found':
      return 'No account found with this email';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/too-many-requests':
      return 'Too many attempts — try again later';
    case 'auth/user-disabled':
      return 'This account has been disabled';
    default:
      return error.message || 'Something went wrong';
  }
};

const saveUserToRTDB = async (user, name = null) => {
  await database().ref(`/users/${user.uid}`).set({
    uid: user.uid,
    email: user.email,
    name: name || user.displayName || 'User',
    provider: user.providerData[0]?.providerId,
    createdAt: Date.now(),
  });
};
export const signupWithEmail = async (email, password, name) => {
  const userCredential = await auth().createUserWithEmailAndPassword(email, password);

  await userCredential.user.updateProfile({ displayName: name });
  await userCredential.user.reload();

  // Save to RTDB
  await saveUserToRTDB(userCredential.user, name);

  return userCredential.user;
};


/* LOGIN */
export const loginWithEmail = async (email, password) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    throw new Error(parseError(e));
  }
};


export const loginWithGoogle = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  const idToken = userInfo?.idToken || userInfo?.data?.idToken;

  const credential = auth.GoogleAuthProvider.credential(idToken);
  const userCredential = await auth().signInWithCredential(credential);

  // Save to RTDB
  await saveUserToRTDB(userCredential.user);

  return userCredential;
};




/* FORGOT PASSWORD */
export const forgotPassword = async (email) => {
  try {
    // Optional: Basic client-side validation
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email');
    }

    await auth().sendPasswordResetEmail(email);

    // Success — you can return a message or just resolve
    return 'Password reset email sent! Check your inbox (and spam folder).';
  } catch (e) {
    // Reuse/extend your existing error parser
    throw new Error(parseError(e));
  }
};





/* LOGOUT */
export const logoutUser = async () => {
  await auth().signOut();
};
