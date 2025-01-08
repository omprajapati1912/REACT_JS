import React, { useState } from "react";

const NewImage = ({ addImage }) => {

    const [imageTitle, setImageTitle] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleTitleChange = (e) => {
        setImageTitle(e.target.value);
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!imageTitle || !imageFile) {
            alert("Please provide both title and image.");
            return;
        }

        const newImage = {
            title: imageTitle,
            file: URL.createObjectURL(imageFile),
        };

        addImage(newImage);
        setImageTitle("");
        setImageFile(null);
    };

    return (
        <div className="container mt-5">
           <div className="row justify-content-center">
              <div className="col-lg-6">
                  <div className="card shadow">
                      <div className="card-header bg-secondary text-white text-center">
                        <h2>Upload a New Image</h2>
                      </div>
                 <div className="card-body">
                   <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                    <label htmlFor="imageTitle" className="form-label">
                         Image Title
                    </label>
                    <input
                         type="text"
                         className="form-control"
                         id="imageTitle"
                         value={imageTitle}
                       onChange={handleTitleChange}
                           placeholder="Enter image title"
                            required
                     />
                       </div>
                         <div className="mb-3">
                           <label htmlFor="uploadImage" className="form-label">
                               Upload Image
                            </label>
                             <input
                               type="file"
                                className="form-control"
                                id="uploadImage"
                                onChange={handleFileChange}
                                 required
                             />
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Upload
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewImage;