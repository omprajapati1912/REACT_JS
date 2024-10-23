import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [arr, setArr] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, input]);
    console.log(input.name, input.email, input.password);
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Form;
