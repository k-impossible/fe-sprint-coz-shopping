import {React, useEffect, useState} from "react";
import styled from "styled-components";
import {getData} from "../api/DataApi";
import ItemList from "../components/ItemList"
const Container = styled.div`
  h2 {
    margin-bottom: 20px;
  }

  h2:last-of-type {
    margin-top: 70px;
  }
`;



export default function Main() {
  const [dataList, setDataList] = useState([]);

  useEffect(()=>{
    const result = getData(4)
    result.then((value)=>{
      setDataList(value)
    })
  },[])


  return (
    <Container>
      <h2>상품 리스트</h2>
        <ItemList list={dataList}/>
      <h2>북마크 리스트</h2>
        <ItemList list={dataList}/>
    </Container>
  );
}
