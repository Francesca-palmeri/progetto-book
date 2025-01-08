import { Container, Row, Col } from "react-bootstrap"


const MyFooter = function(){
    return(
    <Container fluid className=" mt-5">
        <Row className=" bg-dark text-white-50 pt-4 pb-4">
            <Col className="lh-1">
            <h4>CHI SIAMO</h4>
            <p>Azienda</p>
            <p>Altre Info</p>
            <p>Dove siamo</p>
            <p>Lavora con noi</p>
            </Col>
            <Col className="lh-1">
            <h4>SERVIZI</h4>
            <p>Azienda</p>
            <p>Spedizione</p>
            <p>Pagamento</p>
            <p>Punti di ritiro</p>
            <p>Prenota in negozio</p>
            </Col>
            <Col className="lh-1">
            <h4>SOCIAL E CONTATTI</h4>
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