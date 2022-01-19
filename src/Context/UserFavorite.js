import { useReducer } from "react"
function UserFavorite() {
    const [list, dispatch] = useReducer(reducer, [])

    function reducer(array, action) {
        const newArray = [...array]
        if (action.type === "SET_MOVIE_LIST") {
            const newList = [...action.payload]
            return newList
        } else if (action.type === "FAV_MOVIE") {
            return newArray.map((movie) => {
                if (movie.id === action.payload.id) {
                    return { ...movie, active: !movie.active }
                }
                return movie
            })
        }
        return newArray
    }

    function onEdit(id) {
        dispatch({ type: "FAV_MOVIE", payload: { id: id } })
    }
    function onAdd(param) {
        dispatch({ type: "SET_MOVIE_LIST", payload: param })
    }
    return [list, onEdit, onAdd]
}

export default UserFavorite
