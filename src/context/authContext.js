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

  //deslogeo
  const signOut = () => auth.signOut();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
