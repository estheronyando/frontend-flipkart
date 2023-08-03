import firebaseApp from "../adapters/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";



const sendOtp = async (phoneNumber) => {

  
  console.log(phoneNumber)
  const auth = getAuth();
  phoneNumber = "+254" + phoneNumber;
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {},
      defaultCountry: "KE",
    },
    auth
  );
  const appVerifier = window.recaptchaVerifier;
  try {
    console.log("Phone 2:"+phoneNumber)
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    );
   

    //return confirmationResult;
  } catch (error) {
    throw error;
  }
};

export default sendOtp;
