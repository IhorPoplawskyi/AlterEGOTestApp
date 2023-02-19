import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loggedLS = localStorage.getItem("logged");

interface InitState {
  login: string,
  password: string,
  logged: boolean
}

const InitState: InitState = {
  login: 'admin',
  password: '12345',
  logged: loggedLS === null ? false : JSON.parse(loggedLS),
}

const profilePageSlice = createSlice({
  name: 'profilePageSlice',
  initialState: InitState,
  reducers: {
    loggingin(state) {
      state.logged = true
    },
    logingout(state) {
      state.logged = false
    }
  }
})

export const {
  loggingin,
  logingout,
} = profilePageSlice.actions

export default profilePageSlice.reducer;