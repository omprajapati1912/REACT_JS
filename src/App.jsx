// import { useState } from "react";
// import Apistore from "./API/Apistore";
// import Axiosapi from "./API/Axiosapi";
// import Userapi from "./API/Userapi";
// import Dogapi from "./API/Dogapi";
import "./App.css";
// import FireStore from "./FireStore/Firestore";
// import RealTime from "./RealTimeFireBase/RealTime";
// import AddData from "./redux/AddData";
// import Comment from "./Comment";
// import Curd from "./Curd";
// import Search from "./Search";
// import Form from "./Form";
// import Prop from "./Prop";
// import Counter from "./Counter";
// import Spreding from "./Spreding";
import { useEffect, useState } from "react";
import SignIn from "./FirebaseAuth/SignIn";
import SignUp from "./FirebaseAuth/SignUp";
import { app } from "./FirebaseAuth/FireAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Show from "./FirebaseAuth/Show";
import { use } from "react";
import Password from "./FirebaseAuth/Password";

const auth = getAuth(app);

function App() {
  // const student = {
  //   name: "om",
  //   age: 20,
  //   city: "kadi",
  // };

  // const arr = [1, "om ", 2, "laxman"];

  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {/* <Counter /> */}
      {/* <Spreding /> */}
      {/* <Prop array={arr} studentdata={student} /> */}
      {/* <Form /> */}
      {/* <Comment /> */}
      {/* <AddData /> */}
      {/* <Curd /> */}
      {/* <Search /> */}
      {/* <Apistore /> */}
      {/* <Axiosapi /> */}
      {/* <Userapi /> */}
      {/* <Dogapi /> */}
      {/* <FireStore /> */}
      {/* <RealTime /> */}

      <>
        {user ? (
          <Show email={user.email} />
        ) : (
          <>
            <SignUp />
            <hr />
            <hr />
            <SignIn />
            <hr />
            <hr />
            <Password />
          </>
        )}
      </>
    </>
  );
}

export default App;
