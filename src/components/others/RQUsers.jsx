import { useQuery } from "react-query"
import axios from "axios";

const RQUsers = () => {
//useQuery requires atleast two arguments
//first argument contains unique key to identify the query
//function that returns promise 
  // const result=useQuery('user',()=>{
  //   return axios.get('http://localhost:1000/users')
  // })
  // console.log(result);

  const fetchUsers=()=>axios.get('http://localhost:1000/users')
  const {isLoading,data,isError,error}=useQuery('user',fetchUsers,{
    cacheTime:5000,
    staleTime:10000,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
    refetchInterval:2000,
    refetchIntervalInBackground:true
  })

    if(isLoading){
      return <h2>Loading...</h2>
    }
    if(isError){
      return <h2>Error: {error?.message}</h2>
    }

    return (
      <>
      <h2>All users(RQ)</h2>
      {
          data?.data.map(usr=>(
              <div key={usr.id}>{usr.name}</div>
          ))
      }
      </>
    )
  
}

export default RQUsers