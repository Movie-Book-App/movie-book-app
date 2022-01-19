import { useReducer } from "react"
function UserMovieFavList() {
    const [fav, dispatch] = useReducer(reducer, [])
    function reducer(array, action) {
        const newArray = [...array]
        if (action.type === "ADD") {
            return [...newArray, ...action.payload]
        }
        return newArray
    }
    function onAdd2(param) {
        dispatch({ type: "ADD", payload: param })
    }
    return [fav, onAdd2]
}

export default UserMovieFavList
