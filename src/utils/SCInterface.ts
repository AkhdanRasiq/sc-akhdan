// STATE

export interface ICategoryState {
  id      : number,
  name    : string
}


// PROPS

export interface ICategoryProps {
  a_arrCategories: ICategoryState[] | []
}
