// STATE

export interface ICategoryState {
  id      : number,
  name    : string
}


// PROPS

export interface ICategoryProps {
  a_arrCategories: ICategoryState[] | []
}

export interface IBookCardProps {
  a_strTitle: string
}
