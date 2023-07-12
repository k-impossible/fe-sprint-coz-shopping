import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  row-gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  .item-container {
    width: 22%;
  }
  .item-img-container {
    position: relative;
    border-radius: 10x;
    cursor: pointer;
  }
  .item-img {
    width: 100%;
    height: 100%;
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

export default function Item() {
  return (
    <Row>
      <div className="item-container">
        <div className="item-img-container">
          <img className="item-img" src="/images/sample.png" alt="itemImg" />
          <img
            className="item-bookmark-img"
            src="/images/bookmark-off.png"
            alt="bookmarkOff"
          />
        </div>
        <div className="item-text-container">
          <div className="item-title-box">
            <p className="item-title1">상품이름</p>
            <p className="item-title2">기획전 설명</p>
          </div>
          <div className="item-desc-box">
            <p className="item-desc1">10%</p>
            <p className="item-desc2">12900원</p>
          </div>
        </div>
      </div>

      <div className="item-container">
        <div className="item-img-container">
          <img className="item-img" src="/images/sample.png" alt="itemImg" />
          <img
            className="item-bookmark-img"
            src="/images/bookmark-off.png"
            alt="bookmarkOff"
          />
        </div>
        <div className="item-text-container">
          <div className="item-title-box">
            <p className="item-title1">상품이름</p>
            <p className="item-title2">기획전 설명</p>
          </div>
          <div className="item-desc-box">
            <p className="item-desc1">10%</p>
            <p className="item-desc2">12900원</p>
          </div>
        </div>
      </div>
      <div className="item-container">
        <div className="item-img-container">
          <img className="item-img" src="/images/sample.png" alt="itemImg" />
          <img
            className="item-bookmark-img"
            src="/images/bookmark-off.png"
            alt="bookmarkOff"
          />
        </div>
        <div className="item-text-container">
          <div className="item-title-box">
            <p className="item-title1">상품이름</p>
            <p className="item-title2">기획전 설명</p>
          </div>
          <div className="item-desc-box">
            <p className="item-desc1">10%</p>
            <p className="item-desc2">12900원</p>
          </div>
        </div>
      </div>
      <div className="item-container">
        <div className="item-img-container">
          <img className="item-img" src="/images/sample.png" alt="itemImg" />
          <img
            className="item-bookmark-img"
            src="/images/bookmark-off.png"
            alt="bookmarkOff"
          />
        </div>
        <div className="item-text-container">
          <div className="item-title-box">
            <p className="item-title1">상품이름</p>
            <p className="item-title2">기획전 설명</p>
          </div>
          <div className="item-desc-box">
            <p className="item-desc1">10%</p>
            <p className="item-desc2">12900원</p>
          </div>
        </div>
      </div>
    </Row>
  );
}
