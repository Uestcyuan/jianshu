import * as actionTypes from "./actionType";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象，没有改变之前的数据
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    // 这里因为有return，所以不需要break跳出，以防执行后面代码
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
    //如果改变多个state值，连写set不优雅,换用新方法merge一次改变，性能也能提高
    //return state.set("list", action.data).set("totalPage", action.totalPage);
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    });
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
      case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
      case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
