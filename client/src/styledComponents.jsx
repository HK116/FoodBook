import styled from "styled-components";
import { Link } from "react-router-dom";

import banner from "./asset/images/login_bk.jpg";

export const Sections = styled.section`
  margin-bottom: 8rem;
`;

export const Logo = styled.h1`
color: white;
font-size: 1.8rem;
font-family: 'Fredoka One', cursive;
`

export const Button = styled.button`
  background: var(--color-gold);
  font-weight: bold;
  color: var(--color-baige);
  margin-top: 1rem;
  width: max-content;
  display: inline-block;
  padding: 0.75rem 2.9rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-gold);
  transition: var(--transition);

  &:hover {
    background-color: var(--color-baige-variant);
    color: var(--color-gold);
  }

  &:disabled {
    background-color: var(--color-baige-variant);
    cursor: disabled;
  }
`;
//***************Login and Signup***************/

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 0 2rem;
`;

export const ButtonLink = styled(Link)`
  background: var(--color-gold);
  font-size: 0.75rem;
  font-weight: bold;
  color: var(--color-baige);
  margin-top: 1rem;
  width: max-content;
  display: inline-block;
  padding: 0.6rem 2.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-gold);
  transition: var(--transition);

  &:hover {
    background-color: var(--color-baige-variant);
    color: var(--color-gold);
  }

  &:disabled {
    background-color: var(--color-baige-variant);
    cursor: disabled;
  }
`;


export const LSButton = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
background: transparent;
color: black;
border: 1px solid rgb(195, 195, 195);
width: 100%;
font-size: 0.9rem;

&:hover {
    border-color: gray;
    background: transparent;
    color: gray;
}
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem 0 1rem;
`;

export const SectionBg = styled.section`
  width: 100vw;
  height: 100%;
  background: url(${banner}) center;
  background-size: cover;
  margin-bottom: 0;
`;

export const SignupCard = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 30%;
  padding: 1.25rem;
  background-color: #eeeeee;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  /* ================= Media Queries (Small Devices) ===================*/

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
  border: 0.2px solid var(--color-gold);
  font-size: 0.9rem;
`;

export const TermCondition = styled.span`
  font-size: 0.8rem;
  margin: 1rem 0 0.5rem 0;
`;

//***************End of Login and Signup***************/
