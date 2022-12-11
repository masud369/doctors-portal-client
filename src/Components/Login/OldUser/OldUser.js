import React, { useState } from "react";
import { firebaseConfig } from "../firebaseConfig";
import Button from "react-bootstrap/Button";
import { initializeApp } from "firebase/app";
import Form from "react-bootstrap/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useLocation, useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);

const OldUser = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);
    const [oldUser, setOldUser] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
  const handelSignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, oldUser.email, oldUser.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = {...loggedinUser}
         newUser.email = user.email
         newUser.password = user.password
         setLoggedinUser(newUser);
         sessionStorage.setItem("toke", user.accessToken);
         if(location.state?.from){
          navigate(location.state.from.pathname)
        }
        console.log(location);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handelEmail = (e) => {
    if (e.target.type === "email") {
      const newMail = { ...oldUser };
      newMail.email = e.target.value;
      setOldUser(newMail);
    }

    if (e.target.type === "password") {
      const newPsrd = { ...oldUser };
      newPsrd.password = e.target.value;
      setOldUser(newPsrd);
    }
  };
  return (
    <div className="">
          <Form>
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
              signin
            </Button>
          </Form>
    </div>
  );
};

export default OldUser;
