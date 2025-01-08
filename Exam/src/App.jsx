import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NewBlog from "./Newblog";
import Image from "./Gallery";
import NewImage from "./Newimg";
import FormValidation from "./Formvalidation";
import ShowData from "./ShowData";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [images, setImages] = useState([]);

  const handleBlogSubmit = (data) => {
    setBlogs((prevBlogs) => [...prevBlogs, data]);
  };

  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5 fs-2 " to="/">
            Blogim !
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-5 fs-5" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newblog">
                  New Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/image">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newimage">
                  New Image
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Profile">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route
          path="/newblog"
          element={<NewBlog onBlogSubmit={handleBlogSubmit} />}
        />
        <Route path="/image" element={<Image images={images} />} />
        <Route path="/newimage" element={<NewImage addImage={addImage} />} />
        <Route path="/login" element={<FormValidation />} />
        <Route path="/profile" element={<ShowData />} />
      </Routes>
    </Router>
  );
};

export default App;
