import React from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import * as THREE from 'three';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, Image as ImageImpl } from '@react-three/drei';
import { ScrollControls, Scroll, useScroll } from './ScrollControls.tsx';
import { Environment } from '@react-three/drei';
import { Frames } from './component/Frames';
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
import test1 from './img/test1.png'
import test2 from './img/test2.jpg'
import quotes from './img/quotes.svg'
import soc1 from './img/soc1.svg'
import soc2 from './img/soc2.svg'
import soc3 from './img/soc3.svg'
import soc4 from './img/soc4.png'
import soc5 from './img/soc5.png'
import Sidebar from './Sidebar';
import Sec3 from './component/Sec3';
import Sec4 from './component/Sec4';
import Sec5 from './component/Sec5'
import Sec6 from './component/Sec6';
import Sec7 from './component/Sec7';
import Sec8 from './component/Sec8';
import Load from './Load';
import logo from './img/coffelogo.png'
import footerlogo from './img/coffeefooterlogo.png'
import { Link as ScrollLink, Element } from "react-scroll";
import { Text, MeshReflectorMaterial } from "@react-three/drei"; // Import MeshReflectorMaterial
import image1 from "./img/Frame1.jpg";
import image2 from "./img/Frame2.png";
import image3 from "./img/Frame3.png";
import image4 from "./img/Frame4.jpg";
import image5 from "./img/Frame5.png";
import image6 from "./img/Frame6.webp";
import image7 from "./img/Frame7.webp";
import image8 from "./img/Frame8.webp";
import image9 from "./img/Frame9.webp";
import Sl1 from './Sliderimg/Sl1.webp'
import Sl2 from './Sliderimg/Sl2.webp'
import Sl3 from './Sliderimg/Sl3.webp'
import Sl4 from './Sliderimg/Sl4.webp'
import Sl5 from './Sliderimg/Sl5.webp'
import Sl6 from './Sliderimg/Sl6.webp'
import Sl7 from './Sliderimg/Sl7.webp'
import Sl8 from './Sliderimg/Sl8.webp'
import Sl9 from './Sliderimg/Sl9.webp'

