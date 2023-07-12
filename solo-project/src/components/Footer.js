import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9e9e9e;
  font-size: 12px;
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
  height: 60px;
`;
export default function Footer() {
  return (
    <Container>
      <p>개인정보 처리방침 | 이용약관</p>
      <p>All rights reserved @ Codestates</p>
    </Container>
  );
}
