import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

function CarouselSlider() {
  return (
    <Carousel className='sm-h-100'>
      <Carousel.Item interval={4000}>
        <img
          src="/hanuman1.png"
          alt="Slide 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption
          className="d-flex flex-column align-items-start justify-content-center text-start h-100"
          style={{ top: 0, left: 0, margin: '0', padding: '20px' }}
        >
          <h3>Welcome to Our Platform</h3>
          <p className="d-none d-md-block">
            Discover the amazing services we offer. Join us today and be part of our journey!
          </p>
          <div className="d-flex flex-row">
            <button className="btn btn-light rounded-pill me-2">Join→</button>
            <button className="btn btn-secondary rounded-pill">Services→</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          src="/hanuman2.jpg"
          alt="Slide 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption
          className="d-flex flex-column align-items-start justify-content-center text-start h-100"
          style={{ top: 0, left: 0, margin: '0', padding: '20px' }}
        >
          <h3>Empowering Communities</h3>
          <p className="d-none d-md-block">
            We strive to make a difference by offering exceptional services and support.
          </p>
          <div className="d-flex flex-row">
            <button className="btn btn-light rounded-pill me-2">Join→</button>
            <button className="btn btn-secondary rounded-pill">Services→</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          src="/hanuman3.jpg"
          alt="Slide 3"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption
          className="d-flex flex-column align-items-start justify-content-center text-start h-100"
          style={{ top: 0, left: 0, margin: '0', padding: '20px' }}
        >
          <h3>Transform Your Experience</h3>
          <p className="d-none d-md-block">
            Explore our services and take your journey to the next level with us.
          </p>
          <div className="d-flex flex-row">
            <button className="btn btn-light rounded-pill me-2">Join→</button>
            <button className="btn btn-secondary rounded-pill">Services→</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
