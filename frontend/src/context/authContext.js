import { createContext, useEffect, useState } from "react";
import { auth, firebase } from "../config/Firebase";

//creas variable context
export const AuthContext = createContext();

const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

//creas en context

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  ////logeo
  const signIn = async () => {
    //para loguearte se abre una ventanita
    const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
  };

  const customSignIn = async ({ first_name, last_name, email, ...rest }) => {
    setUser({
      photoURL: "https://i.pravatar.cc/300",
      displayName: `${first_name} ${last_name}`,
      email: email,
      ...rest,
    });
  };

  const customSignOut = async () => {
    setUser(null);
    // clean localStorage from access and refresh tokens
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  //deslogeo
  const signOut = () => {
    auth.signOut();
    customSignOut();
  };

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      console.log("[AuthContext] user changed:", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, customSignIn, customSignOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
