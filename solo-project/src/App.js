import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import BookMarkList from "./pages/BookMarkList";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 70px;
  min-height: calc(100vh - 60px);
  padding-top: 150px;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Wrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/bookmarkList" element={<BookMarkList />} />
        </Routes>
      </Wrap>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
