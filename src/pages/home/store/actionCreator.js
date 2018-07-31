import axios from "axios";
import * as constant from "./constant";
import {fromJS} from "immutable";

const changeHomeData = result => ({
  type: constant.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
});

const addHomeList = (list, nextPage) => ({
  type: constant.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  };
};

export const getMoreList = (page) => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.articleList;
      dispatch(addHomeList(result, page+1));
    });
    };
  };

  export const toogleTopShow = (show) => ({
    type: constant.TOOGLE_SCROLL_TOP,
    show
  })