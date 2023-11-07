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
      <Page position={[width * 4, 0, 0]} urls={[img4,img5,img6]} />
    </>
  )
}


function App() {

  return (
    <div className="App" >
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charset="utf-8" />

        <style>
                            @import url('https://fonts.cdnfonts.com/css/red-hat-display');
</style>
           
      </Helmet>
      <div className='sec1'>
      <div className='container' style={{display:'flex',placeContent:'space-between',padding:'40px 0',placeSelf:'center',textAlign:'center'}}>
        <div className='col-lg-3' id="logo">TheCoffeeCanvas</div>
        <div className='col-lg-5 menu-link' style={{placeContent:'space-between',alignItems:'center',color:'white'}}>
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
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} style={{height:'700px'}}>
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '40vh', left: '-75vw', fontSize:'5rem' }}>Coffe</h1>
            <h1 style={{ position: 'absolute', top: '40vh', left: '25vw', fontSize:'5rem' }}>Canvas</h1>
            <h1 style={{ position: 'absolute', top: '40vh', left: '125vw', fontSize:'5rem' }}>Coffee</h1>
            <h1 style={{ position: 'absolute', top: '40vh', left: '225vw', fontSize:'5rem' }}>Canvas</h1>
            <h1 style={{ position: 'absolute', top: '40vh', left: '325vw', fontSize:'5rem' }}>Coffee</h1>
            <h1 style={{ position: 'absolute', top: '40vh', left: '425vw', fontSize:'5rem' }}>Canvas</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
    </div>

    <div className='sec3'>
      <div className='container'>
      <div style={{display:'flex', flexWrap:'wrap', placeContent:'space-between',justifyContent:'center', alignSelf:'center',padding:'100px 0' }}>
          <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
            <img src={coffeecup} className='sec2img'/>
            <h3 className='sec2_title'>Awesome Aroma</h3>
            <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
          </div>
 
          <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
          <img src={badge} className='sec2img'/>
            <h3 className='sec2_title'>High Quality</h3>
            <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
          </div>
 
          <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
          <img src={beans} className='sec2img'/>
            <h3 className='sec2_title'>Pure Grades</h3>
            <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
          </div>
 
          <div className='col-lg-3 col-md-5 col-sm-12 sec2box'>
          <img src={brewd} className='sec2img'/>
            <h3 className='sec2_title'>Proper Roasting</h3>
            <p className='sec2_desc'>The coffee is brewed by first roasting the green coffee beans</p>
          </div>
      </div>
      </div>

    </div>
    </div>
  );
}

export default App;
