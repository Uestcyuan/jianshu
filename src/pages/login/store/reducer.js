import { fromJS } from "immutable";
import * as constant from "./constant";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_LOGIN:
      return state.set("login", action.value);
    case constant.LOGOUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
