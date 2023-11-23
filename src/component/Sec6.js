import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import line from '../img/Rectangle 74.svg';
import sec6img from '../img/sec6img.png';
import dot from '../img/dot.png'

const Sec6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Apply translation to col-lg-6 from left to original position
      document.querySelector('.sec6col1').style.transform = 'translateY(0)';
      // Apply translation to col-lg-5 from right to original position
      document.querySelector('.sec6col2').style.transform = 'translateY(0)';
    }
  }, [isVisible]);

  return (
    <div className={`sec6 section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
              <div className='container' style={{ display: 'flex', flexWrap: 'wrap', placeContent: 'space-around', rowGap: '50px' }}>
          <div className='col-lg-7 col-md-6 col-sm-12 sec6col1' style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
              <img src={line} style={{ width: '80px' }} />
              <span id="abouttext">THE MOBILE APP</span>
            </div>
            <p id='sec4_title'>Never Run Out of Your Favorite Blend</p>
            <p id='sec4_desc'>Don't miss out on the opportunity to elevate your daily coffee ritual. Download the Coffee Subscription App today and savor the convenience, the flavors, and the artistry that The Coffee Canvas has to offer. It's coffee, your way, and it's just a tap away.</p>
            <button id='subscribe'>Subscribe</button>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-12 sec6col2' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src={sec6img} style={{ width: '100%' }} />
            <div style={{ display: 'flex', gap: '30px' }}>
              <img src={dot} id="dot" />
              <p id="sec6sweet">Sweet Black Coffee</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Sec6;
