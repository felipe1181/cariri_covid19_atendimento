import React from 'react';

import { Layout,Form, Input, Button,Card,Row,Col,Alert,PageHeader,Divider } from 'antd'; 
import 'antd/dist/antd.css';
import './index.css'; 

export default function Dashboard(){
  const { Header, Footer, Sider, Content } = Layout;
  
    return(
      <Layout>
        <Header>
          <PageHeader
            className="site-page-header" 
            subTitle="Feito por Felipe Ferraresi"
          />
        </Header>
          <Content>
            <Row>
              <Col className="content-card-dashboard" xs={24} sm={20} md={16} lg={12} xl={6}>
                <Card title="Atendimento Cariri covid-19">
                    <Row gutter={16}>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                        <RightOutlined />
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>  
                    </Row> 
                    <Divider orientation="left" style={{ color: '#333'}}> </Divider>
                    <Row gutter={16}>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>  
                    </Row> 
                      <Divider orientation="left" style={{ color: '#333'}}> </Divider>
                    <Row gutter={16}>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Button type="primary" block>
                          Primary
                        </Button>
                      </Col>  
                    </Row> 
                  </Card>
              </Col> 
            </Row> 
          </Content>
        <Footer></Footer>
      </Layout>
    );
}