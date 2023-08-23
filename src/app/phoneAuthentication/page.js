"use client";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import PhoneAuth from "../Components/PhoneAuth/PhoneAuth";
import { Text } from "@mantine/core";
import { onAuthStateChanged } from "firebase/auth";

export default function PhoneAuthentication() {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSZNnDirgniATagMv_o6zzevnpDJM-G_c",
    authDomain: "next-restaurant-11a1a.firebaseapp.com",
    projectId: "next-restaurant-11a1a",
    storageBucket: "next-restaurant-11a1a.appspot.com",
    messagingSenderId: "573761889651",
    appId: "1:573761889651:web:001e66c90a87e409fbd106",
    measurementId: "G-NHF4R2GZQ6",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // export default app;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => unRegistered();
  });

  return (
    <div>
      <Text className="font-semibold text-2xl uppercase   text-center pt-32 pb-5 phone_auth_container">
        {" "}
        Sign In To Order{" "}
      </Text>
      <PhoneAuth auth={firebase.auth()}></PhoneAuth>
    </div>
  );
}
