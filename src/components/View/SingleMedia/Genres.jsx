
const Genres = ({ results }) => {
    return (
            <div className="flex flex-wrap gap-3 w-full md:w-1/3 justify-start md:justify-end">
                {results.genres.map(genre =>
                <div key={genre.id} className="border flex justify-center items-center px-2 h-1/2 rounded-2xl">
                    <p className="text-white ">{genre.name}</p>
                </div>)}
            </div>
    )
}

export default Genres