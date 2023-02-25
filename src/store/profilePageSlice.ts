import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loggedLS = localStorage.getItem("logged");

interface InitState {
  username: string;
  password: string;
  logged: boolean;
  showSignIn: boolean;
}

const InitState: InitState = {
  username: "admin",
  password: "12345",
  logged: loggedLS === null ? false : JSON.parse(loggedLS),
  showSignIn: false,
};

const profilePageSlice = createSlice({
  name: "profilePageSlice",
  initialState: InitState,
  reducers: {
    signIn(state) {
      state.logged = true;
    },
    signOut(state) {
      state.logged = false;
    },
    setShowSignIn(state, action: PayloadAction<boolean>) {
      state.showSignIn = action.payload;
    },
  },
});

export const { signIn, signOut, setShowSignIn } = profilePageSlice.actions;

export default profilePageSlice.reducer;
