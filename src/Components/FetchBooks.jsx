import React, { useState, useEffect } from "react"
import axios from "axios"
import { useAppData } from "../Context/DataStorage"

const FetchBooks = () => {

    const { globalSearchString } = useAppData()
    
    const [books, setBooks] = useState({ items: [] })
console.log(books)
    let API_URL = `https://www.googleapis.com/books/v1/volumes`

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await axios.get(`${API_URL}?q=${globalSearchString}`)
            setBooks(result.data)
        }
            fetchBooks()
    }, [globalSearchString])

    
    
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
            <div className="">
                {books.items.map((book, index) => {
                    return (
                            <div
                                key={index}
                                className="flex p-4 border-2  rounded-lg bg-gray-800 h-[300px] text-white"
                            >
                                <img
                                    className="h-full w-[190px] mr-10"
                                    alt={`${book.volumeInfo.title} book`}
                                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                                />
                                <div className="flex flex-col justify-between">
                                    <h1 className="text-2xl w-40">
                                        {book.volumeInfo.title}
                                    </h1>
                                        <p className="">
                                            Author: {bookAuthors(
                                                book.volumeInfo.authors
                                            )}
                                        </p>
                                        <p className="">
                                            Publish-date: {book.volumeInfo.publishedDate}
                                        </p>
                                </div>
                            </div>
                    )
                })}
            </div>
    )
}

export default FetchBooks