import React   from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/Ankit27-09')
    //     .then(res => res.json()
    //     .then(data =>{ console.log(data)
    //         setData(data);
    //     }
    //     ))
    // },[])

  return (
    <>
    <div className='flex bg-gray-400' >
    <div className = "text-center m-4 bg-gray-500 p-4 text-3xl" >Github Followers: {data.followers}</div>
    <img src={data.avatar_url} alt="Github picture"  />
    </div>
    </>
  )
}

export default Github;

export const gitHubInfoLoader = async() => {
 const response =  await fetch('https://api.github.com/users/Ankit27-09')
  return response.json();
} 