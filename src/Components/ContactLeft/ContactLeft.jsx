import React from 'react';
import './ContactLeft.css';
import logo from './../../assets/Logo.png';
import { Typography } from 'antd';

const { Title } = Typography;

function ContactLeft() {
  return (
    <div className='contactLeftMainDiv'>
      <img src={logo} alt="Logo" className='imageClass' />
      <div className='textItemsClass'>
      <Title className='headingClass'>Heading One</Title>
      <div className='underlineClass'></div>
      <Title className='textClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</Title>
      <Title className='textClass' level={5}>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</Title>
      </div>
    </div>
  )
}
export default ContactLeft;


