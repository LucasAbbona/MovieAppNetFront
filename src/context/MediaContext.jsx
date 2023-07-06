import { createContext, useState } from "react";

export const MediaContext = createContext([])

export const MediaContextProvider = ({children}) => {
    const [query,setQuery] = useState('')
    const [section,setSection] = useState('movie')
    const ChangeQuery = (newQ) =>{
        setQuery(newQ)
    }
    const ChangeSection = (currentS) =>{
        setSection(currentS)
    }
    return (
        <MediaContext.Provider value={{query,section,ChangeQuery,ChangeSection}}>
            {children}
        </MediaContext.Provider>
        )
}
