import React from "react";
import ReactDOM from "react-dom";
import { NavbarContainer } from "./style";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import swirl2 from "../../static/1437380.svg";
import swirl1 from "../../static/42675.svg";

const NavbarComponent: React.FC = () => {
    return (
        <NavbarContainer>
            <Navbar expand="lg">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="container">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">
                                <Link to="/">
                                    <button
                                        type="button"
                                        className="btn btn-default b "
                                    >
                                        Home
                                    </button>
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="/about">
                                <Link to="/about">
                                    <button
                                        type="button"
                                        className="btn btn-default b"
                                    >
                                        About Me
                                    </button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="/portofolio">
                                <Link to="/portofolio">
                                    <button
                                        type="button"
                                        className="btn btn-default b"
                                    >
                                        Experience
                                    </button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="/portofolio">
                                <Link to="/portofolio">
                                    <button
                                        type="button"
                                        className="btn btn-default b"
                                    >
                                        Portofolio
                                    </button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="/contact">
                                <Link to="/contact">
                                    <button
                                        type="button"
                                        className="btn btn-default b"
                                    >
                                        Contact Me
                                    </button>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <div className="asset3">
                <img src={swirl2} style={{ width: "20vw", height: "40vh" }} />
                {/* <img src={swirl1} style={{ width: "20vw", height: "30vh" }} /> */}
            </div>
        </NavbarContainer>
    );
};

export default NavbarComponent;
