import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function firstNameChange(event) {
    console.log(event.target.value);
    const fName = event.target.value;
    setFirstName(fName);
  }
  function updateLName(event) {
    console.log(event.target.value);
    const lName = event.target.value;
    setLastName(lName);
  }
  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={firstNameChange}
          placeholder="First Name"
          value={firstName}
        />
        <input
          name="lName"
          onChange={updateLName}
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
