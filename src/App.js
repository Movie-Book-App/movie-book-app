import SideBar from "./Components/SideBar"
import Header from "./Components/Header"
import Main from "./Components/Main"
import FetchMovie from "./Components/FetchMovie"
import Collection from "./Components/Collection"
import Favorites from "./Components/Favorites"
import FavoriteMovies from "./Components/FavoriteMovies"
import FetchComics from "./Components/FetchComics"
import FetchBooks from "./Components/FetchBooks"
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
    return (
        <div className="rounded-[35px] min-w-[1292px] mt-[64px] mb-[41px] mx-[74px] border flex App">
            <div>
                <SideBar />
            </div>
            <div className="flex flex-col mr-[27px] w-full">
                <Header />
                <Routes>

                    <Route path="fav" element={<FavoriteMovies />} />

                    <Route path=":medium/Main" element={<Main />} />
                    <Route path=":medium/Main/*" element={<Main />} />
                    
                    <Route path=":medium/Collection" element={<Collection />} />
                    <Route path=":medium/Collection/*" element={<Collection />} />

                    <Route path=":medium/Favorites" element={<Favorites />} />
                    <Route path=":medium/Favorites/*" element={<Favorites />} />

                    <Route path="Movies/Search" element={<FetchMovie />} />
                    <Route path="TV-Shows/Search" element={<FetchMovie />} />
                    <Route path="Comics/Search" element={<FetchComics />} />
                    <Route path="Books/Search" element={<FetchBooks />} />

                    <Route path="*" element={<Navigate replace to="Books/Main" />} />

                </Routes>
            </div>
        </div>
    )
}

export default App
