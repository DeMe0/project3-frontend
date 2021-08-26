import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Selection = (props) => {
  const items = [
    {
      src: 'https://www.theflavorbender.com/wp-content/uploads/2020/07/Ube-Ice-Cream-SM-8065.jpg',
      altText: 'Ube Ice Cream',
    //   caption: 'Trader Joe‘s',
      header: 'Ube Ice Cream',
    },
    {
      src: 'https://ucarecdn.com/52f4c5f4-bd63-4165-8543-40fc5ae249ae/',
      altText: 'Everything Bagel',
    //   caption: 'Jeni‘s',
      header: 'Everything Bagel',
    },
    {
      src: 'https://d2aam04nmhpdf8.cloudfront.net/images/images/000/063/238/xlarge/wxfmhi82lpz0ogqck4jl.png?1625262112',
      altText: 'Cake Batter Vodka Martini',
    //   caption: 'Tipsy Scoop',
      header: 'Cake Batter Vodka Martini',
    },
    {
        src: 'https://wellsmanagedcontent.azureedge.net/content/blue-bunny/product/thumbnail1/92cee2ab-ac6a-4be6-8da9-4da8ebe93d5d/bunny-tracks.v1.png',
        altText: 'Bunny Tracks',
        // caption: 'Blue Bunny Ice Cream',
        header: 'Bunny Tracks',
      }
  ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="carousel-image" src={item.src} alt={item.altText} />
          <CarouselCaption className="caption"captionHeader={item.header} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel className="Carousel"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  

export default Selection
