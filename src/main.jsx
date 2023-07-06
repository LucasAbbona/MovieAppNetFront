import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { MediaContextProvider } from './context/MediaContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search.jsx'
import NavBar from './components/View/NavBar'
import SingleMedia from './pages/SingleMedia.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MediaContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/search' element={<Search />} />
                <Route path='/:media/:id' element={<SingleMedia />}/>
            </Routes>
        </BrowserRouter>
    </MediaContextProvider>

)
