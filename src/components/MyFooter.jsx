import { Container, Row, Col } from "react-bootstrap"


const MyFooter = function(){
    return(
    <Container fluid>
        <Row className="bg-black text-white-50 mt-4 pt-4">
            <Col className=" ">
            <h3>CHI SIAMO</h3>
            <p>Azienda</p>
            <p>Altre Info</p>
            <p>Dove siamo</p>
            <p>Lavora con noi</p>
            </Col>
            <Col>
            <h3>SERVIZI</h3>
            <p>Azienda</p>
            <p>Spedizione</p>
            <p>Pagamento</p>
            <p>Punti di ritiro</p>
            <p>Prenota in negozio</p>
            </Col>
            <Col>
            <h3>SOCIAL E CONTATTI</h3>
            <p>X (Twitter)</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Partner online</p>
            <p>Numeri utili</p>
            </Col>
        </Row>
    </Container>

    )
}

export default MyFooter