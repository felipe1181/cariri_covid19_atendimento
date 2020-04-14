import React from 'react';

import { Layout,Form, Input, Button,Card,Row,Col,Alert,PageHeader } from 'antd'; 
import 'antd/dist/antd.css';
import './index.css'; 

export default function Dashboard(){
  const { Header, Footer, Sider, Content } = Layout;
  
    return(
      <Layout>
        <Header>
          <PageHeader
            className="site-page-header"
            title="Title" 
            subTitle="This is a subtitle"
          />
        </Header>
          <Content>
            <Row>
              <Col className="content-card-dashboard" xs={24} sm={20} md={16} lg={12} xl={12}>
                <Card title="Default size card" extra={<a href="#">More</a>} >
                    <Row>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>col-8</Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>col-8</Col>
                    </Row> 
                    
                  </Card>
              </Col> 
            </Row> 
          </Content>
        <Footer></Footer>
      </Layout>
    );
}