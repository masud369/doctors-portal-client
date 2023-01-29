import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import DashboardMenu from '../Dashboard/DashboardMenu/DashboardMenu';
import Table from 'react-bootstrap/Table';

const MyAppointmen = () => {
    const [loggedinUser,setLoggedinUser] = useContext(UserContext)
    const [ myappointmen,setMyappointmen] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/myAppointmen?email="+loggedinUser.email)
        .then(res=>res.json())
        .then(data=>setMyappointmen(data))

    },[])
    console.log(myappointmen);
    return (
        <div className='row'>
            <div className="col-md-2 dashboard-menu">
                <DashboardMenu/>
            </div>
            <div className="col-md-10">
                <h2>You Have {myappointmen.length} Appointmen</h2>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Appointmen ON</th>
          <th>Created ON</th>
          <th>Appointment For</th>
        </tr>
      </thead>
      <tbody>
        {
            myappointmen.map(singapnt=>(<tr>
                <td>{singapnt.name}</td>
                <td>{singapnt.appointmentOn}</td>
                <td>{singapnt.created}</td>
                <td>{singapnt.date}</td>
              </tr>))
        }
       
      </tbody>
    </Table>
            </div>
        </div>
    );
};

export default MyAppointmen;