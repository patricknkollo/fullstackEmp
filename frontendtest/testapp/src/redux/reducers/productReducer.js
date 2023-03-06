const initialState = {
  products: [
    {
      id: 1,
      title: "soleil de mars",
      category: "programmer,",
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return state;

    case "SELECTED_PRODUCTS":
      break;

    case "REMOVE_SELECTED_PRODUCT":
      break;

    default:
      return state;
  }
};
