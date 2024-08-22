
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const handleFirstTimeSignUp = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
     await updateProfile(user.user, {
      displayName: name,
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s",
    });

    return {data: user, error: null};
  } catch (error: any) {
    return {data: null, error: error};
  }
};

const handleLogin = async  (email: string, password: string) => {
    try{
      const user = await signInWithEmailAndPassword(auth, email, password);
      return {data: user, error: null};
    } catch(error: any){
      return ({data: null, error: error});
    }
}

export { handleFirstTimeSignUp, handleLogin};
