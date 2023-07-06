import axios from "axios"
import { useEffect, useState } from "react"
import MediaUI from "./View/MediaUI"
import Loader from "./View/Loader"

const GetMedia = ({ type }) => {
    const [results, setResults] = useState([])
    const [loader, setLoader] = useState(true)
    const request = async () => {
        await axios.get(`https://localhost:44307/${type}`)
            .then(response => {
                console.log(response.data)
                setResults(response.data.results)
                setLoader(false)
            }).catch(error =>
                console.error(error)
            );
    }
    useEffect(() => {
        request()
    }, [])

    return (
        <>
            {loader && <Loader/>}
            {results &&
                <div className="flex flex-wrap py-5 gap-5 justify-center w-full">
                    {results.map(result =>
                        <MediaUI result={result} type={type} key={result.id} />
                    )}
                </div>
            }
        </>
    )
}

export default GetMedia