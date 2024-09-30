import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [isLoading,setIsLoading]=useState(true)
  const [data,setData]=useState([])
  const [err,setErr]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:1000/users')
    .then(res=>{
        setData(res.data)
        setIsLoading(false)
    })
    .catch(err=>{
        console.log("Error to fetch data",err);
        setIsLoading(false)
        setErr(err.message)
    })
  },[])

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(err){
    return <h2>Error:  {err}</h2>
  }
  return (
    <>
    <h2>All users</h2>
    {
        data.map(usr=>(
            <div key={usr.id}>{usr.name}</div>
        ))
    }
    </>
  )
}

export default Users