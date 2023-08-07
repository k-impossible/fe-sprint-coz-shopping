import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Link to="/productPage">상품리스트 페이지</Link>
      <Link to="/bookmarkPage">북마크 페이지</Link>
    </div>
  );
}

export default Nav;
