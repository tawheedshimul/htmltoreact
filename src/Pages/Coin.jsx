import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionCollapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqItems = [
  {
    question: 'What is GDPcoin?',
    answer: 'GDPcoin is the native coin of a new decentralized blockchain that was purpose-built to match, manage, and move truck freight in North America. And the only digital currency linked to American consumer spending, making it incorruptible and predictable, with stable pricing and low volatility',
  },
  {
    question: 'How is GDPcoin Used?',
    answer: 'We incentivize trucking companies to accept GDPcoin for services rendered. And consumers to use GDPcoin to purchase goods and services. Without the need of converting it to fiat currency. Consumers pay retailers and retailers, wholesalers, and producers (shipping companies) pay trucking companies.',
  },
  {
    question: 'Who Benefits from GDPcoin?',
    answer: 'We designed GDPcoin to pay the enormous cost to modernize the U.S. trucking industry. And to reward large fleet owners, LHTDs, shipping companies, and cryptocurrency investors for participating and helping to circulate GDPcoin.',
  },
  {
    question: 'Why Choose GDPcoin?',
    answer: 'We use the $700 billion in reoccurring trade between U.S. shipping and trucking companies to drive-up the value of GDPcoin. As a deflationary digital currency, GDPcoin appreciates every time shipping companies use it to pay trucking companies. The appreciation is perpetual and the result, substantial.',
  },
];

function Coin() {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="accordion-sec container" id="accordian-sec" style={{ background: 'black', color: 'orange' }}>
      <div className="">
        <div className="top-heading">
          <h3>FAQ’s</h3>
        </div>
        <Accordion flush>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} eventKey={index.toString()} style={{ background: 'black', borderBottom: 'none', color: 'orange' }}>
              <AccordionButton
                as="h2"
                onClick={() => handleAccordionItemClick(index)}
                className={`accordion-button ${activeItem === index ? 'active spinning' : ''}`}
                style={{ background: 'black', color: 'white' }}
              >
                {item.question}
              </AccordionButton>
              <AccordionCollapse eventKey={index.toString()}>
                <div className="accordion-body">
                  {item.answer}
                </div>
              </AccordionCollapse>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Coin;