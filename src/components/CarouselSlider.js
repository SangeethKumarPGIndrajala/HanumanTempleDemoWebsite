import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img  src='/hanuman1.png' style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <Carousel.Caption>
          <h3>Coming Soon!</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src='/hanuman2.jpg' style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <Carousel.Caption>
          <h3>Coming Soon!</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src='/hanuman3.jpg' style={{width:'100%', height:'100%', objectFit:'cover'}}/>
        <Carousel.Caption>
        <h3>Coming Soon!</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;