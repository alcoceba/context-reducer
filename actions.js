export const SET_LOREM = "SET_LOREM";

export const SetLorem = ({ value }) => {
  return {
    type: "SET_LOREM",
    data: {
      lorem: value,
    },
  };
};
