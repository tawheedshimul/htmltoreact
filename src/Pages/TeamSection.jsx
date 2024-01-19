import React from 'react';
import person1 from '../assets/person-1.jpg'
import person2 from '../assets/person2.png'
import person3 from '../assets/person3.jpg'

const TeamSection = () => {
  return (
    <section className="our-team-sec" id="our-team">
      <div className="container">
        <div className="top-heading">
          <h3>Our Team</h3>
          <p>Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
        </div>
        <div className="row">
          <TeamMember imgSrc={person1} name="Person Name" jobTitle="Job Title" />
          <TeamMember imgSrc={person2} name="Person Name" jobTitle="Job Title" />
          <TeamMember imgSrc={person3} name="Person Name" jobTitle="Job Title" />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ imgSrc, name, jobTitle }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="team-col">
        <div className="team-img">
          <img alt="team1" src={imgSrc} />
        </div>
        <p>{name}</p>
        <h6><i>{jobTitle}</i></h6>
        <ul className="media-link">
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
