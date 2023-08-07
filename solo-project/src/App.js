import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import BookMarkPage from "./pages/BookMarkPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import {GlobalStyle} from "./GlobalStyle";
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
          <Route path="/productPage" element={<BookMarkPage />} />
          <Route path="/bookmarkPage" element={<ProductPage />} />
        </Routes>
      </Wrap>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
