import SideBar from "./Components/SideBar"
import Header from "./Components/Header"
import Main from "./Components/Main"
import FetchMovie from "./Components/FetchMovie"
import Collection from "./Components/Collection"
import Favorites from "./Components/Favorites"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <div className="rounded-[35px] min-w-[1292px] mt-[64px] mb-[41px] mx-[74px] border flex App">
            <div>
                <SideBar />
            </div>
            <div className="flex flex-col mr-[27px] w-full">
                <Header />
                <Routes>
                    <Route path="main" element={<Main />} />
                    <Route path="search" element={<FetchMovie />} />
                    <Route path="collection" element={<Collection />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<Navigate replace to="/main" />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
