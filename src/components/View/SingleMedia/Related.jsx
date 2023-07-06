import { useNavigate } from "react-router-dom"

const Related = ({ data, type }) => {
    const navigate = useNavigate()
    return (
        <>
            <p className="text-white font-medium text-lg">Related</p>
            <div className="w-full flex flex-row flex-wrap justify-between md:justify-normal gap-10">
                {data.map(result =>
                    result.poster_path != null &&
                    <img src={`https://image.tmdb.org/t/p/original${result.poster_path}`} className="w-1/4 cursor-pointer rounded-md hover:shadow-lg hover:shadow-neutral-500 transition-all" onClick={() => { navigate(`/${type}/${result.id}`) }} alt="" key={result.id} />
                )}
            </div>
        </>
    )
}

export default Related