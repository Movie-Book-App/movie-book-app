import React, {useState, useEffect} from 'react';

import axios from "axios"
import Book from "./Book"

const API_KEY = "RZWBIWf1C8Q7nm5KrLRBlBH6wS8cyjI1"

function BookList() {
    const [books, setBooks] = useState([])
    console.log(books)

    useEffect(() => {
        const getBooks = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key&api-key=${API_KEY}`
            )
            setBooks(res.data.reuslts.books)
            console.log(res.data)
        }
        getBooks()
    }, [])

  return (
  
    <div>
      <h1>Books List</h1>
      
    </div>
    )
}

export default BookList;
