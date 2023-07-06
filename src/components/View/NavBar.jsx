import { useContext } from "react"
import { MediaContext } from "../../context/MediaContext"
import SearchBar from "../SearchBar"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const {ChangeSection} = useContext(MediaContext)
  const navigate = useNavigate()
  return (
    <nav className="w-full px-5 md:px-20 py-4 bg-neutral-900 z-50">
        <ul className="w-full flex justify-between items-center text-white">
            <div className="flex gap-3">
              <li className="bg-neutral-700 px-5 py-1.5 rounded-lg text-sm font-semibold cursor-pointer hover:bg-neutral-600 transition-all" onClick={()=>{ChangeSection('movie');navigate('/')}}>Peliculas</li>
              <li className="bg-neutral-700 px-5 py-1.5 rounded-lg text-sm font-semibold cursor-pointer hover:bg-neutral-600 transition-all" onClick={()=>{ChangeSection('serie');navigate('/')}}>Series</li>
            </div>
            <li>
                <SearchBar/>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar