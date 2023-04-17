// import React, { useState } from "react";
// import { Route } from "react-router-dom";
// import Shop from "./shop/Shop";
// import Modal from "react-modal";


// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (username === "admin" && password === "admin") {
//       alert("Login successful!");
//     } else {
//       alert("Login failed. Please try again.");
//     }
//   };

//   const loginForm = () => {
//     setModalIsOpen(true);
//     return (
//       <Modal isOpen={modalIsOpen}
//       onRequestClose={()=> setModalIsOpen(false)}>
      
//       <div className="login-form">
//         <form onSubmit={handleSubmit}>
//           <label>
//             Username:
//             <input type="text" value={username} onChange={handleUsernameChange} />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <br />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       </Modal>
//     );
//   };

//   return (
//     <div className="login-form">
//     <button onClick={loginForm}>Sign In</button>
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={() => setModalIsOpen(false)}
//     >
//       <div className="login-form">
//       <button onClick={loginForm}>Sign In</button>
//       </div>
//     </Modal>
//   </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Route } from "react-router-dom";
import Shop from "./shop/Shop";


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
    if (username === "admin" && password === "admin") {
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
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
