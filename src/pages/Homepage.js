import {useState,useEffect} from 'react';
import axios from 'axios';

function Homepage() {
    const [listOfUsers, setListOfUsers]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/users").then((res)=>{
            setListOfUsers(res.data);
        }).catch(err=> console.log(err));
    },[]);

  return (
    <div>
        <div>{listOfUsers.map((value,key)=>{
            return (
                <div>
                    <div>{value.fullName}</div>
                    <div>{value.emailId}</div>
                    <div>{value.contactNumber}</div>
                    <div>{value.dateAndTime}</div>
                </div>
            )
        })
            
            }</div>
    </div>
  )
}

export default Homepage;
