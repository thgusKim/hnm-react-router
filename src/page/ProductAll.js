import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductAll = ({ authenticate, setSelectedItem }) => {
  const navigate = useNavigate();
  const goToPage = (item) => {
    setSelectedItem(item);
    return authenticate ? navigate(`/products/${item.id}`) : navigate("/login");
  };

  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} goToPage={goToPage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
