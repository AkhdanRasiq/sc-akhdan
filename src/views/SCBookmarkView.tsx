import React, { useEffect, useState } from 'react'
import SCBodyHeader from '../components/SCBody/SCBodyHeader'
import { IBookState } from '../utils/SCInterface'
import SCBodyContent from '../components/SCBody/SCBodyContent'

import { useAppSelector } from '../app/hooks'
import { selectBookList } from '../features/bookSlice'


function SCBookmarkView() {
  const [books, setBooks]   = useState<IBookState[] | []>([])
  const bookList            = useAppSelector(selectBookList)

  useEffect(() => {
    handleRefreshBookmark()
  }, [])

  useEffect(() => {
    window.addEventListener("refreshBookmark", handleRefreshBookmark)
    return () => {
        window.removeEventListener("refreshBookmark", handleRefreshBookmark)
    }
  })

  const handleRefreshBookmark = () => {
    setBooks(bookList)
  }

  const onSearchChange = (strSearch: string) => {
    const arrFilteredBooks: IBookState[] = []

    if(bookList.length !== 0) {
      bookList.find((element) => {
        if (element.title.toLowerCase() === strSearch.toLowerCase()) {
          arrFilteredBooks.push(element)
        }
        element.authors.find((elementChild) => {
          if (elementChild.toLowerCase() === strSearch.toLowerCase()) {
            arrFilteredBooks.push(element)
          }
          return null
        })
        return null
      })
    }
    else
      console.log("Books Empty!")
    
    setBooks(arrFilteredBooks)

    if (strSearch === "")
      setBooks(bookList)
  }


  return (
    <div className="homeViewContainer">
      <SCBodyHeader
        a_arrCategories             = {[]}
        callbackOnSearchChange      = {onSearchChange}
        callbackOnCategorySelected  = {()=>{}}
        a_bIsBookmark               = {true}
      />
      <SCBodyContent
        a_arrBooks                  = {books}
      />
    </div>
  )
}

export default SCBookmarkView
