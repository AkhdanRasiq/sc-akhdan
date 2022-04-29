import React, { useEffect } from 'react'
import * as UTILS from './utils/SCUtil'
import * as ADAPTER from './utils/SCAdapter'
import CONFIG from './static/config.json'
import SCHeader from './components/SCHeader'
import SCBodyHeader from './components/SCBody/SCBodyHeader'


function App() {

  useEffect(() => {
    const promise = ADAPTER.getRequest(UTILS.getApiUrl(CONFIG.api.categories))

    promise.then((res) => {
      console.log(res)
    }, (errReason) => {
      console.log(errReason)
    })
  }, [])

  return (
    <div className="App">
      <SCHeader />
      <SCBodyHeader />
    </div>
  );
}

export default App
