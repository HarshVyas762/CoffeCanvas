import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import emailjs from '@emailjs/browser';


function Popup() {
  const [show, setShow] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tx8tdrh', 'template_qjpx87u', form.current, '4RDdZqPIfVfgn3cN8')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true); 
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <button id="more_menu" onClick={handleShow}>Franchise &#8594;</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'#3F2305',color:'white',padding:'30px'}}>
          <Modal.Title style={{fontSize:'30px'}}>We Would Love to Hear it from You !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <div style={{ display: 'flex', placeContent: 'space-between', flexWrap: 'wrap', rowGap: '30px' }}>
              <div className='form_field col-lg-5 col-md-5 col-sm-12'>
                {/* <label>First name</label> */}
                <input type="text" placeholder='First name' className='form_input' name="fname" />
              </div>
              <div className='form_field col-lg-6 col-md-6 col-sm-12'>
                {/* <label>Last name</label> */}
                <input type="text" placeholder='Last name' className='form_input' name="lname" />
              </div>
            </div>
            <div className='form_field'>
              {/* <label>Email</label> */}
              <input type="Email" placeholder='Email' className='form_input' name="email" />
            </div>
            <div className='form_field'>
              {/* <label>Phone Number</label> */}
              <input type="Number" placeholder='Number' className='form_input' name="num" />
            </div>
            <div className='form_field'>
              {/* <label>Message</label> */}
              <textarea type="text" placeholder='Leave us a message...' className='form_input' name="message" id="message" />
            </div>
            <div>
              <input style={{marginLeft:'15px'}} id='subscribe' type="submit" value="Submit" />
            </div>
            {isSubmitted && <p style={{marginLeft:'15px',color:'#3F2305'}}>Thank you for your message! We will get back to you soon.</p>}
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Popup;