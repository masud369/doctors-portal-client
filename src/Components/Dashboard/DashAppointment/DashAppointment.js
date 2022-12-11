import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import './DashAppointment.css'

const DashAppointment = ({ appointments }) => {
  return (
    <div>
      <h2>Total Appointment{appointments.length} </h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col" className='text-secondary'>Name</th>
            <th scope="col" className='text-secondary'>Schedule</th>
            <th scope="col" className='text-secondary'>
              <Dropdown>
                <Dropdown.Toggle variant="success" className="gradient-bgc border-0" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
          <tbody>
          
            {appointments.map((appointment) => (
             
              <tr key={appointment.id}>
                  <td scope="col-2">{appointment.name}</td>
                  <td scope="col">{ appointment.date}</td>
                  <td scope="col">@mdo</td>
                  </tr>

            ))}
            
          </tbody>
      </table>
    </div>
  );
};

export default DashAppointment;
