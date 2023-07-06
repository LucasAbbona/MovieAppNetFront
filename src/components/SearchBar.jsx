import { useContext, useRef } from "react"
import { MediaContext } from "../context/MediaContext"
import {AiOutlineSearch} from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
const SearchBar = () => {
    const {ChangeQuery} = useContext(MediaContext)
    const navigate = useNavigate()
    const entrada = useRef('')
    const Enviar = (e) =>{
        e.preventDefault()
        ChangeQuery(entrada.current.value)
        navigate('/search')
        entrada.current.value = ''
    }
    return (
    <form onSubmit={Enviar} className="flex items-center">
        <input type="text" placeholder="Buscar" className="bg-neutral-700 outline-none md:text-sm rounded-s-md p-1" ref={entrada}/>
        <button className="bg-neutral-700 p-1.5 md:p-1 rounded-e-md hover:shadow-md hover:shadow-black transition-all"><AiOutlineSearch size={20} color="white"/></button>
    </form>
  )
}

export default SearchBar