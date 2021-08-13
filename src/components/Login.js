import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import loginRequest from "../lib/LoginRequest";

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

    resultLogin.then(function(result){
        if(result.message){
          console.log('hi')
        }
      }
    )

  };
  render() {
    const formStyle = {
      margin: 50
    };
    const buttonStyle = {
      marginTop: 10
    };

    return (
      <Form style={formStyle}>
        <Form.Group controlId="loginForm">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            type="email"
            maxLength="100"
            ref={ref => (this.loginId = ref)}
            placeholder="아이디를 입력하세요"
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            maxLength="20"
            ref={ref => (this.loginPw = ref)}
            placeholder="비밀번호를 입력하세요"
          />
          <Button
            style={buttonStyle}
            onClick={this.login}
            variant="info"
            type="button"
            block
          >
            로그인
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginForm;