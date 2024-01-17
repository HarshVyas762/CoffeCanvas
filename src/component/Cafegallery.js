// GalleryComponent.js
import './Cafegallery.css'
import React from 'react';
import Sl1 from '../Sliderimg/Sl1.webp'
import Sl2 from '../Sliderimg/Sl2.webp'
import Sl3 from '../Sliderimg/Sl3.webp'
import Sl4 from '../Sliderimg/Sl4.webp'
import Sl5 from '../Sliderimg/Sl5.webp'
import Sl6 from '../Sliderimg/Sl6.webp'
import Sl7 from '../Sliderimg/Sl7.webp'
import Sl8 from '../Sliderimg/Sl8.webp'
import Sl9 from '../Sliderimg/Sl9.webp'

const GalleryComponent = () => {
  return (
    <div className="container">
      <div className="full-view"></div>
      <div className="preview-list">
        <ul>
          <li>
            <input type="radio" id="tab-1" name="gallery-group" />
            <label htmlFor="tab-1">
              <div className="tab">
                <img
                  src={Sl1}
                  alt="Tab 1"
                />
              </div>
            </label>
            <div className="content">
              <img
                src={Sl1}
                alt="Content 1"
              />
            </div>
          </li>
          <li>
            <input type="radio" id="tab-1" name="gallery-group" />
            <label htmlFor="tab-1">
              <div className="tab">
                <img
                  src={Sl2}
                  alt="Tab 1"
                />
              </div>
            </label>
            <div className="content">
              <img
                src={Sl2}
                alt="Content 1"
              />
            </div>
          </li>
          <li>
            <input type="radio" id="tab-1" name="gallery-group" />
            <label htmlFor="tab-1">
              <div className="tab">
                <img
                  src={Sl3}
                  alt="Tab 1"
                />
              </div>
            </label>
            <div className="content">
              <img
                src={Sl3}
                alt="Content 1"
              />
            </div>
          </li>
          <li>
            <input type="radio" id="tab-1" name="gallery-group" />
            <label htmlFor="tab-1">
              <div className="tab">
                <img
                  src={Sl4}
                  alt="Tab 1"
                />
              </div>
            </label>
            <div className="content">
              <img
                src={Sl4}
                alt="Content 1"
              />
            </div>
          </li>
          <li>
            <input type="radio" id="tab-1" name="gallery-group" />
            <label htmlFor="tab-1">
              <div className="tab">
                <img
                  src={Sl6}
                  alt="Tab 1"
                />
              </div>
            </label>
            <div className="content">
              <img
                src={Sl6}
                alt="Content 1"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GalleryComponent;
