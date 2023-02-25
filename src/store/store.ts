import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import mainPageSlice from "./mainPageSlice";
import newsPageSlice from "./newsPageSlice";
import profilePageSlice from "./profilePageSlice";

function saveToLocalStorage(state: boolean) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("logged", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const rootReducer = combineReducers({
  mainPageSlice,
  profilePageSlice,
  newsPageSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

store.subscribe(() =>
  saveToLocalStorage(store.getState().profilePageSlice.logged)
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
