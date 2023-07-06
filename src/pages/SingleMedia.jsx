import { useParams } from "react-router-dom"
import GetMediaDetails from "../components/GetMediaDetails"

const SingleMedia = () => {
    const {id,media} = useParams()
  return (
    <GetMediaDetails id={id} type={media} />
  )
}

export default SingleMedia