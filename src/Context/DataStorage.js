import { createContext, useContext } from "react"
import MovieSearch from "./MovieSearch"
import UserContext from "./UserContext"
import UserFavorite from "./UserFavorite"
const DataStorage = createContext()

function AppState(props) {
    const [globalSearchString, setGlobalSearchString] = MovieSearch()
    const userContext = UserContext()
    const [userObj, dispatchUserObj] = userContext
    const [list, onEdit, onAdd] = UserFavorite()
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
