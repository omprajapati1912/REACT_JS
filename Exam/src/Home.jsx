import React from "react";
import { Link } from "react-router-dom";

const Home = ({ blogs }) => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-3">Welcome to the Blogging !</h1>
        <p className="lead">A platform to share your stories, ideas, and creativity!</p>
        <Link to="/newblog" className="btn btn-success btn-lg mt-3">
          Create Your First Blog
        </Link>
      </div>

      {blogs.length > 0 ? (
        <div className="mt-5">
          <h3 className="text-center">Your Submitted Blogs</h3>
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow mt-4">
                  <div className="card-header bg-primary text-white">
                    <h5>{blog.title}</h5>
                  </div>
                  <div className="card-body">
                    {blog.image && (
                      <img
                        src={URL.createObjectURL(blog.image)}
                        alt="Uploaded"
                        className="img-fluid mb-3"
                      />
                    )}
                    <p>
                      <strong>Description:</strong> {blog.description}
                    </p>
                    <p>
                      <strong>Category:</strong>{" "}
                      {blog.category === "1"
                        ? "Technology"
                        : blog.category === "2"
                        ? "Lifestyle"
                        : "Education"}
                    </p>
                    <p>
                      <strong>Date:</strong> {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-5">No blogs submitted yet.</p>
      )}
    </div>
  );
};

export default Home;