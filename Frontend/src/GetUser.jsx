import axios from "axios";
import { useState } from "react";

const GetUser = () => {
  const [id, setId] = useState("");

  const [userData, setUserData] = useState("");

  const getUserData = async (e) => {
    e.preventDefault();
    const data = await axios.get(`http://localhost:8000/api/v1/${id}`);

    setUserData([data.data]);
  };
  return (
    <div>
      <h2>Get User Details</h2>
      <div className="">
        <form action="">
          <input
            type="text"
            placeholder="Enter Id of the Data"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button
            onClick={(e) => {
              getUserData(e);
            }}
          >
            Get Details
          </button>
        </form>
      </div>

      {userData &&
        userData.map((data, index) => {
          return (
            <div key={index}>
              <h2>Name: {data.user.name}</h2>
              <p>Brand Requirement: {data.user.brandRequirement}</p>
              <p>Competitor: {data.user.competitors}</p>
            </div>
          );
        })}
    </div>
  );
};

export default GetUser;
