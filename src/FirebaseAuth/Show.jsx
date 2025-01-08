import React from "react";
import { app } from "./FireAuth";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);

export default function Show({ email }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("User Sign Out"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Show Page</h1>
      <h3>Email ID : {email}</h3>

      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
}
