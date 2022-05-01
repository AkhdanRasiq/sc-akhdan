import React, { useEffect, useRef, useState } from 'react'
import * as UTILS from '../utils/SCUtil'
import * as ADAPTER from '../utils/SCAdapter'
import CONFIG from '../static/config.json'
import SCBodyHeader from '../components/SCBody/SCBodyHeader'
import { ICategoryState, IBookState } from '../utils/SCInterface'
import SCBodyContent from '../components/SCBody/SCBodyContent'
import SCBodyPagination from '../components/SCBody/SCBodyPagination'


function SCHomeView() {
  const [categories, setCategories]             = useState<ICategoryState[] | []>([])
  const [books, setBooks]                       = useState<IBookState[] | []>([])
  const [savedBooks, setSavedBooks]             = useState<IBookState[] | []>([])
  const [fetchConfig, setFetchConfig]           = useState({categoryId: -1, rowsPerPage: 10, page: 0})
  const isMounted                               = useRef(false)


  useEffect(() => {
    if(isMounted.current) {
      let params = {
        categoryId  : fetchConfig.categoryId,
        size        : fetchConfig.rowsPerPage,
        page        : fetchConfig.page
      }
  
      const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.books), params)
  
      promise.then((res: any) => {
        setBooks(res.data)
        setSavedBooks(res.data)
      }, (errReason: any) => {
        console.log(errReason)
      })
    } else {
     isMounted.current = true;
    }
  }, [fetchConfig])

  useEffect(() => {
    const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.categories))

    promise.then((res: any) => {
      setCategories(res.data)
    }, (errReason: any) => {
      console.log(errReason)
    })
  }, [])

  const onCategorySelected = (iCategoryId: number) => {
    setFetchConfig({...fetchConfig, categoryId: iCategoryId})
  }

  const onPageChange = (iPage: number) => {
    setFetchConfig({...fetchConfig, page: iPage})
  }

  const onRowsPerPageChange = (iRows: number) => {
    console.log(iRows)
    setFetchConfig({...fetchConfig, rowsPerPage: iRows, page: 0})
  }

  const onSearchChange = (strSearch: string) => {
    const arrFilteredBooks: IBookState[] = []

    if(savedBooks.length !== 0) {
      console.log(strSearch) // Remove on production
      savedBooks.find((element) => {
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
      setBooks(savedBooks)

    console.log(arrFilteredBooks) // Remove on production
  }


  return (
    <div className="homeViewContainer">
      <SCBodyHeader
        a_arrCategories             = {categories}
        callbackOnSearchChange      = {onSearchChange}
        callbackOnCategorySelected  = {onCategorySelected}
      />
      <SCBodyContent
        a_arrBooks                  = {books}
      />
      <SCBodyPagination
        a_isCategorySelected        = {fetchConfig.categoryId}
        a_iPage                     = {fetchConfig.page}
        a_IRowsPerPage              = {fetchConfig.rowsPerPage}
        callbackOnRowsPerPageChange = {onRowsPerPageChange}
        callbackOnPageChange        = {onPageChange}
      />
    </div>
  )
}

export default SCHomeView
