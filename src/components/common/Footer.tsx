import Profile from "../../assets/Profile.svg?react";
import Category from "../../assets/Category.svg?react";
import Home from "../../assets/Home.svg?react";
import Send from "../../assets/Send.svg?react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <Category fill="rgba(36, 116, 44, 0.3)" stroke="#24742C" />
      <Home fill="rgba(36, 116, 44, 0.3)" stroke="#24742C" />
      <Profile fill="rgba(36, 116, 44, 0.3)" stroke="#24742C" />
      <Send fill="rgba(36, 116, 44, 0.3)" stroke="#24742C" />
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  display: flex;
  background-color: white;
  position: sticky;
  bottom: 0;
  z-index: 10;
  padding: 20px 37px;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px 32px 0px 0px;
  flex-grow: 0;
`;
