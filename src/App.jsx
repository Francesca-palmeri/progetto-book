import AllTheBooks from './components/AllTheBooks'
import BookshopNavbar from './components/BookshopNavbar'
import WelcomeAlert from './components/WelcomeAlert'
import MyFooter from './components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BookshopNavbar/>

      <WelcomeAlert/>
      
      <AllTheBooks/>

      <MyFooter/>

    </>
  )
}

export default App
