import { Table } from "@mui/material";
import React, { useEffect, useState } from "react";

function Search() {
  const [items, setItems] = useState(() => {
    const storedValue = localStorage.getItem("data");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const newItem = { ...input }; // Create a copy of input
    setItems((prevItems) => [...prevItems, newItem]); // Use functional state update
    localStorage.setItem("data", JSON.stringify([...items, newItem]));
    e.target.reset();
    setInput({
      name: "",
      password: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Filter out the item to delete
    setItems(newItems);
    localStorage.setItem("data", JSON.stringify(newItems)); // Update localStorage
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
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

      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <br />
      <br />

      {filteredItems.length > 0 && (
        <table border={1} cellPadding={5} cellSpacing={10}>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Password</th>
              <th>Actions</th> {/* Add actions column */}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
                <td>
                  <button onClick={() => handleDelete(items.indexOf(item))}>
                    Delete
                  </button>{" "}
                  {/* Delete button */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Search;
