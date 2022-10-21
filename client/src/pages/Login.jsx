import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaCloud } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Button,
  NavDiv,
  SectionBg,
  SignupCard,
  FormContainer,
  Form,
  Title,
  Input,
  ButtonLink,
  TermCondition,
  LSIcons,
  Icons,
  Logo,
  LSButton
} from "../styledComponents";

function Login() {
  return (
    <SectionBg>
      <NavDiv>
        <Logo>FoodBook</Logo>
        <ButtonLink to="/signup">Sign up</ButtonLink>
      </NavDiv>

      <SignupCard>
        <LoginContainer>
          <Title>Continue with</Title>
            <Icons>
              <LSButton><FcGoogle className="icons" /> <span>Continue with Google</span></LSButton>
              <LSButton><FaFacebook className="icons fb" /> <span>Continue with Facebook</span></LSButton>
              {/* <button><FaCloud className="icons ic" /></button> */}
            </Icons>

          <div className="hr_c">
            <div className="hr"></div>
            <span>or</span>
            <div className="hr"></div>
          </div>

          <LoginForm>
            <Input
              placeholder="Email"
              name="email"
              type="email"
              //   onChange={handleInput}
            />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              //   onChange={handleInput}
            />
            <Span1>
                <div>
                  <input type="checkbox" />
                  <label> Remeber me</label>
                </div>
                <ALink to="/">Forgot password?</ALink>
              </Span1>
            <TermCondition>
              Don't have an account?{" "}
              <ALink to="/register">Create an account</ALink>
            </TermCondition>
            <Button>Login</Button>
          </LoginForm>
        </LoginContainer>
      </SignupCard>
    </SectionBg>
  );
}

const LoginContainer = styled(FormContainer)`
  width: 25%;
  padding: 1.25rem;
  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  /* ================= Media Queries (Small Devices) ===================*/

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

const LoginForm = styled(Form)`
  flex-direction: column;
`;


const ALink = styled(Link)`
  color: grey;
  margin: 0.25rem 0;
  text-decoration: underline;
`;

const Span1 = styled.div`
font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Login;
