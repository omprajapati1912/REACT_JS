import React, { useState } from "react";
import axios from "axios";

function Axiosapi() {
  const [arr, setArr] = useState([]);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((value) => {
      console.log(value.data);
      setArr(value.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>sr no</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.username}</td>
              <td>{ele.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Axiosapi;
