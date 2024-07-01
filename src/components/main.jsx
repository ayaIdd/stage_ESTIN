import React from "react";

const Home = () => {
  return (
    <div className="content">
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-auto">
          <img
            className="card-img img-fluid"
            src="./assets/etudiants-promo-estin-bejaia-juin-2022-1-scaled.jpg"
            alt="Card"
            style={{ height: "745px", width: "100%" }} // Ensure the image takes full width
          />
          <div className="card-img-overlay d-flex align-items-start" style={{ paddingTop: "85px" }}>
            <div className="container">
              <h5 className="card-title fs-1 fw-bold">
                Estin virtual visit
              </h5>
              <p className="card-text fs-3 fw-bold d-none d-sm-block">
                This is What Estin has to offer you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
