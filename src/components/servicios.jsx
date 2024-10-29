
import Cartas from './cartas.jsx';

const info = [
    { 
        titulo: 'Desarrollo de Aplicaciones Web',
        texto: 'Creación de aplicaciones web completas utilizando tecnologías como React en el front-end y Node.js o Django en el back-end.',
        link: 'read more'
    },
    { 
        titulo: 'Integración de API',
        texto: 'Implementación de APIs RESTful o GraphQL para permitir la comunicación entre diferentes servicios y aplicaciones, asegurando una experiencia fluida para los usuarios.',
        link: 'read more'
    },
    { 
        titulo: 'Uso de herramientas:',
        texto: 'Me mantengo constantemente buscando herramientas para mejorar el desarrollo de mis aplicaciones web y ofrecer el mejor servicio posible.',
        link: 'read more'
    },
    { 
        titulo: 'Optimización de Rendimiento:',
        texto: 'Análisis y mejora del rendimiento de sitios web existentes, incluyendo optimización de carga, implementación de técnicas de lazy loading y mejora de SEO.',
        link: 'read more'
    },
    { 
        titulo: 'Mantenimiento y Soporte Técnico:',
        texto: 'Servicios continuos para mantener y actualizar aplicaciones existentes, asegurando que funcionen correctamente y estén al día con las últimas tecnologías.',
        link: 'read more'
    },
    { 
        titulo: 'Diseños Web:',
        texto: 'Ofrezco una variedad de diseños webs que puedo abarcar con maestría, soy muy creativo y me preocupo mucho por el apartado visual de los productos que ofrezco.',
        link: 'read more'
    }
];

function Servicios() {
    return (
        <div className="servicios">
            <div className='movida'>
                <h1>Mis servicios:</h1>
                <div className='cartas'>
                    {info.map((item, index) => (
                        <Cartas 
                            key={index} 
                            titulo={item.titulo} 
                            texto={item.texto} 
                            link={item.link} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Servicios;
