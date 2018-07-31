import { fromJS } from "immutable";
import * as constant from "./constant";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: true
});

const changeHomeData = (state, action) => {
  return state.merge({
    topList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
};

export default (state = defaultState, action) => {
  // immutable对象的set方法，会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象，没有改变之前的数据
  switch (action.type) {
    case constant.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constant.ADD_HOME_LIST:
      return state.merge({
        articleLis: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
      });
    case constant.TOOGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
