import React from "react";
import { Carousel } from 'react-bootstrap';


const images = [
  {
    src: './assets/l.png',
    title: 'Sirius',
    description: "Sirius est un groupe d'étudiants dynamiques qui partagent une profonde passion pour l'ingénierie matérielle. Notre club se consacre à favoriser une communauté où les membres peuvent explorer, apprendre et innover ensemble dans le domaine de la technologie matérielle."
  },
  {
    src: './assets/img24.jpg',
    title: 'Welcome Day',
    description: ""
  },
  {
    src: './assets/img22.jpg',
    title: 'Sirius 101',
    description: "Une série d'ateliers conçus pour donner aux étudiants une compréhension complète de l'Internet des objets (IoT)."
  },
  {
    src: './assets/img23.jpg',
    title: 'NASA Space Apps Challenge',
    description: ""
  },
  {
    src: './assets/img21.jpg',
    title: 'Bejaia Hackathon',
    description: "Un événement de codage collaboratif électrisant."
  }
];


const Sirius = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel className="centered-carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + image.src} // Utilisation de process.env.PUBLIC_URL pour le chemin correct
              alt={image.title}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Sirius;
