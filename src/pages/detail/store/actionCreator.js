import axios from "axios";
import * as constants from "./constant";

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});

export const getDetail = id => {
  return dispatch => {
    axios.get("/api/detail.json?id=" + id).then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content));
    }).catch(() => {
      alert("请刷新")
    });
  };
};
