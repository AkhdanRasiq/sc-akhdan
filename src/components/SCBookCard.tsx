import React from "react"
import { IBookCardProps } from "../utils/SCInterface"
import { IconButton } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

function SCBookCard({ a_strTitle }: IBookCardProps) {
  return (
    <div className="bookCardContainer">
      <div className="imgBookCard">
        <IconButton id="btnBookmark" >
          <BookmarkBorderIcon fontSize="large" className="headerIcon" htmlColor="white" />
        </IconButton>
      </div>
      {/* <img className="imgBookCard" src="#" alt="dummy" /> */}

      
      <p className="txtBookCardTitle">{a_strTitle}</p>
    </div>
  )
}

export default SCBookCard
