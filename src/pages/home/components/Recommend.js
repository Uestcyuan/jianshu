import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => (
            <RecommendItem imgUrl={item.get('imgUrl')} key ={item.get('id')} />
          ))
        }
       
        <RecommendItem imgUrl="http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" />
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState,null)(Recommend);
