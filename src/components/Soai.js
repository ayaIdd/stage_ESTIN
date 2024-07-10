import React from "react";
import { Carousel } from 'react-bootstrap';

const images = [
  {
    src: './assets/soai.jpg',
    title: 'School of AI',
    description: "School of ai  est un club dynamique basé à ESTIN, fondé par des étudiants enthousiastes et passionnés par l'IA et la science des données. Notre mission est de créer une communauté où les membres peuvent partager leurs connaissances, apprendre ensemble et explorer de nouveaux concepts et technologies dans le domaine de l'intelligence artificielle."
  },
  {
    src: './assets/img14.jpg',
    title: 'LearnIt',
    description: "Une série d'ateliers accélérés couvrant divers domaines."
  },
  {
    src: './assets/img15.jpg',
    title: 'Conférence',
    description: "Conférence sur 'COMMENT CRÉER UNE APPLICATION MOBILE INTELLIGENTE' par Meziane Dahou."
  },
  {
    src: './assets/img16.jpg',
    title: 'BrAinON',
    description: "Ideathon est un événement pour résoudre des problèmes du monde réel."
  },
  {
    src: './assets/img17.jpg',
    title: 'DATABLITZ',
    description: "Un Bootcamp en IA et science des données."
  }
];


const Soai = () => {
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

export default Soai;
