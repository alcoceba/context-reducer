import { SET_LOREM } from "./actions";

const reducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case SET_LOREM:
      return { ...state, ...data };
    default:
      throw new Error("Reducer invalid action");
  }
};

export default reducer;
