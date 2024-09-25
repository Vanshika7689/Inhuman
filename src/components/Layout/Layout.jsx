import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo-removebg-preview.png"

const Layout = ({ children }) => {

    return (
        <div className="main-container" id="main-container">
            <div className="navbar-container">
                <Navbar />
                <Container className="mt-5">
                    <Row className="mt-5">
                        <Col lg={7} className="mt-5 d-flex flex-column justify-content-center">
                            {/* <div>
                                <span className="banner-title">
                                    <img src={"https://demo.themeim.com/html/braine/assets/images/main-slider/hand.png"} className="me-2" />
                                    AI makes content fast & easy
                                </span>
                            </div> */}
                            <h1 className="banner-header-text">
                                Crafting digital brilliance <span> AI-Driven</span> copywriting
                            </h1>
                            <Row>
                                <Col lg={9}>
                                    <p className="banner-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
                                </Col>
                            </Row>
                            <div>
                                <Button className="px-5 py-3 fw-bold" style={{ color: "white" }}>Get in Touch</Button>
                            </div>
                        </Col>
                        <Col md={5} className="mt-5">
                            <div style={{ height: "536px", width: "auto", background: "#231f75", opacity: "0.5", borderRadius: "10px" }} className="banner-left-content">
                                <img src="https://demo.themeim.com/html/braine/assets/images/main-slider/graph.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="py-5">
                {children}
            </Container>
            <div className="footer-wrapper py-5" style={{ background: "rgb(23 29 45)"}}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={4}><img src={logo} alt="InHuman Technolabs" width={250} className="img-fluid"/></Col>
                        <Col lg={4} className="text-white fw-bold h6">2024 Inhuman Technolabs. All rights reserved.</Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
};


export default Layout;