import noimage from '../../../assets/noProfile.jpg'
const Cast = ({ data }) => {
    return (
        <>
            <p className="text-white font-medium text-lg">Cast:</p>
            <div className="flex flex-wrap gap-5">
                {data.map(actor =>
                    <div key={actor.id} className="flex flex-col items-center">
                        <div className="w-24 h-28 rounded-md overflow-hidden justify-center items-center">
                            <img src={actor.profile_path == null ? noimage : `https://image.tmdb.org/t/p/original${actor.profile_path}`} className="w-full" alt="" />
                        </div>
                        <p className="text-sm">{actor.original_name}</p>
                        <p className="text-sm text-gray-400">as {actor.character == '' ? 'Undefined' : actor.character}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cast