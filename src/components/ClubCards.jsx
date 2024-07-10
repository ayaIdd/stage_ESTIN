import React, { useState, useEffect } from "react";

const ClubCards = () => {
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
    <div className="col-lg-4 col-md-6 col-sm-12 mb-3" id={`club-${club.id}`}>
      <div className="card text-center h-100">
        <img
          className="card-img-top p-1 img-fluid"
          src={club.logo}
          alt={`${club.name} Logo`}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fs-3">{club.name}</h5>
          <p className="card-text text-muted fs-5">{club.description.substring(0, 120)}...</p>
          <div className="mt-auto">
            <a
              href={`#${club.path}`}
              className="btn btn-dark"
              style={{ background: "#34495e" }}
              onClick={(e) => handleReadMoreClick(e, club.path)}
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 fw-bold text-center" style={{ color: "#34495e" }}>Nos Clubs</h2>
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

export default ClubCards;
