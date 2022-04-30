import React from "react"
import SCBookCard from "../SCBookCard"


function SCBodyContent() {
  return (
    <div className="bodyContentContainer">
      <div className="bodyContentList">
        {Array(2).fill(Array(2)).map((_, index) => (
          <SCBookCard
            key={index}
            a_strTitle={"This Title is very awesome " + (index + 1)}
          />
        ))}
      </div>
    </div>
  )
}

export default SCBodyContent
