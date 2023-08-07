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
      setDataList(value)
      setBookmarkList(getLocalStorage())
    })

  },[])

  function setBookmarkAndStorage(list=[]){
    if(list.length !== 0){
      const onlyBookmarkList = list.filter(el => el.bookmark)
      setBookmarkList(onlyBookmarkList)
      setLocalStorage(onlyBookmarkList)
    }
  }

  function toggleBookMark(item){
      const changeDataList = dataList.map((el)=>{
        if(el.id === item.id){
          return {...el, bookmark: !item.bookmark}
        }
        return el
      })

      setDataList(changeDataList);

      const sameBookmarkItem = bookmarkList.find(el => el.id === item.id)

      if(sameBookmarkItem === undefined || bookmarkList.length === 0){  
        const newItem = {
          ...item,
          bookmark: true
        }
        setBookmarkAndStorage([...bookmarkList, newItem]);
      }else{
        const changeBookmarkList = bookmarkList.map((el)=>{
          if(el.id === item.id){
            return {...el, bookmark: false}
          }
          return el
        })
        setBookmarkAndStorage(changeBookmarkList);
      }
  }

  return (
    <Container>
      <h2>상품 리스트</h2>
        <ItemList renderList={dataList} toggleBookMark={toggleBookMark}/>
      <h2>북마크 리스트</h2>
        <ItemList renderList={bookmarkList.slice(0,4)} toggleBookMark={toggleBookMark}/>
    </Container>
  );
}
