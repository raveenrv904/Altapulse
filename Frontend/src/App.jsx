import { useState } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [brandRequirement, setBrandRequirement] = useState("");
  const [competitors, setCompetitors] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      brandRequirement: brandRequirement,
      competitors: competitors,
    };

    const submitData = await axios.post(
      "http://localhost:8000/api/v1/postUser",
      data
    );
    if (submitData.data) {
      alert("User Created Successfully");
    }
  };

  return (
    <>
      <div className="">
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <br />
          <br />
          <label htmlFor="brand">Branding requirements</label>

          <input
            type="text"
            id="brand"
            name="name"
            placeholder="Enter Your Brand Requirements"
            onChange={(e) => {
              setBrandRequirement(e.target.value);
            }}
            value={brandRequirement}
          />
          <br />
          <br />

          <label htmlFor="competitor">Competitors</label>
          <input
            type="text"
            id="competitor"
            name="name"
            placeholder="Enter Your Competitors"
            onChange={(e) => {
              setCompetitors(e.target.value);
            }}
            value={competitors}
          />
          <br />
          <br />
        </form>
        <button
          onClick={(e) => {
            submit(e);
          }}
        >
          Submit
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
