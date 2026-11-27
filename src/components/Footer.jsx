import { Container, Row, Col, Image } from 'react-bootstrap'

function Footer() {
    return (
        <footer id="contacto" className="footer text-white">
            <Container className="py-3 text-center">
                <h4 className="mt-2 mb-3">CONTACTO</h4>
                <Row className="justify-content-center mt-3gx-5">
                    <Col xs="auto">
                        <a href="mailto:ma.rau@duocuc.cl" aria-label="Enviar correo">
                            <Image src="/png/email.webp" rounded width={50} height={50} alt="Email" />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://github.com/macarau" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Image src="/png/github.png" rounded width={50} height={50} alt="GitHub" />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://www.credly.com/users/macarena-rau-catalan.bdeaaedf/" target="_blank" rel="noreferrer" aria-label="Credly">
                            <Image src="/png/credly.png" rounded width={50} height={50} alt="Credly" />
                        </a>
                    </Col>
                </Row>
                <h6 className="mt-4">© 2026 Todos los derechos reservados</h6>
            </Container>
        </footer>
    )
}

export default Footer