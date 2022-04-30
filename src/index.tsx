import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/styles.scss'
import reportWebVitals from './reportWebVitals'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import router from './static/router'
import Header from './components/SCHeader'
import SCBookModal from './components/SCBookModal'
// import AlertCustom from './components/Util/AlertCustom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <SCBookModal />
      <Routes>
        {router.map((data) => (
          <Route key={data.id} path={data.path} element={<data.element />} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
