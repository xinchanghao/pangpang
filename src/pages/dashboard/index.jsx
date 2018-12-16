import React from 'react';
import { connect } from 'react-redux';
import './index.less';
import $ from 'jquery';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageStatus: "true"
    }
  }

  componentDidMount() {
    this.loginOrSignup();
  }

  loginOrSignup = () => {
    $("#login").css("display", "none");
    $("#signup").click(function () {
      $(".message").css("transform", "translateX(100%)");
      if ($(".message").hasClass("login")) {
        $(".message").removeClass("login");
      }
      $("#signup").css("display", "none");
      $("#login").css("display", "block");
    });
    $("#login").click(function () {
      $(".message").css("transform", "translateX(0)");
      if ($(".message").hasClass("login")) {
        $(".message").removeClass("signup");
      }
      $(".message").addClass("login");
      $("#login").css("display", "none");
      $("#signup").css("display", "block");

    });
    $(".container").addClass("shake");
  }

  render() {
    return (
      <div className="container">
        <div className="message signup">
          <div className="form--heading">Hello, PangPang</div>
          <div className="btn-wrapper">
            <button className="button" id="signup">SignUp</button>
            <button className="button" id="login"> Login</button>
          </div>
        </div>
        <div className="form form--signup">
          <div className="form--heading">Welcome! Sign Up</div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form form--login">
          <div className="form--heading">Welcome back! </div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    // addResult: state.getIn(['HomeReducer'])
  }
}, dispatch => {
  return {
    
  }
})(Dashboard)
