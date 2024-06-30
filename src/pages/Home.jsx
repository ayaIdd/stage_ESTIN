import React from 'react';
import { Navbar, Footer,Clubs, Bytecraft, Gdsc, Ldc, Soai, Sirius, Nexus } from "../components";

function Home() {
  return (
    <div className="App p-4">
      <Navbar />
      <Clubs/>
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
      <Clubs />
      <Footer />
    </div>
  );
}

export default Home;
