import React, { useState } from "react";

const UserApi = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setUserData({
          image: user.picture.large,
          name: user.name.first + " " + user.name.last,
          email: user.email,
          location: user.location.city + ", " + user.location.country,
        });
      })
      .catch((error) => console.error("Error fetching user data: ", error));
  };

  return (
    <div>
      <h1>Random User Data API</h1>
      <button onClick={fetchUserData}>Get Random User Data</button>

      {userData && (
        <div>
          <img src={userData.image} alt="Random User" />
          <div>
            <h5>{userData.name}</h5>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Location:</strong> {userData.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserApi;
