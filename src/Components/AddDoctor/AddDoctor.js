import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DashboardMenu from "../Dashboard/DashboardMenu/DashboardMenu";
// import '../Dashboard/DashboardMenu/DashboardMenu.css'

const AddDoctor = () => {

    const [doctorsInfo, setDoctorsInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleInfo = (e)=>{
        const newInfo = {...doctorsInfo}
        newInfo[e.target.name] = e.target.value
        setDoctorsInfo(newInfo)

    }
const handleFile = (e)=>{
    const newFile = e.target.files[0]
    setFile(newFile);
}
console.log(doctorsInfo);
    const handleSubmit = (e)=>{
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', doctorsInfo.name)
      formData.append('email', doctorsInfo.email)
    
      fetch('https://doctors-portal-server-2qfr.onrender.com/addADoctor', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
    }

  return (
    <div>
      <div className="container-fluied">
        <div className="row">
          <div className="col-md-2 dashboard-menu">
            <DashboardMenu />
          </div>
          <div className="col-md-10">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleInfo} type="email" name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onBlur={handleInfo} name="name" style={{border:'1px solid #ced4da'}} placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Upload Your Image</Form.Label>
                <Form.Control type="file" onChange={handleFile} name="image"  placeholder="Upload file" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
