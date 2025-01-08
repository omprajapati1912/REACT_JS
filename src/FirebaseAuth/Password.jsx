import React, { useState } from "react";
import { app } from "./FireAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(app);

export default function Password() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const passwordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password Reset Link Send..");
        setMessage("Link is Send to Your Registered Email ID");
      })
      .catch((err) => console.log(err));
    setEmail("");
  };
  return (
    <div>
      <h2>Password Reset Form</h2>
      {message && <p>{message}</p>}
      <form onSubmit={passwordReset}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Send Recovery Email</button>
      </form>
    </div>
  );
}
