const initionalvalue = {
  items: [],
};

const reduce = (state = initionalvalue, action) => {
  switch (action.type) {
    case "ADDDATA":
      return { ...state, items: [...state.items, action.payload] };
    case "DELETEDATA":
      const newarr = state.items.filter((_, index) => index !== action.payload);
      return { ...state, items: newarr };
    case "EDITDATA":
      const editArr = state.items.map((currentValue, index) =>
        index === action.payload.i ? action.payload.item : currentValue
      );
      return { ...state, items: editArr };
    default:
      return state;
  }
};

export default reduce;
