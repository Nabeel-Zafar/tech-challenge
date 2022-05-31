import React, { useState,useEffect  } from 'react';
import { Row, Col } from 'antd';
import Rabbit from './../../assets/Rabbit.png';
import Shield from './../../assets/Shield.png';
import './HomeContent.css'
import { List } from 'antd';
import { Typography } from 'antd';
import { Button, Modal } from 'antd';

const { Title } = Typography;

function HomeContent() {
    const array1 = [
         {title:'Matt Johnson'}, 
         {title:'Matt Johnson'}, 
         {title:'Bart Paden'}, 
         {title:'Ryan Doss'}, 
         {title:'Jared Malcolm'},
    ]
    const array2 = [
        {title:'Matt Johnson'}, 
        {title:'Bart Paden'}, 
        {title:'Bart Paden'}, 
        {title:'Jordan Heigle'}, 
        {title:'Jordan Heigle'}, 
        {title:'Tyler Viles'}]
    
    let newArray = [];
    
    // newArray = [...new Set([...array1, ...array2])];
    

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(()=>{
        console.log('mergeArray()',newArray)
     })

    return (
        <div className='HomeContentClass'>

            <Row className='rowClass'>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Shield} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={80} height={80} />
                        <div style={{ textAlign: 'left' }} ><Title className='headingClassBox' level={2}>Heading Two</Title></div>
                        <Title className='BoxTextClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore</Title>
                        <Button type="primary" className='btnClass2' onClick={showModal}>Learn More</Button>
                    </div>
                </Col>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Rabbit} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={100} height={80} />
                        <div style={{ textAlign: 'left' }} ><Title className='headingClassBox' level={2}>Heading Two</Title></div>
                        <Title className='BoxTextClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore</Title>
                        <Button type="primary" className='btnClass2' >Learn More</Button>
                    </div>
                </Col>
                <Col span={7} className='columnDiv'>
                    <div className='boxContent'>
                        <img src={Shield} className="logoImageClass" alt="Logo" style={{ marginBottom: '10px' }} width={80} height={80} />
                        <div style={{ textAlign: 'left' }} ><Title className='headingClassBox' level={2}>Heading Two</Title></div>
                        <Title className='BoxTextClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore</Title>
                        <Button type="primary" className='btnClass2' >Learn More</Button>
                    </div>
                </Col>
            </Row>

            <div className='textItemsClass'>
                <Title className='headingClass'>Heading One</Title>
                <div className='underlineClass'></div>
                <Title className='textClass' level={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.</Title>
                <Title className='textClass' level={5}>Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem.</Title>
            </div>

            <Modal title="Result Array" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <List
                    itemLayout="horizontal"
                    dataSource={newArray}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a>{item.title}</a>}
                            />
                        </List.Item>
                    )}
                />
            </Modal>

        </div>
    )
}
export default HomeContent;


