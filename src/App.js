import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import * as THREE from 'three';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, Image as ImageImpl } from '@react-three/drei';
import { ScrollControls, Scroll, useScroll } from './ScrollControls.tsx';
import trip1 from './img/trip1.jpg';
import trip2 from './img/trip2.jpg';
import trip3 from './img/trip3.jpg';
import trip4 from './img/trip4.jpg';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import coffeecup from './img/coffee-cup 1.png';
import badge from './img/quality 1.png';
import beans from './img/coffee-beans 1.png'
import brewd from './img/coffee 1.png'
import line from './img/Rectangle 74.svg'
import artistic from './img/icon-2_1920X 1 (1).png'
import cultural from './img/icon-4_1920X 1.png'
import sec3img from './img/sec3img.png'
import sec5img from './img/sec5img.png'

function Image(props) {
  const ref = useRef()
  const group = useRef()
  const data = useScroll()
  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
  })
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  )
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3
  return (
    <group {...props}>
      <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
      <Page position={[-width * 1, 0, 0]} urls={[trip1, trip2, trip3]} />
      <Page position={[width * 0, 0, 0]} urls={[img1, img2, img3]} />
      <Page position={[width * 1, 0, 0]} urls={[img4, img5, img6]} />
      <Page position={[width * 2, 0, 0]} urls={[trip1, trip2, trip3]} />
      <Page position={[width * 3, 0, 0]} urls={[img1, img2, img3]} />
      <Page position={[width * 4, 0, 0]} urls={[img4, img5, img6]} />
    </>
  )
}


function App() {

  return (
    <div className="App" >
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/rancho" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/raleway-5" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charset="utf-8" />
        <style>
          @import url('https://fonts.cdnfonts.com/css/red-hat-display');
        </style>

      </Helmet>
      <div className='sec1'>
        <div className='container' style={{ display: 'flex', placeContent: 'space-between', padding: '40px 0', placeSelf: 'center', textAlign: 'center' }}>
          <div className='col-lg-3' id="logo">TheCoffeeCanvas</div>
          <div className='col-lg-5 menu-link' style={{ placeContent: 'space-between', alignItems: 'center', color: 'white' }}>
            <p>Menu</p>
            <p>Service</p>
            <p>Location</p>
            <p>About</p>
            <p>Career</p>
          </div>
          <div className='col-lg-2 menu-btn'>
            <button id="headbtn">Contact</button>
          </div>
        </div>
      </div>

      <div className='sec2'>
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} style={{ height: '700px' }}>
          <Suspense fallback={null}>
            <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
              <Scroll>
                <Pages />
              </Scroll>
              <Scroll html>
                <h1 style={{ position: 'absolute', top: '40vh', left: '-75vw', fontSize: '5rem' }}>Coffe</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: '25vw', fontSize: '5rem' }}>Canvas</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: '125vw', fontSize: '5rem' }}>Coffee</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: '225vw', fontSize: '5rem' }}>Canvas</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: '325vw', fontSize: '5rem' }}>Coffee</h1>
                <h1 style={{ position: 'absolute', top: '40vh', left: '425vw', fontSize: '5rem' }}>Canvas</h1>
              </Scroll>
            </ScrollControls>
            <Preload />
          </Suspense>
        </Canvas>
      </div>

      <div className='sec3'>
        <div className='container'>
          <div style={{ display: 'flex', flexWrap: 'wrap', placeContent: 'space-between', justifyContent: 'center', alignSelf: 'center', padding: '100px 0' }}>
            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={coffeecup} className='sec2img' />
              <h3 className='sec2_title'>Awesome Aroma</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={badge} className='sec2img' />
              <h3 className='sec2_title'>High Quality</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={beans} className='sec2img' />
              <h3 className='sec2_title'>Pure Grades</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>

            <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
              <img src={brewd} className='sec2img' />
              <h3 className='sec2_title'>Proper Roasting</h3>
              <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
            </div>
          </div>
        </div>

      </div>

      <div className='sec4 section'>
        <div className='container' style={{ display: 'flex',gap:'20px', flexWrap: 'wrap' }}>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
              <img src={line} style={{ width: '80px' }} />
              <span id="abouttext">ABOUT US</span>
            </div>
            <p id='sec4_title'>the Essence of the Canvas</p>
            <p id='sec4_desc'>Step into The Coffee Canvas, where we're on a mission to turn your coffee experience into a masterpiece. Just as an artist meticulously selects colors and brushes to create a masterpiece, we carefully choose our coffee beans and brew methods to craft unforgettable flavors and aromas. Here, coffee isn't just a drink; it's a canvas for your senses.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={artistic}></img></div>
              <div><h5 id='sec4_boxtitle'>Artisitic Inspiration</h5>
                <p id="sec4_boxdesc">Inspired by art, our coffee house embodies the creativity of an art gallery, from our decor to the way we serve our coffee.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ alignSelf: 'center' }}><img src={cultural}></img></div>
              <div><h5 id='sec4_boxtitle'>Cultural Fusion</h5>
                <p id="sec4_boxdesc">Experience a global journey of flavor as we fuse the rich traditions and flavors from coffee-growing regions worldwide into each cup, celebrating the cultural heritage of coffee</p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-12'>
            <img src={sec3img}/>
          </div>
        </div>
      </div>

      <div className='sec5 section'>
        <div style={{ display: 'flex', placeContent:'space-between', rowGap:'20px', flexWrap: 'wrap' }}>
          <div className='col-lg-5 col-md-5 col-sm-12' style={{paddingLeft:'0px'}}>
          <img src={sec5img} style={{width:'504px'}}/>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '28px',paddingRight:'0px' }}>
            <p id='sec4_title'>Artistry in Every Cup</p>
            <p id='sec4_desc'>At The Coffee Canvas, we're not just making coffee; we're painting a masterpiece. Our beans are carefully sourced from around the globe, each telling its own story through its unique flavors. Like a skilled artist, our baristas use their expertise to create a symphony of flavors in every cup.</p>
            <div style={{ display: 'flex', rowGap: '30px', flexWrap: 'wrap', marginTop:'60px' }}>
              <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', gap: '20px' }}>
                <div style={{ alignSelf: 'center' }}><img src={artistic}></img></div>
                <div><h5 id='sec5_boxtitle'>World’s Best Beans</h5>
                  <p id="sec5_boxdesc">We partner with passionate, quality-focused farmers worldwide to craft our exceptional blends.</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', gap: '20px' }}>
                <div style={{ alignSelf: 'center' }}><img src={cultural}></img></div>
                <div><h5 id='sec5_boxtitle'>Baristas as Artists</h5>
                  <p id="sec5_boxdesc">Our baristas craft consistently outstanding coffee experiences, turning every cup into a work of art</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', gap: '20px' }}>
                <div style={{ alignSelf: 'center' }}><img src={artistic}></img></div>
                <div><h5 id='sec5_boxtitle'>Freshness & Quality</h5>
                  <p id="sec5_boxdesc">We prioritize freshness with in-house roasting and meticulous brewing to craft each cup as a true work of art</p>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12' style={{ display: 'flex', gap: '20px' }}>
                <div style={{ alignSelf: 'center' }}><img src={cultural}></img></div>
                <div><h5 id='sec5_boxtitle'>Symphony of Flavours</h5>
                  <p id="sec5_boxdesc">Explore a world of flavors with our diverse artisan roasts, catering to every coffee lover's taste.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='sec6 section'>
        <div className='container'>
          <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
              <img src={line} style={{ width: '80px' }} />
              <span id="abouttext">THE MOBILE APP</span>
            </div>
          </div>
          <div></div>
        </div>

      </div>

    </div>
  );
}

export default App;
