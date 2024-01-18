import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from 'react-bootstrap/TabContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Sl1 from '../Sliderimg/Sl1.webp'
import Sl2 from '../Sliderimg/Sl2.webp'
import Sl3 from '../Sliderimg/Sl3.webp'
import Sl4 from '../Sliderimg/Sl4.webp'
import Sl5 from '../Sliderimg/Sl5.webp'
import Sl6 from '../Sliderimg/Sl6.webp'
import Sl7 from '../Sliderimg/Sl7.webp'
import Sl8 from '../Sliderimg/Sl8.webp'
import Sl9 from '../Sliderimg/Sl9.webp'
import m1 from '../img/m1.webp'
import m2 from '../img/m2.webp'
import m3 from '../img/m3.webp'
import m4 from '../img/m4.webp'
import m5 from '../img/m5.webp'
import m6 from '../img/m6.webp'
import d1 from '../img/d1.webp'
import d2 from '../img/d2.webp'
import d3 from '../img/d3.webp'
import d4 from '../img/d4.webp'
import k1 from '../img/k1.webp'
import k2 from '../img/k2.webp'
import k3 from '../img/k3.webp'
import k4 from '../img/k4.webp'
import k5 from '../img/k5.webp'
import s1 from '../img/s1.webp'
import s2 from '../img/s2.webp'
import s3 from '../img/s3.webp'
import s4 from '../img/s4.webp'
import s5 from '../img/s5.webp'
import s6 from '../img/s6.webp'
import s7 from '../img/s7.webp'
import s8 from '../img/s8.webp'
import s9 from '../img/s9.webp'

function JustifiedExample() {
  return (
    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3 fade" style={{ border: 'none', gap: "30px", opacity: '1', overflow: 'hidden' }}>
      <Tab eventKey="home" className="sec8title" title="Mumbai">
        <TabContent>
        <div className='imagediv'>
              <div className='imgcont'><img src={m1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={m2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={m3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={m4} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s2} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
        </TabContent>
      </Tab>
      <Tab eventKey="longer-tab" className="sec8title" title="Delhi">
        <TabContent>
        <div className='imagediv'>
              <div className='imgcont'><img src={d1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={d2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s4} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
            
        </TabContent>
      </Tab>
      <Tab eventKey="profile" className="sec8title" title="Bangalore">
        <TabContent>
              <div className='imagediv'>
              <div className='imgcont'><img src={s5} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={d3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={m5} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={d4} class='galleryimg' id="Gimg1" alt=""/></div>             
              <div className='imgcont'><img src={s6} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={m6} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s7} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>  
        </TabContent>
      </Tab>
      <Tab eventKey="longer-tab2" className="sec8title" title="Kolkata">
        <TabContent>
        <div className='imagediv'>
              <div className='imgcont'><img src={k1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={s8} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={k3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={k4} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={k2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={k5} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
            
        </TabContent>
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;
