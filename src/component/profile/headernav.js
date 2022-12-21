  
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import { FaHome,FaUser,FaXing,FaEnvelope} from "react-icons/fa";
  import {IconContext} from 'react-icons';
  const HeaderNav =()  => {

    return (
        <div>         
            <Navbar style={{ backgroundColor:' #dfe6e9' }}>
            <Container>
            <IconContext.Provider value ={{color:"black", size:"1.1em" }}>

              <Navbar.Brand href="#home"><FaHome />Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#bio"><FaUser />Bio</Nav.Link>
                <Nav.Link href="#profession"><FaXing />profession</Nav.Link>
                <Nav.Link href="#Contact"><FaEnvelope />Contact</Nav.Link>
              </Nav>
              </IconContext.Provider>

            </Container>
          </Navbar>        
          </div>)    }
          export default HeaderNav;