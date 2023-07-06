import axios from "axios"
import { useEffect, useState } from "react";
import Cast from "./View/SingleMedia/Cast";

const GetMediaCredits = ({ type, id, characters }) => {
    const [results, setResults] = useState([])
    const request = async () => {
        await axios(`https://localhost:44307/${type}/credits/${id}`)
            .then(response => {
                console.log(response.data)
                let res = []
                for (let i = 0; i < response.data.cast.length; i++) {
                    res.length < characters && res.push(response.data.cast[i])
                }
                setResults(res)
                console.log(results)
            }).catch(error =>
                console.error(error)
            );
    }
    useEffect(() => {
        request()
    }, [id])
    return (
        <Cast data={results} />
    )
}

export default GetMediaCredits