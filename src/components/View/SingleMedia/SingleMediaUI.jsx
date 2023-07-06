import GetMediaCredits from "../../GetMediaCredits"
import GetMediaRecommendations from "../../GetMediaRecommendations"
import Genres from "./Genres"
import Producers from "./Producers"

const SingleMediaUI = ({ data,type }) => {
  return (
    <>
      {data &&
        <div className="w-full min-h-screen h-auto" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
          <div className="min-h-screen bg-black bg-opacity-60 w-full flex flex-col md:flex-row justify-around text-white px-5 md:px-10 py-10 gap-5">
            <div className="md:w-4/5 flex flex-col gap-5">
              <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 md:gap-2">
                <p className="text-5xl font-bold w-full md:w-2/3">{type == 'series' ? data?.original_name : data?.original_title}</p>
                <Genres results={data} />
              </div>
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between">
                <p className="text-sm w-2/3">{data?.overview}</p>
                <p><b>Year:</b> {type == 'series' ? data?.first_air_date.substring(0,4) : data?.release_date.substring(0, 4)}</p>
                {type == 'movie' && <p>{data?.runtime} min</p>}
                {type == 'series' && <p><b>Seasons:</b> {data.number_of_seasons}</p>}
              </div>
              <div className="flex gap-5">
                <Producers results={data} />
              </div>
              <GetMediaCredits id={data.id} type={type} characters={3}/>
              <GetMediaRecommendations type={type} id={data.id} />
            </div>
            <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} className="md:h-96 rounded-md" alt="" />
          </div>
        </div>
      }
    </>
  )
}

export default SingleMediaUI