import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from 'react';
import SliderItem from './SliderItem';
import ThumbnailItem from './Thumbnail';

const images = [
  { src: './image/img7.png', title: 'ByteCraft',  description:"ByteCraft is the largest scientific club at the École Supérieure en Sciences et Technologies de l'Informatique et du Numérique (ESTIN). Focused primarily on computer science, ByteCraft aims to provide a supportive and dynamic social environment where students can learn, enjoy, and enhance their skills." },
  { src: './image/img5.jpg', title: 'CHESSTIN', description:"A Chess game competition between students , ti's a game that develops : reasoning , problem analysis and problem solving "},
  { src: './image/img3.jpg', title: 'IDEATECH', description:"Idea-generation marathons that encourage creative thinking and collaborative problem-solving, often leading to the development of innovative projects." },
  { src: './image/img4.jpg', title: 'CYBER SESSION',  description :"A program of workshops that offers hands-on training in cybersecurity, where participants grasp the basics and learn to protect against digital threats."},
  { src: './image/img6.jpg', title: 'IDEATECH2',  description:"Competitive designing events where students tackle challenging problems, innovate solutions, and showcase their design skills."},
  { src: './image/img1.jpg', title: 'DESIGN CAMP',  description:"it's a Bootcamp / workshops style event where experienced designers will help participants learn design from scratch " },
  { src: './image/img2.jpg', title: 'INNOBYTE',  description:"A hackathon where participants collaboratively solve problems "},
];

function Bytecraft() {
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

export default Bytecraft;