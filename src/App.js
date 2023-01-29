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
import About from "./Components/About";
import MyAppointmen from "./Components/MyAppointmen/MyAppointmen";

export const UserContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<AppointmentPage />} />

              <Route path="/dashboard/appointment" element={<PrivetRoute />}>
                <Route path="/dashboard/appointment" element={<Dashboard />}/>  
              </Route>
              <Route path="/myAppointmen" element={<PrivetRoute />}>
                <Route path="/myAppointmen" element={<MyAppointmen />}/>  
              </Route>
              <Route path="/about" element={<PrivetRoute />}>
                <Route path="/about" element={<About />}/>  
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