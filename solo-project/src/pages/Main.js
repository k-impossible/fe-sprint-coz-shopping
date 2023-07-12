import React from "react";
import Item from "../components/Item";
import styled from "styled-components";

const Container = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  h2:last-of-type {
    margin-top: 70px;
  }
`;
export default function Main() {
  return (
    <Container>
      <h2>상품 리스트</h2>
      <Item />
      <h2>북마크 리스트</h2>
      <Item />
    </Container>
  );
}
