import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px;
  box-shadow: 0px 3px 10px #bdbdbd;
  position: fixed;
  height: 80px;
  z-index: 2;
  background: #fff;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 30px;

  img {
    margin-right: 15px;
  }
`;
const MenuBtn = styled.div`
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src="/images/logo.png" alt="logo" />
          <h4>COZ Shopping</h4>
        </Logo>
      </Link>
      <MenuBtn>
        <img src="/images/menuBtn.png" alt="menuBtn" />
        {/* <Nav/> */}
      </MenuBtn>
    </Container>
  );
}
