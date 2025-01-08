import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormValidation() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: ""
    });

    const [arr, setArr] = useState(() => {
        const storeData = localStorage.getItem("data");
        return storeData ? JSON.parse(storeData) : [];
    });

    const handleForm = (e) => {
        e.preventDefault();


        setArr([...arr, input]);
        setInput({
            name: "",
            email: ""
        });
    };

    useEffect(() => {

        localStorage.setItem("data", JSON.stringify(arr));
    }, [arr]);

    const showData = () => {
        navigate("/profile");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Add Employee</h1>


            <form onSubmit={handleForm} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Enter Employee Name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter Employee Email"
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-100 mb-3">
                    Submit
                </button>
            </form>


            <div className="text-center mt-3">
                <button onClick={showData} className="btn btn-secondary">
                    Show Data
                </button>
            </div>
        </div>
    );
}

export default FormValidation;