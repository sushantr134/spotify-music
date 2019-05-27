import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userAuthToken } from "../redux/actions/USER_AUTH_LOGIN/action";
import LoginPanel from "./Login/component";
import AppDashboard from "./Wrapper/musicAppDashboard";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tokenObj = {};
    this.getHashParams = this.getHashParams.bind(this);
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  componentWillMount() {
    this.tokenObj = this.getHashParams();
  }
  componentDidMount() {
    if (typeof this.tokenObj !== undefined || this.tokenObj !== {}) {
      this.props.userFetch(this.tokenObj);
    }
  }
  render() {
    const token = this.props.userState.userToken;
    return (
      <React.Fragment>
        {token === undefined || token.access_token === undefined ? <LoginPanel /> : <AppDashboard access_token={token.access_token} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userState: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userFetch: tokenObj => userAuthToken(tokenObj) }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
