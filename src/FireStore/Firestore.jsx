import React, { useState } from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { app } from "../RealTimeFireBase/Fire";

const db = getFirestore(app);

function FireStore() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [arr, setArr] = useState([]);

  const HandleForm = async (e) => {
    e.preventDefault();
    await addData(); // Call addData to add to Firestore
    setArr([...arr, input]); // Update the local state array
    setInput({
      name: "",
      password: "",
    });
  };

  const addData = async () => {
    try {
      await addDoc(collection(db, "cities"), {
        name: input.name,
        password: input.password,
      });
      console.log("Data added");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const deleteData = async () => {
    const data = doc(db, "cities", "bEa4RSKJo94iaYqwhviM");
    try {
      await deleteDoc(data);
      console.log("Deleted Data");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const UpdateData = async () => {
    const data = doc(db, "cities", "bEa4RSKJo94iaYqwhviM");
    try {
      await updateDoc(data, {
        name: input.name,
        password: input.password,
      });
      console.log("Data Updated");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
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
        <button type="submit">Add Data</button>
        <button type="button" onClick={deleteData}>
          Delete Data
        </button>
        <button type="button" onClick={UpdateData}>
          Update Data
        </button>
      </form>
    </>
  );
}

export default FireStore;
