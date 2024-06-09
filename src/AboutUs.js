import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const clients = [
    'UP Police Headquater',
    'UP Tourism',
    'Mukhya lekha Pariksha Adhikari Sehkari Samitian Evan Pachayaten Govt. of UP',
    'UP Jal Nigam',
    'UP Skill Development and mission',
    'Nideshalay Divyangjan Shashaktikaran Vibhag Uttar Pradesh',
    'Registrar, Firms, Societies and Chits, Government of UP',
    'UP Transport Department',
    'UP Electronics Corporation Limited',
    'E-Suvdha (Center of E-governance)',
    'Unique Identification Authority of India (UIDAI)',
    'Ministry of Rural Development (MNREGA)',
    'ICICI Bank Limited Head Quarter Lucknow',
    'Reliance Group',
    'Tata Tele-Services',
    'Bharti Airtel Limited',
    'Examination Cell UP',
    'Ministry of Health (RSBY)',
    'Dabur India',
    'Indian Post',
    'Hindustan Times',
    'Agray Infosolution Pvt. Ltd.',
    'True Power Earthing',
    'Lakhsgaya Infraheight',
    'Crest Infracon Pvt. Ltd.',
    'Swaksh Bharat Abhiyan',
    'MARS International Limited',
    'Beiersdof Global (Nivea)'
    // add more clients here
  ];


  const infrastructure = [
     '24*7 Power Backup',
        '100 seats extendable',
        'PRI Lines',
        'Lease Line',
        'Dialer and Loggers',
        '40 Expert Software Engineers (on flexibilty Platforms)',
        'Onsite Operations Facility Available',
        'Warehouse of 5000 sq. feet for documents',
        'Preservation and Collection',
        'Payment Gateway',
        'Cab Facilities Available'
    // add more infrastructure details here
  ];
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h2>Our Infrastructure</h2>
      <ul>
        {infrastructure.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Our Clients</h2>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </div>
  );
};
export default AboutUs;
