import React from "react";
import styled from "styled-components";

import Navbar from "../components/home/Navbar";


const Container = styled.div``;
const Wraper = styled.div``;
const Loginn = styled.div`
  width: 500px;
  height: 400px;
  margin-left: 400px;
  padding-left: 100px;
  padding-top: 30px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  background-color: #fcfcfc;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
`;

const Logintitles = styled.h1`
  margin-bottom: 20px;
  margin-left: 150px;
  color: #a93b74;

`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Spanemail = styled.span`
  font-size: 16px;
  color: #a93b74;
  margin-bottom: 5px;
`;
const EmailInput = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #a93b74;
  padding-left: 20px;
  font-size: 18px;
  border-radius: 3px;
`;

const SpanPASSWORD = styled.span`
  font-size: 16px;
  margin-top: 10px;
  color: #a93b74;
  margin-bottom: 5px;
`;
const PasswordInput = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #a93b74;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 3px;
`;

const Loginbtns = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Loginbtn = styled.button`
  padding: 10px 47px;
  font-size: 19px;
  border: none;
  margin-right: 20px;
  background-color: #f35588;
  color: #fff;
`;
const LoginGooglebtn = styled.button`
  padding: 10px 47px;
  font-size: 19px;
  border: none;
  background-color: #f35588;
  color: #fff;
`;

const Signup = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #a93b74;
  font-size: 22px;
  font-weight: bold;
`;
const Forgetpassword = styled.p`
  color: #a93b74;
`;

const Login = () => {
  return (
    <Container>
      <Wraper>
        <Navbar />
        <Loginn>
          <Logintitles>Log in</Logintitles>
          <LoginForm>
            <Spanemail>Email</Spanemail>
            <EmailInput type="email" />
            <SpanPASSWORD>Password</SpanPASSWORD>
            <PasswordInput type="password" />
            <Loginbtns>
              <Loginbtn type="submit">Sign in </Loginbtn>
              <LoginGooglebtn>sign in with Google</LoginGooglebtn>
            </Loginbtns>
          </LoginForm>
          <Signup>Sign up</Signup>
          <Forgetpassword>Forget password</Forgetpassword>
        </Loginn>
      </Wraper>
    </Container>
  );
};

export default Login;
