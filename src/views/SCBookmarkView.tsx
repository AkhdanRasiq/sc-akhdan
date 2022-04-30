import React, { useEffect, useState } from 'react'
import * as UTILS from '../utils/SCUtil'
import * as ADAPTER from '../utils/SCAdapter'
import CONFIG from '../static/config.json'
import SCHeader from '../components/SCHeader'
import SCBodyHeader from '../components/SCBody/SCBodyHeader'
import { ICategoryState } from '../utils/SCInterface'
import SCBodyContent from '../components/SCBody/SCBodyContent'


function SCBookmarkView() {
  const [categories, setCategories] = useState<ICategoryState[] | []>([])

  useEffect(() => {
    const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.books))

    promise.then((res) => {
      console.log(res)
      // setCategories(res.data)
    }, (errReason) => {
      console.log(errReason)
    })
  }, [])

  return (
    <div className="homeViewContainer">
      Hello Bookmark
    </div>
  )
}

export default SCBookmarkView
