import { Container, Row, Col, Badge, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Proyectos from './components/Proyectos'

const skillIcons = Object.entries(
    import.meta.glob('./assets/svg/*.svg', {
        eager: true,
        import: 'default',
        query: '?url',
    })
).sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))

const certifications = [
    { src: '/png/capc.png', alt: 'CAPC Badge', title: 'Cybersecurity Awareness (CAPC)', },
    { src: '/png/csfpc.png', alt: 'CSFPC Badge', title: 'CyberSecurity Foundation (CSFPC)', },
    { src: '/png/cehpc.png', alt: 'CEHPC Badge', title: 'Ethical Hacking (CEHPC)', },
    { src: '/png/lcspc.png', alt: 'LCSPC Badge', title: 'Lead Cybersecurity (LCSPC)', },
    { src: '/png/lll.png', alt: 'LLL Badge', title: 'Lifelong Learning (LLL)', className: 'lll', },
]

const skillCategories = [
    { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'Vite'], },
    { title: 'Backend', badgeLayout: 'two-rows', skills: ['Java', 'Node.js', 'Spring Boot', 'Spring Security', 'Spring Cloud', 'APIs REST', 'Open Api', 'Swagger', 'PostgreSQL', 'MySQL', 'MongoDB'], },
    { title: 'Móvil', skills: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room'], },
    { title: 'Despliegue', skills: ['Docker', 'Git y Github', 'Maven', 'Gradle'], },
    { title: 'Testing', skills: ['JUnit 5', 'Mockito', 'MockMVC', 'JaCoCo', 'Vitest', 'MockK'], },
    { title: 'Ciberseguridad', skills: ['Kali Linux', 'Nmap', 'Nikto', 'OpenVAS', 'Wireshark'], },
]

function App() {
    return (
        <>
        <Container className="mt-5 py-1 mb-5">
            <Row className="g-4">
                <Col xs={12} md={9} lg={9} as="main" className="main-column">
                    <Card id="sobre-mi" className="px-5 py-4 mb-5">
                        <h4 className="mb-3">SOBRE MÍ</h4>
                        <p>Estudiante de Ingeniería en Informática, con especialización en Desarrollo de Software y una formación complementaria en Ciberseguridad a través de certificaciones Certiprof y una microespecialización en Duoc UC.</p>
                        <p>Mi objetivo es especializarme en DevSecOps, integrando prácticas de seguridad en cada etapa del ciclo de vida del software: desde el código y las pruebas hasta el despliegue en entornos cloud y contenedores.</p>
                        <p>Me interesa comprender tanto la perspectiva ofensiva como la defensiva de la seguridad, para construir sistemas robustos, auditables y resilientes.</p>
                    </Card>        

                    <Card id="habilidades" className="px-5 py-4 mb-5">
                        <h4 className="mb-3">HABILIDADES</h4>
                        <Row className="align-items-start">
                            <Col xs={12} md={7} lg={7}>
                            {skillCategories.map(({ title, skills, badgeLayout }) => (
                                <div key={title}>
                                    <h5>{title}</h5>
                                    {badgeLayout === 'two-rows' ? (
                                        [skills.slice(0, 5), skills.slice(5)].map((row, index) => (
                                            <div key={index} className="d-flex flex-wrap gap-2 mb-2">
                                                {row.map((skill) => (
                                                    <Badge key={skill} className="badge-skill" bg="success">{skill}</Badge>
                                                ))}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="d-flex flex-wrap gap-2 mb-3">
                                            {skills.map((skill) => (
                                                <Badge key={skill} className="badge-skill" bg="success">{skill}</Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}               
                            </Col>
                            <Col xs={12} md={5} lg={5}>
                            <div className="mt-2 mb-4 d-flex flex-wrap gap-4 justify-content-center">
                                {skillIcons.map(([path, src]) => {
                                    const name = path.split('/').pop().replace('.svg', '')
                                    return <img key={path} src={src} alt={name} title={name} className="skill-icon" />
                                })}
                            </div>                        
                            </Col>                            
                        </Row>
                    </Card>

                    <Card id="proyectos" className="projects-card px-5 py-4 mb-0">
                        <h4 className="mb-3">PROYECTOS</h4>
                        <Proyectos />
                    </Card>
                </Col>
        
                <Col xs={12} md={3} lg={3} as="aside">
                    <Card className="aside-panel h-100 text-center">
                        <Container className="p-2">
                            <section id="idiomas" className="mt-3">
                                <h4 className="mb-3">IDIOMAS</h4>
                                <ul className="text-start">
                                    <li><b>Español:</b> Nativo</li>
                                    <li><b>Inglés:</b> Nivel Intermedio Alto B-1</li>
                                    <li><b>Alemán:</b> Nivel Básico A-2</li>
                                </ul>
                            </section>

                            <section id="certificaciones">
                                <h4 className="mt-5 mb-3">CERTIFICACIONES</h4>
                                {certifications.map(({ src, alt, title, className }) => (
                                    <div key={src}>
                                        <Image src={src} className={`certiprof-img ${className ?? ''}`} alt={alt}/>
                                        <h5 className="mb-5">{title}</h5>
                                    </div>
                                ))}
                            </section>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );    
}

export default App;