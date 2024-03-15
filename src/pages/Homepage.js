import {useState,useEffect} from 'react';
import axios from 'axios';


function Homepage() {
    const [listOfUsers, setListOfUsers]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/users").then((res)=>{
            setListOfUsers(res.data);
        }).catch(err=> console.log(err));
    },[]);
    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:3001/users/${id}`).then(()=>{
            axios.get("http://localhost:3001/users").then((res)=>{
                setListOfUsers(res.data);
            }).catch(err=> console.log(err));
        }).catch(err=>console.log(err));
    }

  return (
    <div className='text-white'>
        <h1 className='text-center font-serif text-5xl m-2 p-4'>Appointment List</h1>
        <div className='flex m-4 p-4 justify-evenly border-b-2 border-blue-300 bg-cyan-800 mx-44 w-3/4 rounded-md'>
                    <div>NAME</div>
                    <div>EMAIL ID</div>
                    <div>CONTACT NUMBER</div>
                    <div>DATE AND TIME</div>
                </div>
        <div className=''>{listOfUsers.map((value,key)=>{
            return (
                <div className='flex m-4 p-4 justify-evenly border-b-2 border-blue-300 bg-orange-800 mx-44 w-3/4 rounded-md'>
                    <div>{value.fullName}</div>
                    <div>{value.emailId}</div>
                    <div>{value.contactNumber}</div>
                    <div>{value.dateAndTime}</div>
                    <button onClick={()=>deleteHandler(value.id)}>Delete</button>
                </div>
            )
        })
            
            }</div>
    </div>
  )
}

export default Homepage;
