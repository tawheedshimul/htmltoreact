import React from 'react';
import image2 from '../assets/image2.png';
import videocol from '../assets/image1.png';

const CheapestSection = () => {
  return (
    <section class="cheapest-sec" id="cheapest-sec">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-5">
                <div class="cheapest-left-side-col ">
                    <h3>Faster, cheaper, <br/>more efficient</h3>
                    <p>Blockchain technology is a new class of intelligent computing. An ingenious system that connects the digital world to the real world by performing important tasks that only humans can do.</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 mb-5">
                <div class="cheapest-right-image new-right">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
        <div class="row">
               <div class="col-md-6 col-sm-12 mb-5">
                <div class="cheapest-right-image">
                   <video width="361" height="525" controls poster="./images/poster.png">
                        <video src={videocol}></video>
                   </video>

                </div>
            </div>
            <div class="col-md-6 col-sm-12 mb-5">
                <div class="cheapest-left-side-col ">
                    <h3>Made for the fragmented and chaotic trucking industry</h3>
                    <p>The trucking industry, pivotal to 40% of the global economy, is grappling with a crisis of driver shortages, high turnover rates, and order delays, all exacerbated by the pandemic...</p>
                    <a href="#" class="readbtn">Read More</a>
                </div>
            </div>
         
        </div>
    </div>
</section>
  );
};

export default CheapestSection;
