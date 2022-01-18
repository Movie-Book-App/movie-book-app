import { createContext, useContext } from "react"
import MovieSearch from './MovieSearch'
import UserContext from "./UserContext"

const DataStorage = createContext()

function AppState(props) {

    const [globalSearchString, setGlobalSearchString] = MovieSearch()   
    const userContext = UserContext();
    const [userObj, dispatchUserObj] = userContext;
    return (
        <DataStorage.Provider value={{ globalSearchString, setGlobalSearchString, userObj, dispatchUserObj }}>{props.children}</DataStorage.Provider>

    )
}
function useAppData() {
    return useContext(DataStorage)
}

export { DataStorage, useAppData, AppState }
