import React from "react";
import { Dropdown, Button, Container, Row, Col } from "react-bootstrap";

const ProductDetail = ({ selectedItem }) => {
  console.log("selectedItem: ", selectedItem);

  return (
    <Container className="product-detail-area">
      <Row>
        <Col xxl={6}>
          <img src={selectedItem?.img} />
        </Col>
      </Row>
      <Row>
        <Col xxl={6}>
          <div>
            <div>{selectedItem?.title}</div>
            <div>₩{selectedItem?.price}</div>
            <div>{selectedItem.choice ? "Conscious choice" : ""}</div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  사이즈 선택
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {selectedItem.size?.map((size) => (
                    <Dropdown.Item>{size}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <Button variant="dark">추가</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
