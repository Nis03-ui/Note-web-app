"use client";

export const initialState = {
  notes: [],
};

export default function NoteReducer(state, action) {
  switch (action.type) {
    // ADD NOTE
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    // DELETE NOTE
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter(
          (note) => note.id !== action.payload
        ),
      };

    // TOGGLE FAVORITE
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload) {
            return {
              ...note,
              favorite: !note.favorite,
            };
          }

          return note;
        }),
      };

    // TOGGLE COMPLETE
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload) {
            return {
              ...note,
              completed: !note.completed,
            };
          }

          return note;
        }),
      };

    // EDIT NOTE
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return {
              ...note,
              title: action.payload.title,
              description: action.payload.description,
            };
          }

          return note;
        }),
      };

    default:
      return state;
  }
}