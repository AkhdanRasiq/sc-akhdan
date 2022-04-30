interface _IBookSections {
  title                       : string,
  content                     : string
}


// STATE

export interface ICategoryState {
  id                          : number,
  name                        : string
}

export interface IBookState {
  id                          : number,
  category_id                 : number,
  author                      : string[] | [],
  title                       : string,
  cover_url                   : string,
  audio_length                : number,
  description                 : string,
  sections                    : _IBookSections[] |[]
}


// PROPS

export interface ICategoryProps {
  a_arrCategories             : ICategoryState[] | [],
  callbackOnCategorySelected  : (iCategoryId: number) => void
}

export interface IBookCardProps {
  a_strTitle                  : string
}

export interface IBodyPaginationProps {
  a_isCategorySelected        : number,
  a_iPage                     : number,
  a_IRowsPerPage              : number,
  callbackOnRowsPerPageChange : (iRows: number) => void,
  callbackOnPageChange        : (iPage: number) => void
}
