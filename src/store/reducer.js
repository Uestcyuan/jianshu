import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
//as ES6语法
//redux-immutable

const reducer = combineReducers({
  header: headerReducer
});
export default reducer;
