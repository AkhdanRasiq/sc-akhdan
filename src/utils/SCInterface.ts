import { AlertColor } from '@mui/material'


interface _IBookSections {
  title                       : string,
  content                     : string
}

export interface IAlert {
  status                      : boolean,
  severity                    : AlertColor,
  msg                         : string
}


// STATE

export interface ICategoryState {
  id                          : number,
  name                        : string
}

export interface IBookState {
  id                          : number,
  category_id                 : number,
  authors                     : string[] | [],
  title                       : string,
  cover_url                   : string,
  audio_length                : number,
  description                 : string,
  sections                    : _IBookSections[] | []
}


// PROPS

export interface ICategoryProps {
  a_arrCategories             : ICategoryState[] | [],
  callbackOnSearchChange      : (strSearch: string) => void,
  callbackOnCategorySelected  : (iCategoryId: number) => void,
  a_bIsBookmark               ?: boolean
}

export interface IBooksProps {
  a_arrBooks                  : IBookState[] | []
}

export interface IBookCardProps {
  a_objBookDetail             : IBookState
}

export interface IBodyPaginationProps {
  a_isCategorySelected        : number,
  a_iPage                     : number,
  a_IRowsPerPage              : number,
  callbackOnRowsPerPageChange : (iRows: number) => void,
  callbackOnPageChange        : (iPage: number) => void
}



// SLICE

interface _IBookmark {
  id                          : number,
  category_id                 : number,
  authors                     : Array<string>,
  title                       : string,
  cover_url                   : string,
  audio_length                : number,
  description                 : string,
  sections                    : Array<_IBookSections>,
  qty                         : number
}

export interface IBookList {
  bookList                    : Array<_IBookmark>
}