
const Producers = ({ results }) => {
    return (
        <div className="flex flex-col gap-5">
            <p className="text-white font-medium text-lg">Productores:</p>
            {results.production_companies.map(result =>
                result.logo_path &&
                <>
                    <div className="flex gap-2 items-center">
                        <div className="w-12 h-12 px-2 bg-white flex items-center rounded-full">
                            <img className="w-full" src={`https://image.tmdb.org/t/p/original${result.logo_path}`} />
                        </div>
                        <p className="text-white">{result.name}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Producers