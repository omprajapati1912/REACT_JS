import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowData() {

    const navigate = useNavigate()
    const [items, setItems] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [edit, setEdit] = useState({
        name: "",
        email: ""
    });
    const [editIndex, setEditIndex] = useState(null);
    const [editForm, setEditForm] = useState(false);


    const handleDelete = (i) => {
        const updatedData = items.filter((_, index) => index !== i);
        setItems(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };


    const handleForm = (e) => {
        e.preventDefault();

        if (editForm) {

            const updatedItems = [...items];
            updatedItems[editIndex] = edit;
            setItems(updatedItems);
            localStorage.setItem("data", JSON.stringify(updatedItems));
        } else {

            const updatedItems = [...items, edit];
            setItems(updatedItems);
            localStorage.setItem("data", JSON.stringify(updatedItems));
        }


        setEdit({
            name: "",
            email: ""
        });
        setEditForm(false);
        setEditIndex(null);
    };


    const handleEdit = (i) => {
        setEditIndex(i);
        setEdit(items[i]);
        setEditForm(true);
    };

    const addmore = () => {
        navigate("/login")
    }

    return (
        <div className="container mt-5">
            <h1>Employee Data</h1>
            {items.length === 0 ? (
                <p className="alert alert-warning">No employee data found.</p>
            ) : (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((ele, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(i)}>Edit</button>
                                    <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <h2 className="mt-4">{editForm ? (<form onSubmit={handleForm} className="mt-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Employee Name"
                        value={edit.name}
                        onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Enter Employee Email"
                        value={edit.email}
                        onChange={(e) => setEdit({ ...edit, email: e.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    {editForm ? "Update" : "Submit"}
                </button>
            </form>) : ""}</h2>
            <button className="btn btn-primary" onClick={addmore}>Add new Employee</button>

        </div>
    );
}

export default ShowData;