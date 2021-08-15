import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import loginRequest from "../../lib/LoginRequest";
import $ from "jquery";
import {} from "jquery.cookie";

class LoginForm extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    if($.cookie("loginData")){
      alert("저장된 아이디가 있습니다")
      this.props.history.push('/')
    }
  }

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
          this.props.history.push('/')
        } else{
          alert(result.message)
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
        <h2 className="LoginHeader"> 관리자 로그인 </h2>
        <Form.Group controlId="loginForm">
          <Form.Control
            type="id"
            maxLength="100"
            ref={ref => (this.loginId = ref)}
            placeholder="아이디"
          />
          <Form.Control
            type="password"
            maxLength="20"
            ref={ref => (this.loginPw = ref)}
            placeholder="비밀번호"
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