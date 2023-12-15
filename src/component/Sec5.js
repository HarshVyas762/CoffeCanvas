import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import artistic from '../img/icon-2_1920X 1 (1).png';
import cultural from '../img/icon-4_1920X 1.png';
import sec5img from '../img/sec5img.png';



const Sec5 = () => {
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
      document.querySelectorAll('.sec5box').forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.2}s`; // Adjust the delay as needed
        element.style.transform = 'translateX(0)'; // Translate to original position
      });
    }
  }, [isVisible]);

  return (
    <div className={`sec5 ${isVisible ? 'visible' : ''}`} ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', placeContent: 'space-between', rowGap: '60px', flexWrap: 'wrap' }}>
        <div className='col-lg-5 col-md-5 col-sm-12' id="sec5col1">
          <div style={{ overflow: 'hidden' }}>
            <img src={sec5img} id="sec5img" alt='' />
          </div>
        </div>
        <div className='col-lg-7 col-md-7 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingRight: '0px' }}>
          <p id='sec4_title'>Artistry in Every Cup</p>
          <p id='sec4_desc'>At The Coffee Canvas, we're not just making coffee; we're painting a masterpiece. Our beans are carefully sourced from around the globe, each telling its own story through its unique flavors. Like a skilled artist, our baristas use their expertise to create a symphony of flavors in every cup.</p>
          <div style={{ display: 'flex', rowGap: '50px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div className='col-lg-6 col-md-6 col-sm-12 sec5box' style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={artistic} alt=''></img></div>
              <div><h5 id='sec5_boxtitle'>World’s Best Beans</h5>
                <p id="sec5_boxdesc">We partner with passionate, quality-focused farmers worldwide to craft our exceptional blends.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 sec5box' style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={cultural} alt=''></img></div>
              <div><h5 id='sec5_boxtitle'>Baristas as Artists</h5>
                <p id="sec5_boxdesc">Our baristas craft consistently outstanding coffee experiences, turning every cup into a work of art</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 sec5box' style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={artistic} alt=''></img></div>
              <div><h5 id='sec5_boxtitle'>Freshness & Quality</h5>
                <p id="sec5_boxdesc">We prioritize freshness with in-house roasting and meticulous brewing to craft each cup as a true work of art</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 sec5box' style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={cultural} alt=''></img></div>
              <div><h5 id='sec5_boxtitle'>Symphony of Flavours</h5>
                <p id="sec5_boxdesc">Explore a world of flavors with our diverse artisan roasts, catering to every coffee lover's taste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
