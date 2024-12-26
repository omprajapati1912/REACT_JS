import React, { useState } from "react";

const Dogapi = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const api_call = () => {
    setLoading(true);
    setError(null);
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.message);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch dog images");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Dog Image API</h1>
      <div>
        <button onClick={api_call} disabled={loading}>
          {loading ? "Loading..." : "Get Random Dog Images"}
        </button>
      </div>
      {error && <div>{error}</div>}
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Dog ${index}`} />
            <h5>Meet the Dog</h5>
            <p>A random dog image fetched from the Dog API!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogapi;
