import React from "react"
import { Link } from 'react-router-dom'


function SCHeader() {
  return (
    <div className="headerContainer">
      <Link to="/">
        <h2 className="txtHeaderTitle">SC-Akhdan</h2>
      </Link>
      <Link to="/bookmark">
        <button className="btnHeaderBookmark">Bookmark</button>
      </Link>
    </div>
  )
}

export default SCHeader
