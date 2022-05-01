import React from 'react'
import CONFIG from "../../static/config.json"

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { getAlertState } from '../../features/alertSlice'
import { setAlert } from '../../features/alertSlice'
import { Snackbar } from '@mui/material'
import Alert from '@mui/material/Alert'


function SCAlertCustom() {
  const alertState  = useAppSelector(getAlertState)
  const dispatch    = useAppDispatch()

  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={CONFIG.alert_show_ms}
      open={alertState.status} onClose={() => dispatch(setAlert({ status: false }))}>
      <Alert severity={alertState.severity}>
        {alertState.msg}
      </Alert>
    </Snackbar>
  )
}

export default SCAlertCustom
