import React from "react";
import "../styles/team.css";
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    description:
      'John is a visionary leader with over 15 years of experience in creative advertising. He spearheads the strategic direction of the company, ensuring innovation and excellence.',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxlYWRlcnxlbnwwfHx8fDE2ODU2MzI1Nzg&ixlib=rb-4.0.3&q=80&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'johndoe@bowbonish.com',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director',
    description:
      'Jane is known for her strategic thinking and impeccable marketing campaigns that deliver tangible results. She has a knack for capturing audience attention.',
      photo: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHx3b21hbnxlbnwwfHx8fDE2ODU2MzI1Nzg&ixlib=rb-4.0.3&q=80&w=400',
      linkedin: '#',
    twitter: '#',
    email: 'janesmith@bowbonish.com',
  },
  {
    name: 'Michael Brown',
    role: 'Operations Manager',
    description:
      'Michael ensures smooth day-to-day operations. With his strong organizational skills, he keeps the wheels turning behind the scenes.',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxlYWRlcnxlbnwwfHx8fDE2ODU2MzI1Nzg&ixlib=rb-4.0.3&q=80&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'michaelbrown@bowbonish.com',
  },
  {
    name: 'Lisa White',
    role: 'Creative Director',
    description:
      'Lisa is a creative powerhouse who turns client visions into reality. Her designs are both impactful and aesthetically pleasing.',
    photo: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHx3b21hbnxlbnwwfHx8fDE2ODU2MzI1Nzg&ixlib=rb-4.0.3&q=80&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'lisawhite@bowbonish.com',
  },
];

const TeamPage = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <p className="team-introduction">
        Our dedicated professionals bring passion, creativity, and expertise to deliver innovative branding solutions that make a difference.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
            <div className="team-socials">
              <a href={member.linkedin} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={member.twitter} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href={`mailto:${member.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
