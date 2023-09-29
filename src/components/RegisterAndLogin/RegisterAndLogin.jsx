// import database from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const RegisterAndLogin = () => {

    const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(e.target.email.value)
    // console.log(e.target.password.value)

    createUserWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "authData");
      history('/contact-form')
    });
  };
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default RegisterAndLogin;
