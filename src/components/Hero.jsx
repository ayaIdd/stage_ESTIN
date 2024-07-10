import React from "react";


const Hero = () => {
  return (
    <div className="hero border-1 pb-3">
      <div className="card text-white border-0 m-3">
        <img
          className="card-img img-fluid mx-0 responsive-img"
          src="./assets/etudiants-promo-estin-bejaia-juin-2022-1-scaled.jpg"
          alt="Card"
        />
        <div
          className="card-img-overlay d-flex align-items-start"
          style={{ paddingTop: "75px" }}
        >
          <div className="container">
            <h5 className="card-title display-4  fw-bold">
              Estin virtual visit
            </h5>
            <p className="card-text  fw-bold ">
              This is What Estin has to offer you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;