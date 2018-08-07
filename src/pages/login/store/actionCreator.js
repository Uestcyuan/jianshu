import axios from "axios";
import * as constant from './constant';

const changeLogin = () => ({
  type: constant.CHANGE_LOGIN,
  value: true
})

export const logout = () => ({
  type: constant.LOGOUT,
  value: false
})

export const login = (account, password) => {
  return dispatch => {
    axios.get("/api/login.json?account=" + account + "&password=" + password).then((res ) => {
      const result = res.data.data;
      if(result) {
        dispatch(changeLogin())
      }else{
        alert('login failed')
      }
    })
  };
};
