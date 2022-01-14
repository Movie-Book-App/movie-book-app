import { createContext, useContext } from "react"
import MovieSearch from "./MovieSearch"

const DataStorage = createContext()

function AppState(props) {
    const [globalSearchString, setGlobalSearchString] = MovieSearch()
    return (
        <DataStorage.Provider
            value={{ globalSearchString, setGlobalSearchString }}
        >
            {props.children}
        </DataStorage.Provider>
    )
}
function useAppData() {
    return useContext(DataStorage)
}

export { DataStorage, useAppData, AppState }
