import React from "react";
import { Carousel } from 'react-bootstrap';


const images = [
  {
    src: './assets/nexus.jpg',
    title: 'Nexus',
    description: "Le Nexus Security Club favorise l'intérêt pour la cybersécurité à l'École supérieure d'informatique d'Amizour à travers des ateliers, des séminaires et des événements CTF, préparant les étudiants aux métiers de la sécurité numérique."
  },
  {
    src: './assets/img12.jpg',
    title: 'NexZero',
    description: "CTF (Capture The Flag)."
  },
  {
    src: './assets/img13.jpg',
    title: 'NexTrace',
    description: "Mini CTF"
  },
  {
    src: './assets/img11.jpg',
    title: 'NEXLABS',
    description: "Une série de laboratoires et de conférences guidés par des mentors expérimentés et des experts de l'industrie en cybersécurité."
  }
];


const Nexus = () => {
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

export default Nexus;
