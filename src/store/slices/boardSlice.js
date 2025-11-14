import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        strokes: [],
        notes: [],
        users: []
    },
    reducers: {
        addStroke(state, action) {
            state.strokes.push(action.payload)
        },
        addStrokes(state, action) {
            state.strokes = state.strokes.concat(action.payload);
        },
        clearStrokes(state) {
            state.strokes = [];
        },
        setUsers(state, action) {
            state.users = action.payload;
        }
    }
});

export const { addStroke, addStrokes, setUsers, clearStrokes } = boardSlice.actions;