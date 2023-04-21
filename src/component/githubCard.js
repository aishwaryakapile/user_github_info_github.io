import React, { useState, useEffect } from 'react';
import { Card, Image, Text, CardBody, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './style.css'


const GithubCard = () => {
    const location = useLocation();
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/${location.state.username}`)
      .then(res => {
        setUserdata(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [location.state.username]);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <Card maxW="sm" boxShadow='dark-lg'>
            <CardBody className='mb-4'>
              <Stack mt="6" spacing="3">
                
                <div className='avatarimg mb-3'>
                <Image src={userdata.avatar_url} borderRadius="lg" className='avatar' />
                </div>
              
                <Text as='b'>Username: {userdata.login}
                </Text>
                <Text as='b'>Name: {userdata.name}</Text>
                <Text as='b'>No. of public repos: {userdata.public_repos}</Text>
                <Text as='b'>No. of public gists: {userdata.public_gists}</Text>
                <Text as='b'>Profile created at in time format of YYYY-MM-DD.: {userdata.created_at}</Text>

              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default GithubCard;
