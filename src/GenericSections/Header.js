import React from "react";
import { Row, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Language, Strings } from "../Assets/Strings";

export default () => {
  const cur = Strings[Language].Menu;
  const Home = cur["Home"];
  const eCommerce = cur["eCommerce"];
  const Inventory = cur["Inventory"];
  const Contact = cur["Contact"];
  const RFID = cur["RFID"];

  return (
    <div>
      <Navbar className="p-3 bg-dark" fixed="top">
        <Navbar.Brand href="/home">
          <img /> {/** wine hub logo */}
          <p className="ps-5 branding">WineHub</p>
        </Navbar.Brand>

        <Nav className="ms-auto pe-5">
          <Link to="/home" className="text-light m-2">
            {Home}
          </Link>
          <Link to="/ecommerce" className="text-light m-2">
            {eCommerce}
          </Link>
          <Link to="/inventory" className="text-light m-2">
            {Inventory}
          </Link>
          <Link to="/rfid" className="text-light m-2">
            {RFID}
          </Link>
          <Link to="/contact" className="text-light m-2">
            {Contact}
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};
