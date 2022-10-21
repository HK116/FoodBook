import React from "react";

import { FaFacebook, FaCloud } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Button,
  NavDiv,
  SectionBg,
  SignupCard,
  FormContainer,
  Form,
  TermCondition,
  Title,
  Input,
  ButtonLink,
  LSIcons,
  Icons,
  Logo,
  LSButton,
} from "../styledComponents";

function Signup() {
  return (
    <SectionBg>
      <NavDiv>
        <Logo>FoodBook</Logo>
        <ButtonLink to="/login">Login</ButtonLink>
      </NavDiv>

      <SignupCard>
        <FormContainer>
          <Title>Create An Account</Title>
            <Icons>
            <LSButton><FcGoogle className="icons" /> <span>Sign up with Google</span></LSButton>
              <LSButton><FaFacebook className="icons fb" /> <span>Sign up with Facebook</span></LSButton>
            </Icons>

          <div className="hr_c">
            <div className="hr"></div>
            <span>or</span>
            <div className="hr"></div>
          </div>

          <Form>
            <Input
              placeholder="Fullname"
              name="fullName"
              type="text"
              //   onChange={handleInput}
            />
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
            <Input
              placeholder="Confirm Password"
              type="password"
              //   onChange={(e) => setConfirmPW(e.target.value)}
            />
            <TermCondition>
              *By creating an account. I consent to the process of my personal
              data and agree to company's <a href="">Terms and conditions</a>.
            </TermCondition>
            <Button>Create</Button>
          </Form>
        </FormContainer>
      </SignupCard>
    </SectionBg>
  );
}

export default Signup;
