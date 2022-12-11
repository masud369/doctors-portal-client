import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import AppointmentPage from "./Components/AppointmentPage/AppointmentPage/AppointmentPage";
import { createContext } from "react";
import { useState } from "react";
import Login from "./Components/Login/Login";
import PrivetRoute from "./Components/Login/PrivetRoute/PrivetRoute";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddDoctor from "./Components/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <div>
      <p>{loggedinUser.email}</p>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<AppointmentPage />} />

              <Route path="/dashboard/appointment" element={<PrivetRoute />}>
                <Route path="/dashboard/appointment" element={<Dashboard />}/>
                
              </Route>

            <Route path="/user/addDocotors" element={<AddDoctor />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;