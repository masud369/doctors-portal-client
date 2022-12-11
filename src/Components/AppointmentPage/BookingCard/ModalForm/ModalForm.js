// import { json } from "express";
import React from "react";
import { useForm } from "react-hook-form";
import './ModalForm.css'


export default function ModalForm({closeModal,date,bookedOn}) {



const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onBlure={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.appointmentOn = bookedOn;
    data.date = date;
    data.created = new Date();
    fetch("https://doctors-portal-server-2qfr.onrender.com/addAppointment",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.acknowledged){
        closeModal();     
      }
    })

    console.log(data);
  };

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      
       <Select  {...register("Age")} className="form-style"  /> 
      <input  {...register("name")} className="form-style" placeholder="Your Name" />
      <input {...register("phone", { required: true })} className="form-style" placeholder="Phone Number" />
      <input {...register("email", { required: true })} className="form-style" placeholder="Email" />
      <input {...register("date", { required: true })} className="form-style" placeholder="mm/dd/yy" />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" value="send" className="px-5 text-light send" />
    </form>




  //    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  //    <form onSubmit={handleSubmit(onSubmit)}>
  //    {/* register your input into the hook by invoking the "register" function */}
  //    <input defaultValue="test" {...register("example")} />
     
  //    {/* include validation with required or other standard HTML validation rules */}
  //    <input {...register("exampleRequired", { required: true })} />
  //    {/* errors will return when field validation fails  */}
  //    {errors.exampleRequired && <span>This field is required</span>}
     
  //    <input type="submit" />
  //  </form>








  );
}
