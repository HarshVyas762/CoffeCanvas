import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import line from '../img/Rectangle 74.svg';
import artistic from '../img/icon-2_1920X 1 (1).png';
import cultural from '../img/icon-4_1920X 1.png';
import sec3img from '../img/sec3img.png';

const Sec4 = () => {
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
      document.querySelector('.sec4col1').style.transform = 'translateX(0)';
      // Apply translation to col-lg-5 from right to original position
      document.querySelector('.sec4col2').style.transform = 'translateX(0)';
    }
  }, [isVisible]);

  return (
    <div className={`sec4 section ${isVisible ? 'visible' : ''}`} ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div className='container' style={{ display: 'flex', flexWrap: 'wrap', rowGap: '60px' }}>
        <div className='col-lg-6 col-md-6 col-sm-12 sec4col1' style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
            <img src={line} style={{ width: '80px' }} alt='' />
            <span id="abouttext">ABOUT US</span>
          </div>
          <p id='sec4_title'>the Essence of the Canvas</p>
          <p id='sec4_desc'>Step into The Coffee Canvas, where we're on a mission to turn your coffee experience into a masterpiece. Just as an artist meticulously selects colors and brushes to create a masterpiece, we carefully choose our coffee beans and brew methods to craft unforgettable flavors and aromas. Here, coffee isn't just a drink; it's a canvas for your senses.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ alignSelf: 'center' }}><img src={artistic} alt=''></img></div>
            <div><h5 id='sec4_boxtitle'>Artisitic Inspiration</h5>
              <p id="sec4_boxdesc">Inspired by art, our coffee house embodies the creativity of an art gallery, from our decor to the way we serve our coffee.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ alignSelf: 'center' }}><img src={cultural} alt=''></img></div>
            <div><h5 id='sec4_boxtitle'>Cultural Fusion</h5>
              <p id="sec4_boxdesc">Experience a global journey of flavor as we fuse the rich traditions and flavors from coffee-growing regions worldwide into each cup, celebrating the cultural heritage of coffee</p>
            </div>
          </div>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-12 sec4col2'>
          <img src={sec3img} id="sec3img" alt='' />
        </div>

      </div>
    </div>
  );
};

export default Sec4;
