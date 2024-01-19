import React from 'react';
import demoImage1 from '../assets/logo-img1.png';
import demoImage2 from '../assets/logo-img2.png';
import demoImage3 from '../assets/logo-img3.png';
import demoImage4 from '../assets/logo-img4.png';
import demoImage5 from '../assets/logo-img5.png';
import demoImage6 from '../assets/logo-img6.png';
import bg from '../assets/bg-new.png';

const WorkingLeadersSection = () => {
  const demoImages = [demoImage1, demoImage2, demoImage3, demoImage4, demoImage5, demoImage6];

  return (
    <section
      className="working-leaders"
      id="industry-leader"
      style={{ background: `url(${bg})` }}
    >
      <div className="mx-3">
        <div className="top-heading text-center">
          <h4>Working with industry leaders</h4>
        </div>
        <div className="row">
          {demoImages.map((image, index) => (
            <div key={index} className="col-md-2 col-sm-6 col-12">
              <div className="working-logo">
                <img src={image} alt={`Demo Logo ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingLeadersSection;
