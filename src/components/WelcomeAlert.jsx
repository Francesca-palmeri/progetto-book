import { Alert, } from "react-bootstrap"

function WelcomeAlert() {
     return (
      <>
        <Alert variant="success" className="mb-0 pb-3">
          <Alert.Heading >BENVENUTO su Bookshop.it!</Alert.Heading>
        </Alert>       
      </>
    );
  }
  
  export default WelcomeAlert;