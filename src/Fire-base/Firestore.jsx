import React, { useState } from "react";
import { app } from "./data";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);

function FireStore() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [arr, setArr] = useState([]);

  const HandleForm = (e) => {
    e.preventDefault();
    setArr({ ...arr, input });
    setInput({
      name: "",
      password: "",
    });
  };

  const addData = async () => {
    await addDoc(collection(db, "cities"), {
      name: input.name,
      password: input.password,
    });
    console.log("Data added");
  };

  const deleteData = async () => {
    const data = doc(db, "cities", "bEa4RSKJo94iaYqwhviM");
    await deleteDoc(data)
      .then(() => console.log("Deleted Data"))
      .catch((error) => console.error("Error deleting document: ", error));
  };

  const UpdateData = async () => {
    const data = doc(db, "cities", "bEa4RSKJo94iaYqwhviM");
    await updateDoc(data, {
      name: input.name,
      password: input.password,
    }).then(() => console.log("Data Updated"));
  };

  return (
    <>
      <h1>FireStore</h1>
      <form onSubmit={HandleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />{" "}
        <br />
        <br />
        <button onClick={addData}>Add Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <button onClick={UpdateData}>Update Data</button>
      </form>
    </>
  );
}

export default FireStore;
