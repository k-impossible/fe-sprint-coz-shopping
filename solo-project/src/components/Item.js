import React from 'react'

export default function Item(){
    return(
        <div className='item-container'>
            <div className='item-img-container'>
                <img className='item-img' src="/images/sample.png" alt="itemImg" />
                <img className='item-bookmark-img' src="/images/bookmark-off.png" alt="bookmarkOff" />
            </div>
            <div className='item-text-container'>
                <div className='item-title-box'>
                    <p className='item-title1'>상품이름</p>
                    <p className='item-title2'>기획전 설명</p>
                </div>
                <div className='item-desc-box'>
                    <p className='item-desc1'>10%</p>
                    <p className='item-desc2'>12900원</p>
                </div>
            </div>
        </div>
    )
}