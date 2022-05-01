import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { IBookState } from "../utils/SCInterface"
import ArticleIcon from '@mui/icons-material/Article'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import { useAppDispatch } from '../app/hooks'
import { addBook, removeBook } from '../features/bookSlice'
import { setAlert } from '../features/alertSlice'

import { useAppSelector } from '../app/hooks'
import { selectBookList } from '../features/bookSlice'
import { eventDispatcher } from "../utils/SCUtil"


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '0',
  outline: '0',
  boxShadow: 24,
  p: 4,
}

function SCBookModal() {
  const [open, setOpen]                         = useState(false)
  const [book, setBook]                         = useState<IBookState>({id: 1, category_id: 0, authors: ['Lorem ipsum'], title: 'Lorem', cover_url: 'https://google.com', audio_length: 1, description: 'Lorem Ipsum', sections: [{title: 'Lorem', content: 'Ipsum'}]})
  const [openSection, setOpenSection]           = useState(false)
  const [selectedSection, setSelectedSection]   = useState(0)
  const handleOpen                              = () => setOpen(true)
  const dispatch                                = useAppDispatch()
  const bookmarkList                            = useAppSelector(selectBookList)


  useEffect(() => {
    window.addEventListener("book", onEventBook)
    return () => {
        window.removeEventListener("book", onEventBook)
    }
})

const data = {
  ...book,
  qty : 1
}

const handleBookmark = () => {
  const sameItem = bookmarkList.findIndex(item => item.id === data.id)

  if(sameItem !== -1) {
    dispatch(removeBook(data))
    dispatch(setAlert({ status: true, msg: "Remove from Bookmark" }))
  }
  else {
    dispatch(addBook(data))
    dispatch(setAlert({ status: true, msg: "Added to Bookmark" }))
  }
}

const handleClose = () => {
  setOpen(false)
  setOpenSection(false)
  eventDispatcher('refreshBookmark', {})
}

const onEventBook = (event: any) => {
  setBook(event.detail)
  handleOpen()
}

const onOpenSection = (event: any) => {
  setOpenSection(true)
  setSelectedSection(Number.parseInt(event.target.childNodes[0].data))
  console.log(Number.parseInt(event.target.childNodes[0].data))
}

const onCloseSection = () => {
  setOpenSection(false)
}


  return (
    <div className="bookModalContainer">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="boxModalContainer">
          { !openSection
            ?
            <div className="modalParentContainer">
              <div className="btnCloseModalBook">
                <IconButton onClick={handleClose}>
                  <CloseIcon fontSize="medium" />
                </IconButton>
              </div>
              <div className="btnBookmarkBook">
                <IconButton onClick={() => handleBookmark()}>
                  <BookmarkIcon fontSize="medium" />
                </IconButton>
              </div>

              <img className="imgBookModalCover" src={book.cover_url} alt={book.title} />
              <div className="contentContainer">
                <Typography id="modal-modal-title" variant="h3" component="h2">
                  {book.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <span style={{ display: 'flex' }}>{book.authors.map((item, index) => (
                    <>{index > 0 ? "& " + item : item }&ensp;</>
                  ))}</span>
                </Typography>

                <hr />
                <span className="spanModalInfoIcon">
                  <ArticleIcon fontSize="medium" className="headerIcon" htmlColor="black" />
                  <p>&ensp;{book.sections.length}&ensp;sections&emsp;</p>
                  <AccessAlarmIcon fontSize="medium" className="headerIcon" htmlColor="black" />
                  <p>&ensp;{Math.round(book.audio_length / 60)}&ensp;min</p>
                </span>
                <hr />

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <b>What's it about?</b>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {book.description}
                </Typography>

                <br />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <b>What's Inside?</b>
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {book.sections.map((item, index) => (
                    <div className="sectionTitle">
                      <p key={index} onClick={onOpenSection}>{index + 1}&ensp;{item.title}</p>
                      <hr />
                    </div>
                  ))}
                </Typography>
              </div>
            </div>
            :
            <div className="modalReadBookContainer">
              <div className="btnReadBookBack">
                <IconButton onClick={onCloseSection}>
                  <ArrowBackIosNewIcon fontSize="medium" />
                </IconButton>
              </div>

              <Carousel
                className     = 'carrouselBanner'
                autoPlay      = {false}
                infiniteLoop  = {false}
                showStatus    = {true}
                showThumbs    = {false}
                showIndicators= {false}
                selectedItem  = {selectedSection-1}
              >
                {book.sections.map((item, index) => (
                  <div key={index}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <b>{item.title}</b>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {item.content}
                    </Typography>
                  </div>
                ))}
            </Carousel>
            </div>
          }
        </Box>
      </Modal>
    </div>
  )
}

export default SCBookModal
