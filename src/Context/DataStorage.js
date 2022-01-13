import { createContext, useContext } from 'react';

const DataStorage = createContext();

function AppState (props) {

  return (
    <DataStorage.Provider value={{  }}>
            {props.children}
    </DataStorage.Provider>
  )
}
function useAppData() {
  return useContext(DataStorage)
}

export { DataStorage, useAppData, AppState };
