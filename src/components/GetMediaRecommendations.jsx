import axios from "axios"
import { useEffect, useState } from "react"
import Related from "./View/SingleMedia/Related"

const GetMediaRecommendations = ({type,id}) => {
    const [results,setResults] = useState()
    const request = async () =>{
        await axios(`https://localhost:44307/${type}/${id}/recommendations`)
        .then(response=>{
            console.log(response.data)
            let res = []
            for(let i = 0;i<response.data.results.length;i++){
                if(response.data.results[i].poster_path != null && res.length < 3){
                    res.push(response.data.results[i])
                }
            }
            setResults(res)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        request()
    },[id])
    return (
        <>
        {results && <Related data={results} type={type} />}
        </>
        )
}

export default GetMediaRecommendations