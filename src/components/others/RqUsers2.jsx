import { useQuery } from "react-query"
import axios from "axios";

const RQUsers2 = () => {

  const fetchUsers=()=>axios.get('http://localhost:1000/users')
  const {isLoading,data,isError,error,isFetching,refetch}=useQuery('user',fetchUsers,{
    enabled:false
  })

    if(isLoading || isFetching){
      return <h2>Loading...</h2>
    }
    if(isError){
      return <h2>Error: {error?.message}</h2>
    }

    return (
      <>
      <h2>All users(RQ)</h2>
      <button onClick={refetch}>Fetch Users</button>
      {
          data?.data.map(usr=>(
              <div key={usr.id}>{usr.name}</div>
          ))
      }
      </>
    )
  
}

export default RQUsers2