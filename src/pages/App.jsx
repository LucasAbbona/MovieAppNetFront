import GetMedia from "../components/GetMedia"
import SectionLabel from "../components/View/SectionLabel"
import { MediaContext } from '../context/MediaContext'
import { useContext } from "react"
function App() {
  const { section } = useContext(MediaContext)
  return (
    <div className="w-full px-10 bg-neutral-800 ">
      <SectionLabel title={section == 'movie' ? 'Peliculas' : 'Series'} />
      {section == 'movie' && <GetMedia type={'movie'} />}
      {section == 'serie' && <GetMedia type={'series'} />}
    </div>
  )
}

export default App
