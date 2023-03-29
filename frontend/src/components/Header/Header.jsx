import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ============= logo ================== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* ============= menu start ================== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============= menu end ================== */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
