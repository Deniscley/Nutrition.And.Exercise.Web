import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

function CarouselFade() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="/anastase-maragos.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Loghgho"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/li-sun.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Loghggo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/pexels-andrea-piacquadio-917660.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="ghg"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
