import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './Thumbnail';

const images = [
  { src: './image/gdsc.jpg', title: 'GDSC', type:" GDSC ESTIN at the École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN) in Béjaïa is a dynamic community of developers and students. Focused on Google technologies, it organizes workshops, hackathons, and speaker sessions to foster collaboration, enhance technical skills, and promote innovation. GDSC ESTIN provides opportunities for learning, networking, and preparing for successful tech careers." },
  { src: './image/img19.jpg', title: 'Welcome Day', description:"Introduced new members to GDSC, outlining upcoming events and membership benefits."},
  { src: './image/img18.jpg', title: ' GDSC Hack Day - CTF',  description:"A competitive event testing problem-solving skills and cybersecurity knowledge." },
  { src: './image/img20.jpg', title: 'Workshop', description:"Emphasized collaborative learning and practical application of Google technologies." },
  { src: './image/img21.jpg', title: 'Hackathon Bejaia ',  description :" An electrifying collaborative coding event."},
];

function Gdsc() {
  const [items, setItems] = useState(images);
  const [direction, setDirection] = useState(null);
  const sliderRef = useRef(null);

  const moveSlider = useCallback((newDirection) => {
    setDirection(newDirection);
    
    setItems(prevItems => {
      const newItems = [...prevItems];
      if (newDirection === 'next') {
        const firstItem = newItems.shift();
        newItems.push(firstItem);
      } else {
        const lastItem = newItems.pop();
        newItems.unshift(lastItem);
      }
      return newItems;
    });
  }, []);

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => {
        setDirection(null);
        if (sliderRef.current) {
          sliderRef.current.classList.remove(direction);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  useLayoutEffect(() => {
    if (direction && sliderRef.current) {
      sliderRef.current.classList.add(direction);
    }
  }, [direction, items]);

  const sliderItems = useMemo(() => (
    items.map((image, index) => (
      <SliderItem
        key={image.src}
        image={image}
        isActive={index === 0}
      />
    ))
  ), [items]);

  const thumbnailItems = useMemo(() => (
    items.map((image) => (
      <ThumbnailItem
        key={image.src}
        image={image}
      />
    ))
  ), [items]);

  return (
    <div ref={sliderRef} className="slider">
      <div className="list">
        {sliderItems}
      </div>
      <div className="thumbnail">
        {thumbnailItems}
      </div>
      <div className="nextPrevArrows">
        <button className="prev" onClick={() => moveSlider('prev')}> &lt; </button>
        <button className="next" onClick={() => moveSlider('next')}> &gt; </button>
      </div>
    </div>
  );
}

export default Gdsc;