import React from 'react';
import './ContactLeft.css';
import logo from './../../assets/Logo.png';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

function ContactLeft() {
  const navigate = useNavigate()
  return (
    <div className='contactLeftMainDiv'>
      <img src={logo} alt="Logo" className='imageClass1' />
      <Row className="headerClassRow">
                <Col span={12} className='homeBtnClass' style={{display:'inline-block'}}>
                    <div className='contactLeftMainDiv2'>
                        <img src={logo} alt="Logo" className='imageClass' />
                    </div>
                </Col>
                <Col span={12} style={{display:'inline-block'}}>
                    <div className='contactRightMainDiv2'>
                        <Button type="primary" className='btnClass' onClick={() => navigate("/")}>Home</Button>
                    </div>
                </Col>
      </Row>
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


