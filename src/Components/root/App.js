import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import LoginRegister from "../LoginRegister/LoginRegister";
import MainPage from "../common/MainPage";
import Login from "../LoginRegister/Login";
function App() {
  return (
    <div>
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRegister></LoginRegister>}/>
        <Route path="/MainPage" element= {<MainPage></MainPage>}/>
      </Routes>
      </BrowserRouter>
      
    </Container>
    </div>
  );
}

export default App;
