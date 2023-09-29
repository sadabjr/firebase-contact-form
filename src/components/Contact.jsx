import { useState } from "react";
import { signOut } from "firebase/auth";
import "./style.css";
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://contact-form-cd404-default-rtdb.firebaseio.com/reactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });

        alert("Data Stored Successfully");
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const history = useNavigate()

  const handleClick = () => {
    signOut();
    history('/')
  };

  return (
    <>
      <div className="contact-form-container">
        <h2>Contact Us</h2>

        <form method="POST">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={getUserData}
              value={user.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={getUserData}
              value={user.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              required
              onChange={getUserData}
              value={user.phone}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              onChange={getUserData}
              value={user.address}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              onChange={getUserData}
              value={user.message}
            ></textarea>
          </div>

          <button type="submit" onClick={postData}>
            Submit
          </button>
        </form>
        <div className="signOut">
          <button onClick={handleClick}>SignOut</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
