import React, { useEffect, useState } from "react";

function Crud() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [arr, setArr] = useState(() => {
    const storeData = localStorage.getItem("data");
    return storeData ? JSON.parse(storeData) : [];
  });

  const [edit, setEdit] = useState(null);

  const handleFormsubmit = (e) => {
    e.preventDefault();
    if (edit !== null) {
      const updateArr = [...arr];
      updateArr[edit] = input;
      setArr(updateArr);
      setEdit(null);
    } else {
      setArr([...arr, input]);
    }
    // console.log(input.name, input.email, input.password);
    setInput({
      name: "",
      email: "",
      password: "",
    });
    e.target.reset();
  };

  const deleteData = (index) => {
    const updatedData = arr.filter((_, i) => {
      i !== index;
    });
    setArr(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  const editData = (index) => {
    setEdit(index);
    setInput(arr[index]);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);
  return (
    <>
      <form onSubmit={handleFormsubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <br />
        <button>{edit === null ? "Submit" : "Update"}</button>
        <br />
        <br />
      </form>

      <table>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>email</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td>
                <button onClick={() => editData(index)}>edit</button>
                <button onClick={() => deleteData(index)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Crud;
