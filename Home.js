import Carousel from 'react-bootstrap/Carousel';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import carousal1 from './images/carousal-1.png';
import carousal2 from './images/carousal-2.jpg';

const baseURL = "https://j-sylvia.github.io/api/db.json";


function Home() {
 const [item, setItem] = useState([]);
  return(
    <>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal1}
        alt="First slide"
        height='600px'

      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={carousal2}
        alt="Second slide"
        height='600px'
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://images.pexels.com/photos/2983102/pexels-photo-2983102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Third slide"
        height='600px'

      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


  <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Burgers" title=" Burgers">
        {item.map((items)=>(
        <div key={items.id}> 
        <Row className='g-4'>
          <Col xs={6} md={4} >
          <Image src={items.imgdata} thumbnail />
          <b> {items.name}</b>
          <Rating value={items.rating} />
          </Col>
    
        </Row> 
      </div>
    ))}
      </Tab>
      <Tab eventKey="Pizza" title="Pizza">
        Tab content for Profile
      </Tab>
      <Tab eventKey="Salads" title="Salads">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="Sides" title="Sides">
        Tab content for Contact
      </Tab>
    </Tabs>

  



  </>

  );
}

export default Home;
