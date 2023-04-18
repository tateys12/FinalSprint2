import React, { useState } from "react";
import { Route } from "react-router-dom";
import Shop from "./shop/Shop";
import "../../src/pages/SignIn.css"


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "user") {
      alert("Login successful!");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div onClick={handleModalOpen}>Sign In</div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label>
                Username: user
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <br />
              <label>
                Password: user
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleModalClose} className="closebttn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
