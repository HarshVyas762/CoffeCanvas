import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import sec7img1 from '../img/sec7img1.png'
import sec7img2 from '../img/sec7img2.png'
import dot from '../img/dot.png'
import line from '../img/Rectangle 74.svg';
import Popup from './Popup.js';

const Sec7 = () => {
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
      document.querySelector('#sec7subdiv1').style.transform = 'translateY(0)';
      document.querySelector('#sec7subdiv2').style.transform = 'translateY(0)';

      document.querySelector('.sec7col2').style.transform = 'translateX(0)';
    }
  }, [isVisible]);

  return (
    <div className={`sec7 section ${isVisible ? 'visible' : ''}`} ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div className='container'>
        <div className='col-lg-7 col-md-12 col-sm-12 sec7col1' style={{ display: 'flex', paddingLeft: '0px' }}>
          <div className='col-lg-6 col-md-6' id='sec7subdiv1' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ overflow: 'hidden' }}>
              <img src={sec7img1} id="sec7img1" alt='' />
            </div>
            <div className='dotdiv'>
              <img src={dot} id="dot" alt='' />
              <p id="sec6sweet">Sweet Black Coffee</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6' id='sec7subdiv2' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ overflow: 'hidden' }}>
              <img src={sec7img2} id="sec7img2" alt='' />
            </div>
            <div className='dotdiv'>
              <img src={dot} id="dot" alt='' />
              <p id="sec6sweet">Mochaccino Cream Coffee</p>
            </div>
          </div>

        </div>
        <div className='col-lg-4 col-md-12 col-sm-12 sec7col2' style={{ display: 'flex', flexDirection: 'column', gap: '30px', paddingTop: '60px' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
            <img src={line} style={{ width: '80px' }} alt='' />
            <span id="abouttext">BEST MENU</span>
          </div>
          <p id='sec4_title'>Flavorful Artistry to Satisfy Your Senses</p>
          <p id='sec4_desc'>Our menu is a canvas of flavor, featuring handcrafted coffees, teas, cold beverages, and delectable pastries. Whether it's breakfast, a midday pick-me-up, or a leisurely afternoon, we have delights for every palate.</p>
          <div style={{ display: 'flex', placeContent: 'space-between' }}>
            {/* <button id="more_menu">Franchise &#8594;</button> */}
            <Popup />
            {/* <p id="sec7check" style={{ alignSelf: 'center', fontFamily: 'Popins', fontWeight: '100', color: '#49545A' }}>Check your survey <i class="arrow up"></i></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec7;
