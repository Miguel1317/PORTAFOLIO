import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import hydro from '../assets/espark.jpg'

function Carta() {
  const info=[{
    titulo:'E-spark',
    texto:'Página de promoción para una zapatilla inteligente'
  }]
  return (
    <Card className='proyecto-card'>
      <Card.Img variant="top" src={hydro} />
      <Card.Body>
        <Card.Title>{info[0].titulo}</Card.Title>
        <Card.Text>
          {info[0].texto}
        </Card.Text>
        <Button variant="dark" href='https://e-spark-zeta.vercel.app/'>visitar</Button>
      </Card.Body>
    </Card>
  );
}

function Proyectos() {
    return(
        <div className="servicios">
            <div className="proyectos">
                <h1>My projects</h1>
                <Carta></Carta>
            </div>
            <div className='fondo'></div>
        </div>
    )
}
export default Proyectos;