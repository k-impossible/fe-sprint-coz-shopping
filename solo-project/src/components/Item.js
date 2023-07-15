import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 22%;

  .item-img-container {
    position: relative;
    border-radius: 10x;
    cursor: pointer;
  }
  .item-img {
    width: 100%;
    height: 220px;
    border-radius: 10px;
    border: 1px solid #0003;
  }
  .item-bookmark-img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .item-text-container {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
  }
  .item-desc-box {
    text-align: right;
  }
  .item-title1,
  .item-desc1 {
    font-weight: bold;
    padding-bottom: 5px;
  }
  
`;

export default function Item({itemProps,toggleBookMark}) {

  function switchTitle(prop){
    switch(prop.type){
      case "Brand" :
        return prop.brand_name
      case "Category":
        return "#"+prop.title
      default:
        return prop.title
    }
  }

  function switchDesc(prop){
    switch(prop.type){
      case "Product" :
        return (
          <div className="item-desc-box">
            <p className="item-desc1" style={{color:"#452CDD"}}>{prop.discountPercentage}%</p>
            <p className="item-desc2">{prop.price}원</p>
          </div>
        )
        
      case "Brand":
        return (
          <div className="item-desc-box">
            <p className="item-desc1">관심고객수</p>
            <p className="item-desc2">{prop.follower}</p>
          </div>
        )
      default:
        break;
    }
  }


  return (
    <Container>
        <div className="item-img-container">
          <img className="item-img" 
              src={itemProps.image_url ? itemProps.image_url : itemProps.brand_image_url} alt="itemImg" />
          <img
            className="item-bookmark-img"
            src={itemProps.bookmark ? 
                "/images/bookmark-on.png" : "/images/bookmark-off.png"}
            alt="bookmarkOff"
            onClick={()=>toggleBookMark(itemProps.id,itemProps.bookmark)}
          />
        </div>
        <div className="item-text-container">
          <div className="item-title-box">
            <p className="item-title1">{switchTitle(itemProps)}</p>
            <p className="item-title2">{itemProps.sub_title ? itemProps.sub_title : ""}</p>
          </div>
          {switchDesc(itemProps)}
        </div>
    </Container>
  );
}
