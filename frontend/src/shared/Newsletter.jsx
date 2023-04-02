import React from "react";
import "./newsletter.css";
import maleTourist from "../assets/images/male-tourist.png";
import { Col, Container, Row } from "reactstrap";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <div className="btn newsletter__btn">Subscribe</div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nobis ea voluptates numquam similique quae inventore modi rem
                nesciunt quas.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
