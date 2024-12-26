import React, { useEffect, useState } from "react";

function Apistore() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <td>sr no</td>
            <td>Title</td>
            <td>price</td>
            <td>category</td>
            <td>image</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ele.title}</td>
              <td>{ele.price}</td>
              <td>{ele.category}</td>
              <td>
                <img src={ele.image} alt="" width="15%" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Apistore;
