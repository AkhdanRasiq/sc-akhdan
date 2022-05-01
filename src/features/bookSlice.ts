import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { IBookList } from '../utils/SCInterface'


const initialState: IBookList = {
  bookList: []
}

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<any>) => {
      const sameItem = state.bookList.findIndex(item => item.id === action.payload.id)

      if(sameItem !== -1)
        console.log("Already Bookmarked")
      else {
        state.bookList.push(action.payload)
      }
    },
    removeBook: (state, action: PayloadAction<any>) => {
      const indexBook = state.bookList.findIndex(item => item.id === action.payload.id)

      state.bookList.splice(indexBook, 1)
    }
  }
})

export const {
  addBook,
  removeBook
} = bookSlice.actions

export const selectBookList = (state: RootState) => state.books.bookList

export default bookSlice.reducer
