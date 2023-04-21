import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './login'
import GithubCard from './githubCard'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/githubCard' element={<GithubCard/>}/>

        </Routes>
    </div>
  )
}

export default Routing