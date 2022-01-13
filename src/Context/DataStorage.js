import { createContext, useContext } from 'react';

const DataStorage = createContext();

function AppState (props) {

  return (
    <div>
        <DataStorage.Provider value={{  }}>
            {props.children}
        </DataStorage.Provider>
    </div>
    )
}
function useAppData() {
  return useContext(DataStorage)
}

export { DataStorage, useAppData, AppState };
