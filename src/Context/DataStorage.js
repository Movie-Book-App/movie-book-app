import { createContext, useContext } from "react"
import MovieSearch from "./MovieSearch"
import UserContext from "./UserContext"
import UserMovieSearchList from "./UserMovieSearchList"
import UserMovieFavList from "./UserMovieFavList"
const DataStorage = createContext()

function AppState(props) {
    const [globalSearchString, setGlobalSearchString] = MovieSearch()
    const userContext = UserContext()
    const [userObj, dispatchUserObj] = userContext
    const [list, onEdit, onAdd] = UserMovieSearchList()
    const [fav, onAddFavList, onEditFavList] = UserMovieFavList()
    return (
        <DataStorage.Provider
            value={{
                globalSearchString,
                setGlobalSearchString,
                userObj,
                dispatchUserObj,
                list,
                onEdit,
                onAdd,
                fav,
                onAddFavList,
                onEditFavList,
            }}
        >
            {props.children}
        </DataStorage.Provider>
    )
}
function useAppData() {
    return useContext(DataStorage)
}

export { DataStorage, useAppData, AppState }
