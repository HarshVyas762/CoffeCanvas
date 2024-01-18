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

function JustifiedExample() {
  return (
    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3 fade" style={{ border: 'none', gap: "30px", opacity: '1', overflow: 'hidden' }}>
      <Tab eventKey="profile" className="sec8title" title="All">
        <TabContent>
              <div className='imagediv'>
              <div className='imgcont'><img src={Sl1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl4} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl5} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl6} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl7} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl8} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl9} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
            
        </TabContent>
      </Tab>
      <Tab eventKey="home" className="sec8title" title="Mumbai">
        <TabContent>
        <div className='imagediv'>
              <div className='imgcont'><img src={Sl1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl4} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl5} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl6} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl7} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl8} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl9} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
            
        </TabContent>
      </Tab>
      <Tab eventKey="longer-tab" className="sec8title" title="Delhi">
        <TabContent>
        <div className='imagediv'>
              <div className='imgcont'><img src={Sl1} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl2} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl3} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl4} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl5} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl6} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl7} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl8} class='galleryimg' id="Gimg1" alt=""/></div>
              <div className='imgcont'><img src={Sl9} class='galleryimg' id="Gimg1" alt=""/></div>
              </div>
            
        </TabContent>
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;
