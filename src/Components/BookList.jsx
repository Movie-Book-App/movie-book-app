import React, { useState } from "react"
import { useAppData } from "../Context/DataStorage"
import axios from "axios"

const API_URL = "AIzaSyDcEvDYwTyexKtuDdl3wDDa2rGmxqPgsdw"
const BookList = () => {
    const { globalSearchString } = useAppData()
    const [searchTerm, setSearchTerm] = useState("")
    const [books, setBooks] = useState({ items: [] })
    const onInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    let API_URL = `https://www.googleapis.com/books/v1/volumes`

    const fetchBooks = async () => {
        const result = await axios.get(`${API_URL}?q=${globalSearchString}`)
        setBooks(result.data)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        fetchBooks()
    }

    const bookAuthors = (authors) => {
        if (authors.length <= 2) {
            authors = authors.join(" and ")
        } else if (authors.length > 2) {
            let lastAuthor = " and " + authors.slice(-1)
            authors.pop()
            authors = authors.join(", ")
            authors += lastAuthor
        }
        return authors
    }

    return (
        <section>
            <form onSubmit={onSubmitHandler}>
                <label>
                    <span>Search for books</span>
                    <input
                        type="search"
                        placeholder="Search Books"
                        
                        onChange={onInputChange}
                    />
                    <button type="submit">Search</button>
                </label>
            </form>
            <ul>
                {books.items.map((book, index) => {
                    return (
                        <li key={index}>
                            <div>
                                <img
                                    alt={`${book.volumeInfo.title} book`}
                                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                                />
                                <div>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p>
                                        {bookAuthors(book.volumeInfo.authors)}
                                    </p>
                                    <p>{book.volumeInfo.publishedDate}</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
export default BookList;

// import React, {useState, useEffect} from 'react';

// import axios from "axios"
// import Book from "./Book"

// const API_KEY = "RZWBIWf1C8Q7nm5KrLRBlBH6wS8cyjI1"

// function BookList() {
//     const [books, setBooks] = useState([])
//     console.log(books)

//     useEffect(() => {
//         const getBooks = async () => {
//             const res = await axios.get(
//                 `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key&api-key=${API_KEY}`
//             )
//             setBooks(res.data.reuslts.books)
//             console.log(res.data)
//         }
//         getBooks()
//     }, [])

//   return (

//     <div>
//       <h1>Books List</h1>

//     </div>
//     )
// }

// export default BookList;
