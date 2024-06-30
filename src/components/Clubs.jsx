import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch("/assets/clubs.json")
      .then((response) => response.json())
      .then((data) => setClubs(data.clubs));
  }, []);

  const handleReadMoreClick = (e, clubId) => {
    e.preventDefault();
    const section = document.getElementById(clubId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const ClubCard = ({ club }) => (
    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" id={`club-${club.id}`}>
      <div className="card text-center h-100">
        <img
          className="card-img-top p-3"
          src={club.logo}
          alt={`${club.name} Logo`}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">{club.name}</h5>
          <p className="card-text">{club.description.substring(0, 120)}...</p>
          <a
            href={`#${club.path}`} // Lien vers la section de détail du club
            className="btn btn-dark"
            onClick={(e) => handleReadMoreClick(e, club.path)}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center text-black">Clubs</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
