import React from 'react';
import { ClubCards,   Hero } from "../components";
import Club from './Club';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>

      <div style={{ marginLeft: '60px', padding: '30px', zIndex: 1 }}>
        <Hero />
        <ClubCards />
        <Club/>
      </div>
    </div>
  );
}

export default Home;
