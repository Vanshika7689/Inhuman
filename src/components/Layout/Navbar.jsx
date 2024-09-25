import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo-removebg-preview.png"


const NavbarComponent = () => {

    const [isTransparent, setIsTransparent] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            handleScroll()
        })
        handleScroll()
    }, [])

    const handleScroll = () => {
        if (document.getElementById('main-container')) {
            setIsTransparent(window.scrollY > 5)
        }
    }
    return (
        <Navbar expand="xl" className="position-fixed w-100" style={{ background: !isTransparent ? "linear-gradient(90deg, rgba(10,12,34,1) 20%, rgba(15,17,41,1) 35%, rgba(7,13,35,1) 70%)" : "black" }}>
            <Container className="py-3">
                <Navbar.Brand href="#home" style={{ color: "white" }}>
                    <img src={logo} alt="Inhuman Technolabs" className="img-fluid" width={240} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav-wrapper justify-content-center">
                    <Nav className="w-75 justify-content-between px-4 py-2 navbar-options rounded ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#home">Pages</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <Nav.Link href="#home">Blog</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Button className="py-3 fw-bold ms-auto">Get in Touch</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarComponent;