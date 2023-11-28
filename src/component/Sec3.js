import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import coffeecup from '../img/coffee-cup 1.png';
import badge from '../img/quality 1.png';
import beans from '../img/coffee-beans 1.png';
import brewd from '../img/coffee 1.png';

const Sec3 = () => {
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
        // You can add a delay to the translation of each inner element
        document.querySelectorAll('.sec2box').forEach((element, index) => {
          element.style.transitionDelay = `${index * 0.2}s`; // Adjust the delay as needed
        });
      }
    }, [isVisible]);

  return (
    <div className={`sec3 ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className='container'>
          <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: '60px', placeContent: 'space-between', justifyContent: 'center', alignSelf: 'center', padding: '100px 0' }}>
            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={coffeecup} className='sec2img' alt='' />
              <h3 className='sec2_title'>Awesome Aroma</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={badge} className='sec2img' alt='' />
              <h3 className='sec2_title'>High Quality</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={beans} className='sec2img' alt='' />
              <h3 className='sec2_title'>Pure Grades</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={brewd} className='sec2img' alt='' />
              <h3 className='sec2_title'>Proper Roasting</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Sec3;
