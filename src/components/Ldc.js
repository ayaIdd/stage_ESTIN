import React from "react";
import { Carousel } from 'react-bootstrap';

const images = [
  {
    src: '/assets/ldc.png',
    title: "Leisure & Discovery Club",
    description: "Le Club Loisirs & Découverte (LDC) de l'École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN) se consacre à enrichir la vie étudiante en équilibrant les activités académiques avec des activités engageantes et agréables. Avec une philosophie « L'humain d'abord, l'étudiant ensuite », LDC donne la priorité au bien-être et au développement holistique de ses membres."
  },
  {
    src: '/assets/img8.jpg',
    title: "Excursions",
    description: "Voyages et sorties planifiés pour explorer de nouveaux lieux, offrant aux étudiants la possibilité de découvrir et d'apprendre en dehors du cadre scolaire. LDC vise à ajouter un élément amusant et dynamique à la vie scolaire, rendant le parcours académique à l'ESTIN plus agréable et mémorable."
  },
  {
    src: '/assets/img9.jpg',
    title: "Ramadan Ftour",
    description: "Organisation de rassemblements communautaires pour rompre le jeûne pendant le Ramadan, favorisant un sentiment d'unité et de célébration culturelle parmi les étudiants."
  },
  {
    src: '/assets/img10.jpg',
    title: "Événements sportifs",
    description: "Encourager la forme physique et l'esprit d'équipe à travers diverses activités sportives et tournois, promouvant un mode de vie sain et actif."
  }
];

const Ldc = () => {
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

export default Ldc;
