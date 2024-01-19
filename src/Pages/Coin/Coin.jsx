import React from 'react'
import '../RoadmapSection/RoadmapSection.css'

import Accordion from 'react-bootstrap/Accordion';

function Coin() {
    return (
        <Accordion class="accordian-sec" id="accordian-sec">
            
            <div class="container">
                <div class="top-heading">
                    <h3>FAQ’s</h3>
                </div>
                <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is GDPcoin?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">GDPcoin is the native coin of a new decentralized blockchain that was
                                purpose-built to match, manage, and move truck freight in North America. And the only digital currency
                                linked to American consumer spending, making it incorruptible and predictable, with stable pricing and low
                                volatility</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                How is GDPcoin Used?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">We incentivize trucking companies to accept GDPcoin for services rendered. And
                                consumers to use GDPcoin to purchase goods and services. Without the need of converting it to fiat
                                currency. Consumers pay retailers and retailers, wholesalers, and producers (shipping companies) pay
                                trucking companies.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Who Benefits from GDPcoin?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">We designed GDPcoin to pay the enormous cost to modernize the U.S. trucking
                                industry. And to reward large fleet owners, LHTDs, shipping companies, and cryptocurrency investors for
                                participating and helping to circulate GDPcoin.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Why Choose GDPcoin?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">We use the $700 billion in reoccurring trade between U.S. shipping and trucking
                                companies to drive-up the value of GDPcoin. As a deflationary digital currency, GDPcoin appreciates every
                                time shipping companies use it to pay trucking companies. The appreciation is perpetual and the result,
                                substantial.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>
    )
}

export default Coin;