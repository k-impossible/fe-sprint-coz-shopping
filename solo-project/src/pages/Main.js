import {React, useEffect, useState} from "react";
import styled from "styled-components";
import {getData, setLocalStorage, getLocalStorage} from "../api/DataApi";
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
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(()=>{
    const result = getData(4)
    result.then((value)=>{
      // console.log(value);
      setDataList(value)
      setBookmarkList(getLocalStorage())
    })

  },[])

  function setBookmarkAndStorage(list=[], init=false){
    if(list.length !== 0){
      const onlyBookmarkList = list.filter((el)=>{
        return el.bookmark
      })
      // console.log(onlyBookmarkList);
      setBookmarkList(onlyBookmarkList)
      if(!init) setLocalStorage(onlyBookmarkList)
    }
  }


  return (
    <Container>
      <h2>상품 리스트</h2>
        <ItemList renderList={dataList} 
                  dataList={dataList} 
                  setDataList={setDataList} 
                  setBookmarkAndStorage={setBookmarkAndStorage}/>
      <h2>북마크 리스트</h2>
        <ItemList renderList={bookmarkList} 
                  dataList={dataList} 
                  setDataList={setDataList} 
                  setBookmarkAndStorage={setBookmarkAndStorage}/>
    </Container>
  );
}
