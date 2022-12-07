import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import LoginRegister from "../LoginRegister/LoginRegister";
import MainPage from "../common/MainPage";
function App() {
  return (

    <BrowserRouter>
      <Navi></Navi>
      <Container>
        <LoginRegister to="/login"></LoginRegister>
        <MainPage to="/MainPage"></MainPage>
      </Container>
    </BrowserRouter>

  );
}

export default App;
