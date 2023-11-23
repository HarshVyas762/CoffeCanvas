import React from 'react';
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
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import line from './img/Rectangle 74.svg';
import dot from './img/dot.png'
import sec7img1 from './img/sec7img1.png'
import sec7img2 from './img/sec7img2.png'
import sec8img1 from './img/sec8img1.png'
import sec8img2 from './img/sec8img2.png'
import sec8img3 from './img/sec8img3.png'
import sec8img4 from './img/sec8img4.png'
import sec8img5 from './img/sec8img5.png'
import sec8img6 from './img/sec8img6.png'
import test1 from './img/test1.png'
import test2 from './img/test2.jpg'
import quotes from './img/quotes.svg'
import soc1 from './img/soc1.png'
import soc2 from './img/soc2.png'
import soc3 from './img/soc3.png'
import soc4 from './img/soc4.png'
import soc5 from './img/soc5.png'
import Sidebar from './Sidebar';
import Sec3 from './component/Sec3';
import Sec4 from './component/Sec4';
import Sec5 from './component/Sec5'
import Sec6 from './component/Sec6';
import Sec7 from './component/Sec7';
import Coffee from './Coffee';

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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link href="https://fonts.cdnfonts.com/css/raleway-5" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charset="utf-8" />
        <style>
          @import url('https://fonts.cdnfonts.com/css/red-hat-display');
        </style>

      </Helmet>

      <div className='sec1'>
        <div className='container nav'>
          <Sidebar />
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

      <Sec3 />

      {/* <div className='sec3'>
        <div className='container'>
          <div style={{ display: 'flex', flexWrap: 'wrap', rowGap: '60px', placeContent: 'space-between', justifyContent: 'center', alignSelf: 'center', padding: '100px 0' }}>
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

      </div> */}

      <Sec4 />

      {/* <div className='sec4 section'>
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', rowGap: '60px' }}>
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
            <img src={sec3img} id="sec3img" />
          </div>
        </div>
      </div> */}

      <Sec5 />

      {/* <div className='sec5 section'>
        <div style={{ display: 'flex', placeContent: 'space-between', rowGap: '60px', flexWrap: 'wrap' }}>
          <div className='col-lg-5 col-md-5 col-sm-12' id="sec5col1">
            <img src={sec5img} id="sec5img" />
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '28px', paddingRight: '0px' }}>
            <p id='sec4_title'>Artistry in Every Cup</p>
            <p id='sec4_desc'>At The Coffee Canvas, we're not just making coffee; we're painting a masterpiece. Our beans are carefully sourced from around the globe, each telling its own story through its unique flavors. Like a skilled artist, our baristas use their expertise to create a symphony of flavors in every cup.</p>
            <div style={{ display: 'flex', rowGap: '50px', flexWrap: 'wrap', marginTop: '40px' }}>
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
      </div> */}

      <Sec6 />

      {/* <div className='sec6 section'>
        <div className='container' style={{ display: 'flex', flexWrap: 'wrap', placeContent: 'space-around', rowGap: '50px' }}>
          <div className='col-lg-7 col-md-7 col-sm-12' style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
              <img src={line} style={{ width: '80px' }} />
              <span id="abouttext">THE MOBILE APP</span>
            </div>
            <p id='sec4_title'>Never Run Out of Your Favorite Blend</p>
            <p id='sec4_desc'>Don't miss out on the opportunity to elevate your daily coffee ritual. Download the Coffee Subscription App today and savor the convenience, the flavors, and the artistry that The Coffee Canvas has to offer. It's coffee, your way, and it's just a tap away.</p>
            <button id='subscribe'>Subscribe</button>
          </div>
          <div className='col-lg-3 col-md-5 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src={sec6img} style={{ width: '100%' }} />
            <div style={{ display: 'flex', gap: '30px' }}>
              <img src={dot} id="dot" />
              <p id="sec6sweet">Sweet Black Coffee</p>
            </div>
          </div>
        </div>
      </div> */}

      <Sec7 />

      {/* <div className='sec7 section'>
        <div className='container'>
          <div className='col-lg-7 col-md-12 col-sm-12 sec7col1' style={{ display: 'flex', paddingLeft: '0px' }}>
            <div className='col-lg-6 col-md-6' id='sec7subdiv1' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img src={sec7img1} id="sec7img1" alt='' />
              <div className='dotdiv'>
                <img src={dot} id="dot" alt='' />
                <p id="sec6sweet">Sweet Black Coffee</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6' id='sec7subdiv2' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <img src={sec7img2} id="sec7img2" alt='' />
              <div className='dotdiv'>
                <img src={dot} id="dot" alt='' />
                <p id="sec6sweet">Mochaccino Cream Coffee</p>
              </div>
            </div>

          </div>
          <div className='col-lg-4 col-md-12 col-sm-12' style={{ display: 'flex', flexDirection: 'column', gap: '30px', paddingTop: '60px' }}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'start' }}>
              <img src={line} style={{ width: '80px' }} alt='' />
              <span id="abouttext">BEST MENU</span>
            </div>
            <p id='sec4_title'>Flavorful Artistry to Satisfy Your Senses</p>
            <p id='sec4_desc'>Our menu is a canvas of flavor, featuring handcrafted coffees, teas, cold beverages, and delectable pastries. Whether it's breakfast, a midday pick-me-up, or a leisurely afternoon, we have delights for every palate.</p>
            <div style={{ display: 'flex', placeContent: 'space-between' }}>
              <button id="more_menu">More Menu</button>
              <p id="sec7check" style={{ alignSelf: 'center', fontFamily: 'Popins', fontWeight: '100', color: '#49545A' }}>Check your survey <i class="arrow up"></i></p>
            </div>
          </div>
        </div>
      </div> */}

      <div className='sec8 section' style={{ padding: '100px 0px' }}>
        <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          <span id="abouttext">Community & Creativity</span>
          <p id='sec4_title'>Where Art  Meets Coffee Culture</p>
          <p id='sec4_desc'>The Coffee Canvas is more than a coffee house; it's a vibrant gallery of creativity and connection. Open mic nights and collaborative events transform our space into a haven for inspiration. Here, the scent of fresh coffee mingles with the aroma of artistic expression, making each visit a journey through art and flavour.</p>
          <div className='col-lg-2 col-md-2 col-sm-12' style={{ display: 'flex', placeContent: 'space-between', fontSize: '20px' }}>
            <p>All</p>
            <p>Mumbai</p>
            <p>Delhi</p>
          </div>
          <div className='sec8grid' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
            <img src={sec8img1} style={{ width: '300px' }} alt='' />

            <img src={sec8img2} style={{ width: '300px' }} alt='' />

            <img src={sec8img3} style={{ width: '300px' }} alt='' />

            <img src={sec8img4} style={{ width: '300px' }} alt='' />

            <img src={sec8img5} style={{ width: '300px' }} alt='' />

            <img src={sec8img6} style={{ width: '300px' }} alt='' />

            <div>
            </div>
          </div>
        </div>
      </div>

      <div className='sec9'>
        <div className='container'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <p id="sec4_title" style={{ textAlign: 'left' }}>Where Art  Meets Coffee Culture</p>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='container'>
                  <div class="testbox1">
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', gap: '30px' }}>
                        <img src={quotes} id="quotes" alt='' />
                        <p id="testdesc">The Coffee Canvas serves coffee that's like a work of art, and the vibe is great!</p>
                        <div style={{ display: '-webkit-box', gap: '20px' }}>
                          <img src={line} alt='' />
                          <p id="testname"><span id="name"><b>Asha</b></span>, Coffee Fan</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 sec9col2'>
                      <img src={test1} id="test1" alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className='container'>
                  <div class="testbox1">
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', gap: '30px' }}>
                        <img src={quotes} id='quotes' alt='' />
                        <p id="testdesc">Top-tier coffee, cozy vibes. A hidden gem for those seeking quality brews and a warm atmosphere</p>
                        <div style={{ display: '-webkit-box', gap: '20px' }}>
                          <img src={line} alt='' />
                          <p id="testname"><span id="name"><b>James</b></span>, Coffee Connoisseur</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 sec9col2'>
                      <img src={test2} id="test1" alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className='container'>
                  <div class="testbox1">
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', gap: '30px' }}>
                        <img src={quotes} id="quotes" alt='' />
                        <p id="testdesc">Favorite coffee spot! Consistent excellence in every cup, coupled with a laid-back ambiance. A must-try for coffee lovers.</p>
                        <div style={{ display: '-webkit-box', gap: '20px' }}>
                          <img src={line} alt='' />
                          <p id="testname"><span id="name"><b>Emma</b></span>, Espresso Aficionado</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 sec9col2'>
                      <img src={img3} id="test1" alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='container'>
          <div style={{ display: 'flex', alignItems: 'flex-start',placeContent:'space-between',flexWrap:'wrap' }}>
            <div className='col-lg-5 col-md-5 col-sm-12 div1col1' style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
              <p id="footer_title">Visit Us</p>
              <p id="footer_desc">Where every visit is a masterpiece. For coffee enthusiasts and curious souls alike, our team is here to guide you through a world of flavour and design.</p>
              <span id="footer_desc">Hours of Operation:
                <ul>
                  <br></br>
                  <li>Monday to Friday: 7:00 AM - 8:00 PM</li>
                  <br></br>
                  <li>Saturday and Sunday: 8:00 AM - 7:00 PM</li>
                </ul>
              </span>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12' style={{textAlign:'-webkit-center',alignSelf:'center'}}>
              <Coffee />
            </div>
          </div>
          <div className='div2'>
            <div className='col-lg-4 col-md-12 col-sm-12 div2col1' style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h5 id='subtitle'>TheCoffeeCanvas</h5>
              <p className='subtext'>High level experience in web design and development knowledge, producing quality work.</p>
            </div>
            <div className='col-lg-2  col-md-4 col-sm-12 div2col2'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{fontSize:'18px'}}><b>Use Cases</b></p>
                <p className='subtext'>Web-designers</p>
                <p className='subtext'>Marketers</p>
                <p className='subtext'>Small Business</p>
                <p className='subtext'>Website Builder</p>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12 div2col2'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{fontSize:'18px'}}><b>Company</b></p>
                <p className='subtext'>About Us</p>
                <p className='subtext'>Careers</p>
                <p className='subtext'>FAQs</p>
                <p className='subtext'>Terms</p>
                <p className='subtext'>Contact Us</p>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12 div2col2'>
              <p>Follow us</p>
              <br></br>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <img src={soc1} className='socimg' alt='' />
                <img src={soc2} className='socimg' alt='' />
                <img src={soc3} className='socimg' alt='' />
                <img src={soc4} className='socimg' alt='' />
                <img src={soc5} className='socimg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
