import React, { useEffect, useState } from 'react'
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
  const [fetchConfig, setFetchConfig]           = useState({categoryId: -1, rowsPerPage: 10, page: 0})


  useEffect(() => {
    let params = {
      categoryId  : fetchConfig.categoryId,
      size        : fetchConfig.rowsPerPage,
      page        : fetchConfig.page
    }

    const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.books), params)

    promise.then((res) => {
      console.log(res.data)
    }, (errReason) => {
      console.log(errReason)
    })
  }, [fetchConfig])

  useEffect(() => {
    const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.categories))

    promise.then((res) => {
      setCategories(res.data)
    }, (errReason) => {
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


  return (
    <div className="homeViewContainer">
      <SCBodyHeader
        a_arrCategories             = {categories}
        callbackOnCategorySelected  = {onCategorySelected}
      />
      <SCBodyContent />
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
