import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>

        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.searchFocus}
              onBlur={props.searchBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe64d;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="writting">
          <i className="iconfont">&#xe61b;</i>写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    //通过redux-immutable让state（就是store）也成为一个immutable对象
    //用get方法获取header而不是.header
    focused: state.getIn(['header','focused']),
    //这两句等价
    //focused: state.get("header").get("focused")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFocus() {
      dispatch(actionCreator.searchFocus());
    },
    searchBlur() {
      dispatch(actionCreator.searchBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
