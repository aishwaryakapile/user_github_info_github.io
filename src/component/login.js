import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom' 
import {FormLabel,Input} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import axios from 'axios'

const Login = ({ setUserData }) => {
    const [username,setUsername]=useState('');
    const navigate=useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.get(`https://api.github.com/users/{username}`);
        setUserData(data);
       
      };
      function clickButton(){
        if (username) {
            navigate('./githubCard', { state: { username } });
          } else {
            document.getElementById('userNameNote').innerHTML="Please Enter Username";
          }
    }
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 border shadow p-3 mb-5 bg-white rounded'>
                   
                    <form onSubmit={submitHandler}>
                            <FormLabel className='mt-3'>User Name</FormLabel>
                            <Input placeholder='Enter Your Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            <div id="userNameNote" className='mt-3 text-danger'></div>
                            <Button colorScheme='blue' className='mt-4 mb-4' type='submit' onClick={ clickButton}>Submit</Button>
                            </form>
                      
                    </div>
                    <div className='col-md-3'></div>

                </div>
            </div>

        </div>
    )
}

export default Login