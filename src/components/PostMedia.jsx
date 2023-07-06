import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { MediaContext } from "../context/MediaContext"
import MediaUI from "./View/MediaUI"
import Loader from "./View/Loader"

const PostMedia = ({ type }) => {
  const { query } = useContext(MediaContext)
  const [results, setResults] = useState('')
  const [loader, setLoader] = useState(true)
  const url = type == 'movie' ? `https://localhost:44307/media/GetMovie` : `https://localhost:44307/media/GetSerie`
  const request = async () => {
    await axios.post(url, { "movie": `${query}` }, {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'text/json'
      }
    }).then(resp => {
      console.log(resp.data.results)
      setResults(resp.data.results)
      setLoader(false)
    }).catch(
      error => console.log(error)
    )
  }
  useEffect(() => {
    request()
  }, [query])
  return (
    <>
      {loader && <Loader />}
      {results.length > 0 &&
        <div className="flex flex-wrap py-5 gap-5 justify-center w-full">
          {results.map(result =>
            result.poster_path != null &&
            <MediaUI result={result} type={type} key={result.id} />
          )}
        </div>}
      {!loader && results.length == 0 && <p className="text-2xl text-white text-center font-semibold">No Results Founded</p>}
    </>
  )
}

export default PostMedia