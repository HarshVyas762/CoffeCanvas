import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContent from 'react-bootstrap/TabContent';
import sec8img1 from '../img/sec8img1.png';
import sec8img2 from '../img/sec8img2.png';
import sec8img3 from '../img/sec8img3.png';
import sec8img4 from '../img/sec8img4.png';
import sec8img5 from '../img/sec8img5.png';
import sec8img6 from '../img/sec8img6.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function JustifiedExample() {
  return (
    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3 fade" style={{ border: 'none', gap: "30px", opacity: '1', overflow: 'hidden' }}>
      <Tab eventKey="home" title="All">
        <TabContent>
          <div className='sec8grid'>
            <img src={sec8img1} className='sec8img' alt='' />
            <img src={sec8img2} className='sec8img' alt='' />
            <img src={sec8img3} className='sec8img' alt='' />
            <img src={sec8img4} className='sec8img' alt='' />
            <img src={sec8img5} className='sec8img' alt='' />
            <img src={sec8img6} className='sec8img' alt='' />
            <div></div>
          </div>
        </TabContent>
      </Tab>
      <Tab eventKey="profile" title="Mumbai">
        <TabContent>
          <div className='sec8grid'>
            <img src={sec8img1} className='sec8img' alt='' />
            <img src={sec8img2} className='sec8img' alt='' />
            <img src={sec8img3} className='sec8img' alt='' />
            <div></div>
          </div>
        </TabContent>
      </Tab>
      <Tab eventKey="longer-tab" title="Delhi">
        <TabContent>
          <div className='sec8grid'>
            <img src={sec8img1} className='sec8img' alt='' />
            <img src={sec8img2} className='sec8img' alt='' />
            <img src={sec8img3} className='sec8img' alt='' />
            <img src={sec8img4} className='sec8img' alt='' />
            <div></div>
          </div>
        </TabContent>
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;