const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: image1 },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: image2 },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: image3 },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: image4,
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: image5,
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: image6,
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image7,
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image8,
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: image9,
  },
];



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
      <Page position={[width * 1, 0, 0]} urls={[Sl1, Sl2, Sl3]} />
      <Page position={[width * 0, 0, 0]} urls={[Sl4, Sl5, Sl6]} />
      <Page position={[width * 1, 0, 0]} urls={[Sl7, Sl8, Sl9]} />
      <Page position={[width * 2, 0, 0]} urls={[Sl1, Sl2, Sl3]} />
      <Page position={[width * 3, 0, 0]} urls={[Sl4, Sl5, Sl6]} />
      <Page position={[width * 4, 0, 0]} urls={[Sl7, Sl8, Sl9]} />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const scrollToTop = () => {
    // Scroll to the top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">

      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        <link href="https://fonts.cdnfonts.com/css/rancho" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link href="https://fonts.cdnfonts.com/css/raleway-5" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></link>
        <meta charset="utf-8" />
        <style>
          @import url('https://fonts.cdnfonts.com/css/red-hat-display');
        </style>

      </Helmet>

      {loading ? (
        <div className="loading">
          <Load />
        </div>
      ) : (
        <>

          <button
            id="topbutton"
            style={{ opacity: isVisible ? 1 : 0 }}
            onClick={scrollToTop} />

          <div className='sec1'>
            <div className='container nav'>
              <Sidebar />
              {/* <div className='col-lg-3' id="logo"><img src={logo} /></div> */}
              <div className='col-lg-8 menu-link' style={{ gap: '50px', alignItems: 'center', color: 'white', placeContent: 'center' }}>
                <p> <ScrollLink
                  to="sec4"
                  class="menu-item1"
                  smooth={true}
                  duration={500}
                  offset={-50}>
                  About Us
                </ScrollLink></p>
                <p> <ScrollLink
                  to="sec6"
                  class="menu-item2"
                  smooth={true}
                  duration={500}
                  offset={-150}>
                  Our App
                </ScrollLink></p>
                <div id="logo"><img src={logo} /></div>
                <p> <ScrollLink
                  to="sec7"
                  class="menu-item3"
                  smooth={true}
                  duration={500}
                  offset={-70}>
                  Menu
                </ScrollLink></p>
                <p> <ScrollLink
                  to="sec8"
                  class="menu-item4"
                  smooth={true}
                  duration={500}
                  offset={0}>
                  Community
                </ScrollLink></p>
              </div>
              {/* <div className='col-lg-2 menu-btn'>
                <button id="headbtn">Contact</button>
              </div> */}
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
                    <h1 style={{ position: 'absolute', top: '40vh', left: '-75vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black', fontFamily: 'Raleway' }}>Coffee</h1>
                    <h1 style={{ position: 'absolute', top: '40vh', left: '25vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black' }}>Canvas</h1>
                    <h1 style={{ position: 'absolute', top: '40vh', left: '125vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black' }}>Coffee</h1>
                    <h1 style={{ position: 'absolute', top: '40vh', left: '225vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black' }}>Canvas</h1>
                    <h1 style={{ position: 'absolute', top: '40vh', left: '325vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black' }}>Coffee</h1>
                    <h1 style={{ position: 'absolute', top: '40vh', left: '425vw', fontSize: '5rem', color: 'black', textShadow: '6px 9px 5px black' }}>Canvas</h1>
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


          <div className='sec8 section'>
            <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
              <span id="abouttext">Community & Creativity</span>
              <p id='sec4_title'>Where Art &nbsp; Meets Coffee Culture</p>
              <p id='sec4_desc' style={{ textAlign: 'center' }}>The Coffee Canvas is more than a coffee house; it's a vibrant gallery of creativity and connection. Open mic nights and collaborative events transform our space into a haven for inspiration. Here, the scent of fresh coffee mingles with the aroma of artistic expression, making each visit a journey through art and flavour.</p>
              {/* <div className='col-lg-2 col-md-2 col-sm-12' style={{ display: 'flex', placeContent: 'space-between', fontSize: '20px', padding: '0px' }}>
                <p>All</p>
                <p>Mumbai</p>
                <p>Delhi</p>

              </div> */}
              <Sec8 />
              {/* <div className='sec8grid'>
                <img src={sec8img1} className='sec8img' alt='' />

                <img src={sec8img2} className='sec8img' alt='' />

                <img src={sec8img3} className='sec8img' alt='' />

                <img src={sec8img4} className='sec8img' alt='' />

                <img src={sec8img5} className='sec8img' alt='' />

                <img src={sec8img6} className='sec8img' alt='' />

              </div> */}
            </div>
          </div>

          {/* <div className='gallery'>
            <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }} style={{ width: "100%", height: '600px' }}>
              <color attach="background" args={["#3f2305"]} />
              <fog attach="fog" args={["#191920", 0, 15]} />
              <group position={[0, -0.5, 0]}>
                <Frames images={images} />
                <mesh rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[50, 50]} />
                  <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={80}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#050505"
                    metalness={0.5}
                  />
                </mesh>
              </group>
              <Environment preset="city" />
            </Canvas>
          </div> */}

          {/* <div className='container'>
            <div className='section'>
              <div className='imagediv'>
              <div className='imgcont'><img src={Sl1} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl2} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl3} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl4} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl5} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl6} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl7} class='galleryimg' id="Gimg1" /></div>
              <div className='imgcont'><img src={Sl8} class='galleryimg' id="Gimg1" /></div>
              </div>
            </div>
          </div> */}

          <div className='sec9'>
            <div className='container'>
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <p id="sec4_title" style={{ textAlign: 'left' }}>What They Say:</p>
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
                            <p id='sec9_nuumdiv'><span className='sec9_num1'>01</span><span className='sec9_num2'>/03</span></p>
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
                            <p id='sec9_nuumdiv'><span className='sec9_num1'>02</span><span className='sec9_num2'>/03</span></p>
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
                            <img src={quotes} id="quotes" alt='' />
                            <p id="testdesc">Favorite coffee spot! Consistent excellence in every cup, coupled with a laid-back ambiance. A must-try for coffee lovers.</p>
                            <div style={{ display: '-webkit-box', gap: '20px' }}>
                              <img src={line} alt='' />
                              <p id="testname"><span id="name"><b>Emma</b></span>, Espresso Aficionado</p>
                            </div>
                            <p id='sec9_nuumdiv'><span className='sec9_num1'>03</span><span className='sec9_num2'>/03</span></p>
                          </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 sec9col2'>
                          <img src={test1} id="test1" alt='' />
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
              <div style={{ display: 'flex', alignItems: 'flex-start', placeContent: 'space-between', flexWrap: 'wrap' }}>
                <div className='col-lg-7 col-md-7 col-sm-12 div1col1' style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                  <p id="footer_title">Visit Us</p>
                  <p id="footer_desc">Where every visit is a masterpiece. For coffee enthusiasts and curious souls alike, our team is here to guide you through a world of flavour and design.</p>
                  <span id="footer_desc">Hours of Operation:
                    <ul style={{ display: 'flex', flexDirection: 'column' }}>
                      <li>Monday to Friday: 7:00 AM - 8:00 PM</li>
                      <li>Saturday and Sunday: 8:00 AM - 7:00 PM</li>
                    </ul>
                  </span>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 coffeecol' style={{ textAlign: '-webkit-center', alignSelf: 'center' }}>
                  <div style={{ filter: 'drop-shadow(2px 2px 2px #000)' }}> <img id='footlogo' src={footerlogo} /></div>
                  {/* <Coffee /> */}
                </div>
              </div>
              <div className='div2'>
                <div className='col-lg-4 col-md-12 col-sm-12 div2col1' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h5 id='subtitle'>TheCoffeeCanvas</h5>
                  <p className='subtext'>Where Every Sip is a Work of Art</p>
                </div>
                <div className='col-lg-2  col-md-4 col-sm-12 div2col2'>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p style={{ fontSize: '18px', fontFamily: 'Raleway' }}><b>the Coffee Canvas</b></p>
                    <p className='footmenu' style={{ fontFamily: 'Raleway', fontSize: '14px' }}>About us</p>
                    <p className='footmenu' style={{ fontFamily: 'Raleway', fontSize: '14px' }}>Our App</p>
                    <p className='footmenu' style={{ fontFamily: 'Raleway', fontSize: '14px' }}>Menu</p>
                    <p className='footmenu' style={{ fontFamily: 'Raleway', fontSize: '14px' }}>Community</p>
                  </div>
                </div>
                {/* <div className='col-lg-2 col-md-4 col-sm-12 div2col2'>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p style={{ fontSize: '18px' }}><b>Company</b></p>
                  </div>
                </div> */}


                <div className='col-lg-2 col-md-4 col-sm-12 div2col2'>
                  <p style={{ fontFamily: 'Raleway', fontSize: '18px', fontWeight: 'bolder' }}>Follow us</p>
                  <br></br>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <img src={soc1} className='socimg' alt='' />
                    <img src={soc2} className='socimg' alt='' />
                    <img src={soc3} className='socimg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
          <Loader />
        </div> */}

        </>)}
    </div>
  );
}

export default App;
