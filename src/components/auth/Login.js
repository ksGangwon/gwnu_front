import React, { Component } from "react";
import './Login.css'
import { Form, Button } from "react-bootstrap";
import loginRequest from "../../lib/LoginRequest";
import $ from "jquery";
import {} from "jquery.cookie";

class LoginForm extends Component {

  login = () => {
    const loginId = this.loginId.value;
    const loginPw = this.loginPw.value;

    if (loginId === "" || loginId === undefined) {
      alert("아이디를 입력해주세요.");
      this.loginEmail.focus();
      return;
    } else if (loginPw === "" || loginPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.loginPw.focus();
      return;
    }

    const resultLogin = loginRequest.getLogin(loginId, loginPw)

    resultLogin.then(result=>{
        if(result.user){
          $.cookie("loginData", result.user, { expires: 1 });
          window.location.href = "/";
        } else{
          alert(result.message)
        }
      }
    )

  };
  
  render() {
    return (
      <div className="contentContainer">
        <div className="content">
          <div className="contentLogin">
            <Form className="contentLogin">
              <h1> 관리자 로그인 </h1>
              <Form.Group controlId="loginForm">
                <Form.Control
                  className="loginInput"
                  type="id"
                  maxLength="20"
                  ref={ref => (this.loginId = ref)}
                  placeholder="아이디"
                />
                <Form.Control
                  className="loginInput"
                  type="password"
                  maxLength="20"
                  ref={ref => (this.loginPw = ref)}
                  placeholder="비밀번호"
                />
                <Button
                  className="loginBtn"
                  onClick={this.login}
                  variant="info"
                  type="button"
                  block
                >
                  로그인
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>  
      </div>
    );
  }
}

export default LoginForm;