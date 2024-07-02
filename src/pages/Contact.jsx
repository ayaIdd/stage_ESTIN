import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">LE SECRETAIRE DU DIRECTEUR</h2>
              <p className="card-text">Fax: 034 82 49 16</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">LA SECRETAIRE GENERALE</h2>
              <p className="card-text">Téléphone: 034 82 49 07</p>
              <p className="card-text">Email: <a href="mailto:sg@estin.dz">sg@estin.dz</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">RECEPTION</h2>
              <p className="card-text">Téléphone: 034 82 49 09</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Adresse</h2>
              <p className="card-text">Route nationale n° 75, Amizour – 06300 Bejaia, Algérie</p>
              <p className="card-text">Email: <a href="mailto:contact@estin.dz">contact@estin.dz</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
