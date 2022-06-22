import { Form } from 'react-bootstrap';
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Home} from './components/Home';


function App() {
  return (

    <BrowserRouter>
    <div className="App">
     <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
</>
<div>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Home" element={<Home/>}/>
  </Routes>
</div>

    </div>
    </BrowserRouter>
  );
}

export default App;
