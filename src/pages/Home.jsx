import React from 'react';
import {Navbar, Main, Footer, Clubs, Bytecraft, Gdsc, Ldc, Soai, Sirius, Nexus } from "../components";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App d-flex">
      <Navbar />
      <div className="content flex-grow-1 p-4">
        <Main />
        <Clubs />
        <main>
          <section id="bytecraft" className="px-4 py-4 border">
            <Bytecraft />
          </section>
          <section id="gdsc" className="px-4 py-4 border">
            <Gdsc />
          </section>
          <section id="ldc" className="px-4 py-4 border">
            <Ldc />
          </section>
          <section id="soai" className="px-4 py-4 border">
            <Soai />
          </section>
          <section id="sirius" className="px-4 py-4 border">
            <Sirius />
          </section>
          <section id="nexus" className="px-4 py-4 border">
            <Nexus />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;