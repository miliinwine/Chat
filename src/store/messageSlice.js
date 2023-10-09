import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      }
      state.messages.push(message)
    }
  }
})
export const { addMessage, toggleComplete} = messageSlice.actions;
export default messageSlice.reducer;