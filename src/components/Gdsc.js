import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap

const images = [
  {
    src: './assets/gdsc.png',
    title: 'GDSC',
    description: "GDSC ESTIN de l'École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN) de Béjaïa est une communauté dynamique de développeurs et d'étudiants. Axé sur les technologies Google, il organise des ateliers, des hackathons et des sessions de conférenciers pour favoriser la collaboration, améliorer les compétences techniques et promouvoir l'innovation. GDSC ESTIN offre des opportunités d'apprentissage, de réseautage et de préparation à des carrières technologiques réussies."
  },
  {
    src: './assets/img19.jpg',
    title: 'Welcome Day',
    description: "Présentation des nouveaux membres à GDSC, avec un aperçu des événements à venir et des avantages de l'adhésion."
  },
  {
    src: './assets/img18.jpg',
    title: 'GDSC Hack Day - CTF',
    description: "Un événement compétitif testant les compétences en résolution de problèmes et les connaissances en cybersécurité."
  },
  {
    src: './assets/img20.jpg',
    title: 'Atelier',
    description: "Accent mis sur l'apprentissage collaboratif et l'application pratique des technologies Google."
  },
  {
    src: './assets/img21.jpg',
    title: 'Hackathon Béjaïa',
    description: "Un événement de codage collaboratif électrisant."
  }
];

const Gdsc = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel className="centered-carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + image.src} // Use PUBLIC_URL for correct path resolution
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

export default Gdsc;
