import React from 'react';
import { Carousel } from 'react-bootstrap';


const images = [
  {
    src: './assets/img7.png',
    title: 'ByteCraft',
    description: "ByteCraft est le plus grand club scientifique de l'École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN). Focalisé principalement sur l'informatique, ByteCraft vise à fournir un environnement social dynamique et solidaire où les étudiants peuvent apprendre, s'amuser et améliorer leurs compétences."
  },
  {
    src: './assets/img5.jpg',
    title: 'CHESSTIN',
    description: "Une compétition d'échecs entre étudiants, c'est un jeu qui développe : le raisonnement, l'analyse et la résolution de problèmes."
  },
  {
    src: './assets/img3.jpg',
    title: 'IDEATECH',
    description: "Hakathons de génération d'idées qui encouragent la pensée créative et la résolution collaborative de problèmes, conduisant souvent au développement de projets innovants."
  },
  {
    src: './assets/img4.jpg',
    title: 'CYBER SESSION',
    description: "Un programme d'ateliers offrant une formation pratique en cybersécurité, où les participants apprennent les bases et comment se protéger contre les menaces numériques."
  },
  {
    src: './assets/img6.jpg',
    title: 'IDEATECH2',
    description: "Événements de conception compétitifs où les étudiants s'attaquent à des problèmes complexes, innovent des solutions et montrent leurs compétences en conception."
  },
  {
    src: './assets/img1.jpg',
    title: 'DESIGN CAMP',
    description: "C'est un Bootcamp où des designers expérimentés aident les participants à apprendre la conception depuis le début."
  },
  {
    src: './assets/img2.jpg',
    title: 'INNOBYTE',
    description: "Un hackathon où les participants résolvent des problèmes de manière collaborative."
  }
];
const BytecraftCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel className="centered-carousel">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
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

export default BytecraftCarousel;
