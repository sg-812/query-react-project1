import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from '../components/others/Home'
import Users from '../components/others/Users'
import RQUsers from '../components/others/RQUsers'
import Header from '../common/Header'
import RQUsers2 from '../components/others/RqUsers2'

const Routing = () => {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
            <Route path="" element={<Home/>} />
            <Route path="users" element={<Users/>} />
            <Route path="rqusers" element={<RQUsers/>} />
            <Route path="rqusers2" element={<RQUsers2/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default Routing