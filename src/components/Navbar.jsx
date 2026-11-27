import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'

function Navbar() {
    return (
        <BootstrapNavbar expand="lg" className="profile-navbar">
            <Container className="justify-content-between align-items-center">
                <BootstrapNavbar.Brand as="h1" className="profile-navbar-brand mb-0">
                    Macarena Rau Catalán · Desarrollo de Software &amp; Ciberseguridad
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="profile-navbar" />
                <BootstrapNavbar.Collapse id="profile-navbar" className="justify-content-end text-end">
                    <Nav className="ms-auto text-end">
                        <Nav.Link href="#sobre-mi">Sobre mí</Nav.Link>
                        <Nav.Link href="#habilidades">Skills</Nav.Link>
                        <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar