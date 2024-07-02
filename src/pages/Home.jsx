
import React from 'react';
import { Navbar, Main, Footer, Clubs, Bytecraft, Gdsc, Ldc, Soai, Sirius, Nexus } from "../components";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App d-flex">
      <Navbar />
      <div className="content flex-grow-1 p-4">
        <Main />
        <Clubs />
        <main>
          <section id="bytecraft" className="px-4 py-4 ">
            <Bytecraft />
          </section>
          <section id="gdsc" className="px-4 py-4 ">
            <Gdsc />
          </section>
          <section id="ldc" className="px-4 py-4 ">
            <Ldc />
          </section>
          <section id="soai" className="px-4 py-4 ">
            <Soai />
          </section>
          <section id="sirius" className="px-4 py-4 ">
            <Sirius />
          </section>
          <section id="nexus" className="px-4 py-4 ">
            <Nexus />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
