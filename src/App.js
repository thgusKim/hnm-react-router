import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지(페이지 3개)
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//3. 상품 디테일을 눌렀을 때, 로그인이 안되어있을 경우에는 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어있을 때는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//5. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
//6. 로그인을 하면 로그아웃 버튼이 보이고 로그아웃을 하면 로그인 버튼이 보인다.
//7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProductAll
              authenticate={authenticate}
              setSelectedItem={setSelectedItem}
            />
          }
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/products/:id" element={<ProductDetail selectedItem={selectedItem}/>} />
      </Routes>
    </div>
  );
}

export default App;
