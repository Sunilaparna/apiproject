import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import carousal1 from './images/carousal-1.png';
import carousal2 from './images/carousal-2.jpg';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const baseURL = "https://j-sylvia.github.io/api/db.json";

function Home({data}) {
  const [item, setItem] = useState([]);
 
  useEffect(() => {
    
    axios.get(baseURL)
      .then(res => {
        setItem(res.data);
        
      })
      .catch(err => console.log(err));
  }, []);

  const filterItem = item.filter((item) => item.category === 'burgers');

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
      
      <Row xs={1} sm={2} md={3} lg={4} className="container g-4" style={{width:'100%',margin:'auto'}}>
        {filterItem.map((items)=>(
          <div key={items.id}>
            
      <Card style={{ width: "15rem"}}>
      <Card.Img variant="top" src={items.imgdata} />
      <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
        <Rating value={items.rating} />
        </Card.Text>
       
      </Card.Body>
      </Card>
      </div>
       ))}
      </Row> 
      
      </Tab>
      <Tab eventKey="Pizza" title="Pizza">
        
        Hi
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
