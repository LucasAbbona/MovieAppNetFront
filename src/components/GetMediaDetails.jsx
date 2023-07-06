import axios from "axios"
import { useEffect, useState } from "react";
import SingleMediaUI from "./View/SingleMedia/SingleMediaUI";

const GetMediaDetails = ({id,type}) => {
    const [results,setResults] = useState()
    const request = async () =>{
        await axios(`https://localhost:44307/${type}/${id}`)
        .then(response => {
            console.log(response.data)
            setResults(response.data)
        }).catch(error =>
            console.error(error)
        );
    }
    useEffect(()=>{
        request()
    },[id])
  return (
    <SingleMediaUI data={results} type={type} />
  )
}

export default GetMediaDetails