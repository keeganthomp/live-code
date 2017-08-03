import { createStore, applyMiddleware } from "redux";



const store = applyMiddleware()(createStore);

export default store;