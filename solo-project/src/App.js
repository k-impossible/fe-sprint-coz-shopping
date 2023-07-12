import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Main from "./pages/Main";
import BookMarkList from "./pages/BookMarkList";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/bookmarkList" element={<BookMarkList/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
