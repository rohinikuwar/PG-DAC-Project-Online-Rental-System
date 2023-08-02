import HeroSlider from "../components/HeroSlider";
import Cards from "../components/Cards";
import { Container,Row,Col } from "react-bootstrap";
import './home.css';
/* import Categorybox from "../components/Categorybox"; */
import Footer from "../components/Footer";
import Cards1 from "../components/Category/Cards1";
function Home() {
  return (
    <>
    <Container>
    <Col className="Slider"><HeroSlider/></Col>
    </Container>

    <Container >
      <Col className="Card1"> <Cards1 /> </Col>
      </Container>
      
   {/*    <Container >
      <Col className="Categorybox"> <Categorybox /> </Col>
      </Container>

 */}
      <Container >
      <Col className="Card"> <Cards /> </Col>
      </Container>
      
    

      <Container>
      <Col><Footer>/</Footer></Col>
      </Container>
    </>
  );
}

export default Home;
