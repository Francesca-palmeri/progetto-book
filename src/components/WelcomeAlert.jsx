import { Alert } from "react-bootstrap"

function WelcomeAlert() {
  return (
    <>
      <Alert variant="info" className="mb-0 pb-3">
        <Alert.Heading>BENVENUTO su Bookshop.it!</Alert.Heading>
        <hr />
        <p className="mb-0">
          La tua libreria preferita dove troverai sempre nuove uscite e libri provenienti da tutto il mondo!
        </p>
      </Alert>
    </>
  )
}

export default WelcomeAlert
