import React from 'react';
import './ContactRight.css';
import { Button, Space } from 'antd';
import { Typography } from 'antd';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom'      


const { Title } = Typography;
const { TextArea } = Input;

const url ="https://api.mwi.dev/";

function ContactRight() {

  const navigate = useNavigate()

  return (
    <div>
      <div className='contactRightMainDiv'>
        <Button type="primary" className='btnClass' onClick={() => navigate("/")}>Home</Button>
      </div>
      <div className='contentDiv'>
      <Title className='headingTwoClass' level={2}>Heading Two</Title>
      
      <Space size={50} className='inputFieldsClass' direction="horizaontal">
        <Input size="large" placeholder="First Name" />
        <Input size="large" placeholder="Last Name" />
      </Space>

      <Space size={50} className='inputFieldsClass' direction="horizaontal">
        <Input size="large" placeholder="Title" />
        <Input size="large" placeholder="Email" />
      </Space>
      
      <TextArea  className='textAreaClass' rows={4} placeholder="Message" />
      <div className='submitBtnDiv'>
        <Button type="primary" className='btnClass2' >Submit</Button>
      </div>
      
      </div>
    </div>

  )
}
export default ContactRight;


// style={{ background: "red", borderColor: "yellow" }} 