import { legacy_createStore as createStore } from "redux";
import reduce from "./reducer";

const store = createStore(reduce);

export default store;
