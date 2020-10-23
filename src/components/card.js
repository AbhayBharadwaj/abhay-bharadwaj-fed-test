import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";

class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined
    };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextprops==>", JSON.stringify(nextProps));
    let nextprops = nextProps.userInfo && nextProps.userInfo.results.length > 0 && 
    nextProps.userInfo.results[0].name.first;
    let prevstate = prevState.userInfo && prevState.userInfo.results.length > 0 && 
    prevState.userInfo.results[0].name.first;
    if (nextprops !== prevstate) {
      return {
        title: nextProps.userInfo.results[0].name.title,
        firstName: nextProps.userInfo.results[0].name.first,
        lastName: nextProps.userInfo.results[0].name.last,
        email: nextProps.userInfo.results[0].email
      };
    }

    return null;
  }
  render() {
    return (
      <div className="cardAlign">
      <Card title="User Info:" bordered={false} style={{ width: 300 }}>
        <h2>{this.state.title} {this.state.firstName} {this.state.lastName}</h2>
        <p>{this.state.email}</p>
      </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { userInfo: state.userInfo };
};
const wrapCard = connect(mapStateToProps)(card);
export default wrapCard;
