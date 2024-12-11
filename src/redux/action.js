const adddata = (input) => {
  return {
    type: "ADDDATA",
    payload: input,
  };
};

const deleteitem = (i) => {
  return {
    type: "DELETEDATA",
    payload: i,
  };
};

const edititem = ({ i, item }) => {
  return {
    type: "EDITDATA",
    payload: { i, item },
  };
};

export { adddata, deleteitem, edititem };
