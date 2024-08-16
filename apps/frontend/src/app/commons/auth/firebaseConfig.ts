import { initializeApp } from "firebase/app";
import {
  getAuth,
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

// TODO: useContextを使ってグローバル変数を管理する
type Auth = {
  // token: React.RefObject<string | null>;
  // signIn: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<string>;
};

export const useAuth = (): Auth => {
  // const token = useToken();
  const signIn = async (email: string, password: string): Promise<string> => {
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      console.log(idToken);
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

  const signOut = async (): Promise<void> => {
    const auth = getAuth(app);
    await firebaseSignOut(auth);
    // token.value = null;
  };

  return {
    signIn,
    // signOut,
    // token
  };
};
