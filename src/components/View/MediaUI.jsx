import { useNavigate } from "react-router-dom"

const MediaUI = ({ result,type }) => {
    const navigate = useNavigate()
    return (
        <div className="w-1/3 sm:w-1/4 md:w-1/6 rounded-md bg-neutral-700  text-white shadow-sm shadow-neutral-500 hover:shadow-lg hover:shadow-neutral-500 transition-all cursor-pointer" key={result.id} onClick={()=>navigate(`/${type}/${result.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original${result?.poster_path}`} className="w-full rounded-t-md " alt={type == 'series' ? result?.name : result?.title} />
            <div className="w-full p-2">
                <p className="font-semibold">{type == 'series' ? result?.original_name : result?.original_title}</p>
                <p className="text-sm font-medium text-gray-400 ">{type == 'series' ? result?.first_air_date.substring(0, 4) : result?.release_date.substring(0, 4)}</p>
            </div>
        </div>
    )
}

export default MediaUI