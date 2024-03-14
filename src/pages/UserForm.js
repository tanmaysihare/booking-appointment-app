import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import {Formik , Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";

function UserForm() {
  const history = useHistory();
  const initialValues = {
    fullName: "",
    emailId: "",
    contactNumber: "",
    dateAndTime:"",
  };

  const submitHandler = (data)=>{
    axios.post("http://localhost:3001/users",data).then((res)=>{
      history.push('/');
    }).catch(err=>console.log(err));

  };
  const validationSchema= Yup.object().shape({
    fullName: Yup.string().required(),
    emailId: Yup.string().required(),
    contactNumber: Yup.number().min(10).required(),
    dateAndTime:Yup.date().required(),
  });

  return (
    <div>
     <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
       <div>
        <Form>
          <div>
            <h1>Book An Appointment</h1>
            <p>All Fields Are required...</p>
          </div>

          <label>FullName</label>
          <ErrorMessage name='fullName' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="fullName" placeholder="Full Name" className=""/>

          <label>Email Id</label>
          <ErrorMessage name='emailId' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="emailId" placeholder="Correct Email Id" className=""/>

          <label>Contact Number</label>
          <ErrorMessage name='contactNumber' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="contactNumber" placeholder="Contact Number" className=""/>

          <label>Appointment Date And Time</label>
          <ErrorMessage name='dateAndTime' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="dateAndTime" placeholder="YYYY-MM-DD 00:00:00" className=""/>

          <button type='submit' className=''>Book</button>
        </Form>
       </div>
      </Formik> 
    </div>
  )
}

export default UserForm;
