import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <Link to="/productList">상품리스트 페이지</Link>
            <Link to="/bookmarkList">북마크 페이지</Link>
        </div>
    )
}

export default Nav;