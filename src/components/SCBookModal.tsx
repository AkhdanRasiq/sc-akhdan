import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { IBookState } from "../utils/SCInterface"
import ArticleIcon from '@mui/icons-material/Article'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'


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
  const [open, setOpen] = useState(false)
  const [book, setBook] = useState<IBookState>({id: 1, category_id: 0, authors: ['Lorem ipsum'], title: 'Lorem', cover_url: 'https://google.com', audio_length: 1, description: 'Lorem Ipsum', sections: [{title: 'Lorem', content: 'Ipsum'}]})
  const handleOpen      = () => setOpen(true)
  const handleClose     = () => setOpen(false)


  useEffect(() => {
    window.addEventListener("book", onEventBook)
    return () => {
        window.removeEventListener("book", onEventBook)
    }
})

const onEventBook = (event: any) => {
  setBook(event.detail)
  handleOpen()
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
          <img src={book.cover_url} alt={book.title} />
          <div className="contentContainer">
            <Typography id="modal-modal-title" variant="h3" component="h2">
              {book.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <span style={{ display: 'flex' }}>{book.authors.map((item, index) => (
                <p>{index > 0 ? "& " + item : item }&ensp;</p>
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
                  <p>{index + 1}&ensp;{item.title}</p>
                  <hr />
                </div>
              ))}
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default SCBookModal
