import { EMAILS_NEWSLETTER } from "../actions";

const initialState = {
  savedEmailsNewletter: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case EMAILS_NEWSLETTER:
      const newEmail = action.payload;
      return {
        ...state,
        savedEmailsNewletter: [...state.savedEmailsNewletter, newEmail],
      };

    default:
      return { ...state };
  }
}
