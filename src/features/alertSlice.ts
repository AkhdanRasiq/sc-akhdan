import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';
import { IAlert } from '../utils/SCInterface'


const initialState: IAlert = {
  status      : false,
  severity    : 'success' || 'info' || 'warning' || 'error' || undefined,
  msg         : ""
}

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<any>) => {
      state.status    = action.payload.status
      state.severity  = action.payload.severity || 'success'
      state.msg       = action.payload.msg      || ""
    }
  }
})

export const {
  setAlert
} = alertSlice.actions

export const getAlertState = (state: RootState) => state.alert

export default alertSlice.reducer
