import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './Thumbnail';

const images = [
    { src: './image/ldc.png', title: 'Leisure & Discovery Club ', type:"The Leisure & Discovery Club (LDC) at the École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN) is dedicated to enriching student life by balancing academic pursuits with engaging and enjoyable activities. With a philosophy of Human First, Student Second, LDC prioritizes the well-being and holistic development of its members." },
  { src: './image/img8.jpg', title: 'Excursions ',  description:"Planned trips and outings to explore new places, offering students the chance to discover and learn outside the classroom environment.LDC aims to add a fun and dynamic element to school life, making the academic journey at ESTIN more enjoyable and memorable."},
  { src: './image/img9.jpg', title: 'Ramadan Ftour:', description:"Organized community gatherings to break the fast during Ramadan, fostering a sense of unity and cultural celebration among students."},
  { src: './image/img10.jpg', title: 'Sports Events', description:"Encouraged physical fitness and team spirit through various sports activities and tournaments, promoting a healthy and active lifestyle." },
]

function Ldc() {
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

export default Ldc;