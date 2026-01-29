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

const parseError = error => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Email already exists';
    case 'auth/invalid-email':
      return 'Invalid email';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/wrong-password':
      return 'Wrong password';
    default:
      return error.message;
  }
};

/* SIGNUP */
export const signupWithEmail = async (email, password) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* LOGIN */
export const loginWithEmail = async (email, password) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* GOOGLE */
export const loginWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    const { idToken } = await GoogleSignin.signIn();

    const credential = auth.GoogleAuthProvider.credential(idToken);

    return await auth().signInWithCredential(credential);
  } catch (e) {
    throw new Error(parseError(e));
  }
};

/* LOGOUT */
export const logoutUser = async () => {
  await auth().signOut();
};
