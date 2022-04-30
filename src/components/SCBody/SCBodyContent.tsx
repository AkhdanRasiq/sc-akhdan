import React from "react"
import { IBooksProps } from "../../utils/SCInterface"
import SCBookCard from "../SCBookCard"


function SCBodyContent({ a_arrBooks } : IBooksProps) {
  return (
    <div className="bodyContentContainer">
      <div className="bodyContentList">
        {a_arrBooks.map((item, index) => (
          <SCBookCard
            key               = {index}
            a_objBookDetail   = {item}
          />
        ))}
      </div>
    </div>
  )
}

export default SCBodyContent
