import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import sideImage from "../../images/login.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../App";
import OldUser from "./OldUser/OldUser";
import { useLocation, useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);
const Login = () => {
  const [loggedinUser, setLoggedinUser] = useState(UserContext);
  const [newUser, setNewUser] = useState([]);
  const [checkLogin, setCheckLogin] = useState(false);


const location = useLocation();
const navigate = useNavigate();

  const handelSignIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const brndnewUser = { ...loggedinUser };
        brndnewUser.email = user.email;
        brndnewUser.password = user.password;
        setLoggedinUser(brndnewUser);
        sessionStorage.setItem("toke", user.accessToken);
        if(location.state?.from){
          navigate(location.state.from.pathname)
        }
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handelEmail = (e) => {
    if (e.target.type === "email") {
      const newMail = { ...newUser };
      newMail.email = e.target.value;
      setNewUser(newMail);
    }

    if (e.target.type === "password") {
      const newPsrd = { ...newUser };
      newPsrd.password = e.target.value;
      setNewUser(newPsrd);
    }
  };
  if (checkLogin) {
    document.getElementById("signup-area").style.display = "none";
    document.getElementById("old-user").style.display = "block";
  }else if(!checkLogin){
    // document.getElementById("signup-area").style.display = "block";
    // document.getElementById("old-user").style.display = "none";
  }
  return (
    <div className="conteiner">
      <div className="row">
        <div className="col-md-6 px-5">
          <Form id="signup-area">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handelEmail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handelEmail}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button onClick={handelSignIn} variant="primary" type="submit">
              signup
            </Button>
          </Form>
          <div style={{ display: "none" }} id="old-user" className="">
            <OldUser />
          </div>
          <label htmlFor="login"> I already have an account login </label>
          <input
            type="checkbox"
            onChange={() => setCheckLogin(!checkLogin)}
            name=""
            id="login"
            value="Log in"
          />
        </div>

        <div className="col-md-6 px-5">
          <img
            style={{ height: "400px", maxWidth: "100%" }}
            src={sideImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
