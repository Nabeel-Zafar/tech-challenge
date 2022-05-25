import React from 'react';
import ContactLeft from './../Components/ContactLeft/ContactLeft';
import ContactRight from './../Components/ContactRight/ContactRight';
import { Row, Col } from 'antd';

function Contact() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <ContactLeft />
        </Col>
        <Col span={12}>
          <ContactRight />
        </Col>
      </Row>
    </div>
  )
}
export default Contact;


