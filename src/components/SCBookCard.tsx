import React from "react"
import { IBookCardProps } from "../utils/SCInterface"
import { IconButton } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { eventDispatcher } from "../utils/SCUtil"

function SCBookCard({ a_objBookDetail }: IBookCardProps) {

  const onBookSelected = () => {
    eventDispatcher('book', { detail: a_objBookDetail })
  }

  return (
    <div className="bookCardContainer">
      <img className="imgBookCard" src={a_objBookDetail.cover_url} alt="a_objBookDetail.title" onClick={onBookSelected} />
    </div>
  )
}

export default SCBookCard
