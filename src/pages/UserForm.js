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
    <div className='flex flex-col items-center justify-center'>
     <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
       <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <Form className='text-white relative px-4 py-6 bg-blue-900 shadow-lg sm:rounded-3xl sm:p-20'>
          <div className="text-center pb-6">
            <h1 className="text-3xl">Book An Appointment</h1>
            <p className="text-gray-300">All Fields Are required...</p>
          </div>
          <div >
          <label>FullName</label>
          <ErrorMessage name='fullName' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="fullName" placeholder="Full Name"  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
          <label>Email Id</label>
          <ErrorMessage name='emailId' component="span" className='text-red-800' />
          <Field id="inputUserForm" name="emailId" placeholder="Correct Email Id"  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div>
          <label>Contact Number</label>
          <ErrorMessage name='contactNumber' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="contactNumber" placeholder="Contact Number"  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div>
          <label>Appointment Date And Time</label>
          <ErrorMessage name='dateAndTime' component="span" className='text-red-800'/>
          <Field id="inputUserForm" name="dateAndTime" placeholder="YYYY-MM-DD 00:00:00"  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <button type='submit' className="bg-teal-700 shadow hover:bg-blue-400 py-2 px-4 rounded text-white font-bold focus:outline-none focus:shadow-outline">Book</button>
        </Form>
       </div>
      </Formik> 
    </div>
  )
}

export default UserForm;
