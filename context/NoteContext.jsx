"use client";

import { createContext, useReducer } from "react";
import NoteReducer, { initialState } from "./NoteReducer";

export const NoteContext = createContext();

export default function NoteProvider({ children }) {
  const [state, dispatch] = useReducer(
    NoteReducer,
    initialState
  );

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}