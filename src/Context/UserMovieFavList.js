import { useReducer } from "react"
function UserMovieFavList() {
    const [fav, dispatch] = useReducer(reducer, [])
    function reducer(array, action) {
        const newArray = [...array]
        if (action.type === "ADD") {
            return [...newArray, ...action.payload]
        } else if (action.type === "REMOVE") {
            return newArray.filter((item) => item.id !== action.payload.id)
        }

        return newArray
    }
    function onAddFavList(param) {
        dispatch({ type: "ADD", payload: param })
    }
    function onEditFavList(id) {
        dispatch({ type: "REMOVE", payload: { id: id } })
    }
    return [fav, onAddFavList, onEditFavList]
}

export default UserMovieFavList
