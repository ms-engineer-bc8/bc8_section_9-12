import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type Auth = {
  signUp: (email: string, password: string) => Promise<string>;
  signIn: (email: string, password: string) => Promise<string>;
  signOut: () => Promise<string>;
};

export const useAuth = (): Auth => {
  const signUp = async (email: string, password: string): Promise<string> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      return idToken;
    } catch (error) {
      return "error";
    }
  };

  const signIn = async (email: string, password: string): Promise<string> => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      return idToken;
    } catch (error) {
      return "error";
    }

    // await fetch("http://localhost:8000/setCustomClaims", {
    //   method: "POST",
    //   headers: { id: idToken },
    // });
    // const result = await auth.currentUser.getIdTokenResult();
    // token.value = result.claims.role;
  };

  const signOut = async (): Promise<string> => {
    await firebaseSignOut(auth);
    return "Sign out";
  };

  return {
    signUp,
    signIn,
    signOut,
  };
};
