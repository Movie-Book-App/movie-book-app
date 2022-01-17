import { useReducer, useEffect } from "react"

function UserContext() {
    const testObj = {
        name: "Andreas Langner",
        picture: "https://avatars.githubusercontent.com/u/85481701?v=4",
        mediaType: "Books",
        subMenu: "Dashboard",
    }

    const userObjReducer = (originalObj, action) => {
        switch (action.type) {
            case "change media type":
                const mediaObj = { ...originalObj }
                mediaObj.mediaType = action.medium
                return { ...mediaObj }
                break

            case "change sub menu":
                const menuObj = { ...originalObj }
                menuObj.subMenu = action.medium
                return { ...menuObj }
                break

            case "restore":
                return { ...action.data }
                break

            default:
                return originalObj
                break
        }
    }

    const [userObj, dispatchUserObj] = useReducer(userObjReducer, {})

    useEffect(() => {
        const restoredUserObj = localStorage.getItem("movieBookApp");
        const startUserObj = restoredUserObj ? JSON.parse(restoredUserObj) : testObj;
        dispatchUserObj({type: "restore", data: startUserObj})
    }, {});


    useEffect(() => {
        localStorage.setItem("movieBookApp", JSON.stringify(userObj))
    }, [userObj]);

    return [userObj, dispatchUserObj]
}

export default UserContext
