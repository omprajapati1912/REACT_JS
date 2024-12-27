import React, { useState } from "react";
import { getDatabase, ref, remove, set, update } from "firebase/database";
import { app } from "./Fire";

const db = getDatabase(app);

function RealTime() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [arr, setArr] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setArr([...arr, input]);
    setInput({
      name: "",
      password: "",
    });
  };

  const addData = async () => {
    try {
      await Promise.all(
        arr.map((ele, index) =>
          set(ref(db, `main/data/${index}`), {
            name: ele.name,
            password: ele.password,
          })
        )
      );
      console.log("Data Added");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const deleteData = async () => {
    try {
      await remove(ref(db, "main/data"));
      console.log("Data Deleted");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const editData = async (index) => {
    try {
      await update(ref(db, `main/data/${index}`), {
        name: "Updated Name",
        password: "Updated Password",
      });
      console.log("Updated Data");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <h1>FireBase</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button type="button" onClick={addData}>
          Add Data
        </button>
        <button type="button" onClick={deleteData}>
          Delete Data
        </button>
        <button type="button" onClick={() => editData(0)}>
          Edit Data
        </button>
      </form>
    </>
  );
}

export default RealTime;
