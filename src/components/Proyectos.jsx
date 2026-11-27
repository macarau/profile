import { Card, Carousel } from 'react-bootstrap'
import babilonia3dImg from '../assets/img/babilonia3d.webp'
import parkingsmartImg from '../assets/img/parkingSmart2.jpg'
import aduanaDigitalImg from '../assets/img/adi.webp'
import vetImg from '../assets/img/vet.jpg'

const proyectos = [
    {
        enlace: 'https://github.com/macarau/babilonia3d',
        aria: 'Github - Babilonia3D',
        imagen: babilonia3dImg,
        alt: 'Babilonia3D',
        descripcion: 'Repositorio 3D del mapa babilónico del mundo...',
    },
    {
        enlace: 'https://github.com/macarau/ParkingSmart',
        aria: 'Github - ParkingSmart',
        imagen: parkingsmartImg,
        alt: 'ParkingSmart',
        descripcion: 'Prototipo de app para reservar estacionamientos...',
    },
    {
        enlace: 'https://github.com/Joseph-ac96/ADI-FrontEnd-MVP',
        aria: 'Github - ADI',
        imagen: aduanaDigitalImg,
        alt: 'ADI',
        descripcion: 'Prototipo SaaS para aduana fronteriza terrestre...',
    },
    {
        enlace: 'https://github.com/macarau/Vet',
        aria: 'Github - Vet',
        imagen: vetImg,
        alt: 'Vet San Marcos',
        descripcion: 'E-commerce website Veterinaria San Marcos...',
    },
]

function Proyectos() {
    return (
        <Carousel className="projects-carousel" interval={null}>
            {proyectos.map(({ enlace, aria, imagen, alt, descripcion }) => (
                <Carousel.Item key={enlace}>
                    <Card className="tarjeta p-1 border rounded">
                        <a href={enlace} target="_blank" rel="noreferrer" aria-label={aria}>
                            <Card.Img variant="top" src={imagen} className="mt-0 mb-3 img-fluid" alt={alt} />
                        </a>
                        <Card.Text>{descripcion}</Card.Text>
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Proyectos