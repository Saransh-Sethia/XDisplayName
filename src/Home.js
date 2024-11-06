import React, { useState } from "react";

const Home = () => {
  const [fullName, setFullName] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    // if (input.firstName === "" || input.lastName === "") {
    //   return;
    // }
    let newData = { ...input };

    setFullName(newData.firstName + " " + newData.lastName);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={submit}>
        <label>First Name: </label>
        <input
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
          required="true"
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
          required="true"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {fullName ? <p>Full Name : {fullName}</p> : ""}
    </div>
  );
};

export default Home;
