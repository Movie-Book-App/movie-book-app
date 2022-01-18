import SideBar from "./Components/SideBar"
import Header from "./Components/Header"
import Main from "./Components/Main"
import { Routes, Route } from "react-router-dom"
import FetchMovie from "./Components/FetchMovie"

function App() {
    return (
        <div className="rounded-[35px] min-w-[1292px] mt-[64px] mb-[41px] mx-[74px] border flex">
            <div>
                <SideBar />
            </div>
            <div className="flex flex-col mr-[27px] w-full">
                <Header />
                <Main className="" />
                <FetchMovie />
            </div>
            <Routes>
                <Route path="/movie" element={<FetchMovie />} />
            </Routes>
        </div>
    )
}

export default App
