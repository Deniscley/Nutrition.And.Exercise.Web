import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function carouselHeader() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src="/images/anastase-maragos.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Logo 1"
        />
        <Carousel.Caption>
          <h3>Denis Laureano - Nutrição e Exercício</h3>
          <p>O corpo atinge o que a mente acredita.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/spencer-stone.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Logo 2"
        />
        <Carousel.Caption>
          <h3>Denis Laureano - Nutrição e Exercício</h3>
          <p>Apaixone-se pelo processo e os resultados aparecerão.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/pexels-andrea-piacquadio-917660.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Logo 3"
        />
        <Carousel.Caption>
          <h3>Denis Laureano - Nutrição e Exercício</h3>
          <p>Não é o peso que você perde, mas a vida que você ganha.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/sven-miekklk.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Logo 4"
        />
        <Carousel.Caption>
          <h3>Denis Laureano - Nutrição e Exercício</h3>
          <p>A persistência realiza o impossível.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/vegetables.jpg"
          className="d-block w-100"
          // width={1500}
          height={600}
          alt="Logo 4"
        />
        <Carousel.Caption>
          <h3>Denis Laureano - Nutrição e Exercício</h3>
          <p>O sucesso é a soma de pequenos esforços repetidos dia após dia.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default carouselHeader;
