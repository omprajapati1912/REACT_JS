import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adddata, deleteitem, edititem } from "./action";

function AddData() {
  const [input, setInput] = useState({
    name: "",
    Pass: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.items);

  const handleForm = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      dispatch(edititem({ i: editIndex, item: input }));
      setEditIndex(null);
    } else {
      dispatch(adddata(input));
    }
    setInput({
      name: "",
      Pass: "",
    });
    e.target.reset();
  };

  const deletedata = (i) => {
    dispatch(deleteitem(i));
  };

  const editdata = (i) => {
    const itemEdit = data[i];
    setInput(itemEdit);
    setEditIndex(i);
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter your Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          value={input.Pass}
          onChange={(e) => setInput({ ...input, Pass: e.target.value })}
        />
        <br />
        <br />
        <button>{editIndex === null ? "submit" : "update"}</button>
      </form>
      <br />
      <br />
      <br />

      {data.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <td>Sr No.</td>
              <td>Name</td>
              <td>Password</td>

              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.Pass}</td>

                <td>
                  <button onClick={() => deletedata(i)}>delete</button>
                  <button onClick={() => editdata(i)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default AddData;
