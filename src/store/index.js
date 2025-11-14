import { configureStore, createSlice } from "@reduxjs/toolkit";
import { boardSlice } from "./slices/boardSlice";

const store = configureStore({ reducer: { borad: boardSlice }});
export default store;