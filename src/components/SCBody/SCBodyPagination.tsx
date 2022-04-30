import React, { useState } from "react"
import TablePagination from '@mui/material/TablePagination'
import { IBodyPaginationProps } from "../../utils/SCInterface"


function SCBodyPagination({ a_isCategorySelected, a_iPage, a_IRowsPerPage, callbackOnRowsPerPageChange, callbackOnPageChange } : IBodyPaginationProps) {

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    callbackOnPageChange(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    callbackOnRowsPerPageChange(parseInt(event.target.value, 10))
  }


  return (
    <div className="bodyPaginationContainer">
      <TablePagination
        component             = "div"
        count                 = {100}
        page                  = {a_iPage}
        onPageChange          = {handleChangePage}
        rowsPerPage           = {a_IRowsPerPage}
        onRowsPerPageChange   = {handleChangeRowsPerPage}
        SelectProps           = {{disabled: a_isCategorySelected < 0 ? true : false}}
        backIconButtonProps   = {{disabled: a_isCategorySelected < 0 ? true : false}}
        nextIconButtonProps   = {{disabled: a_isCategorySelected < 0 ? true : false}}
      />
    </div>
  )
}

export default SCBodyPagination
