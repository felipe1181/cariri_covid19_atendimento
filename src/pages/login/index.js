import React , { useState } from 'react';

import './index.css';
import 'antd/dist/antd.css';
import { Layout,Form, Input, Button,Card,Row,Col,Alert,PageHeader } from 'antd'; 


import logo_full from '../../assets/logo_full.png';

import { validate as validateCPF } from 'gerador-validador-cpf'
import Axios from 'axios'; 
import api from '../../services/api';


export default function Login(){
    const { Header, Footer, Sider, Content } = Layout;

    const [stateCpf, setStateCpf] = useState('');
    const [stateCep, setStateCep] = useState('');
    const [stateErro,setStateErro] = useState({ temErro: false,info:'' });
  
      
    
    async function handlerSubmitCpfCepClick (event){
      event.preventDefault(); 
      setStateErro({ temErro: false,info:"" });
  
      try{
         
        if(!validateCPF(stateCpf)){
          //cpf inválido
          setStateErro({ temErro: true,info:'Cpf inválido' });
          return;
        } 
      
        const response = await Axios.get('https://viacep.com.br/ws/'+stateCep+'/json/unicode/');
        const {localidade} = response.data;
  
        console.log(process.env.REACT_APP_CIDADES_ATIVAS+" -- "+localidade);
        if(!process.env.REACT_APP_CIDADES_ATIVAS.includes(localidade)){
          setStateErro({ temErro: true,info:"O cariri atendimento não está disponível em sua região" });
          return;
        }
        
        //consumir dinamicamente dados da api desse frontend
        //criar sessao do usuario
        localStorage.setItem('session_id',stateCpf);
        localStorage.setItem('session_nome',"felipe"); //consumir dinamicamente dados da api
        
        //redirecionar para página administradora
        
      }catch(e){
        setStateErro({ temErro: true,info:e.message });
      } 
    }
  

    return(
        <Layout>
          <Header>
            <PageHeader
              className="site-page-header" 
              subTitle="Software feito por Felipe Ferraresi"
            />
          </Header>
            <Content>
              <Row className="content-main">
                <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
                  <Col xs={24} sm={20} md={16} lg={12} xl={8}>
                      <Card className="loginCard" title="login card" extra={ <img width="80%" src={logo_full} classname="logo" alt="logo" />}>
                              <Form
                    
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      
                    >
                      <Form.Item
                        
                        name="cpfImput"
                        onChange={(event) => setStateCpf(event.target.value)}
                        rules={[
                          {
                            required: true,
                            message: 'Por favor,informe seu cpf!',
                          },
                        ]}
                      >
                        <Input placeholder="Informe seu cpf" />
                      </Form.Item>

                      <Form.Item
                        
                        name="cepImput"
                        onChange={(event) => setStateCep(event.target.value)}
                        rules={[
                          {
                            required: true,
                            message: 'Por favor, informe seu cep!',
                          },
                        ]}
                      >
                        <Input placeholder="Informe seu Cep" />
                      </Form.Item>

                      <Button type="link" htmlType="button" onClick={()=> window.open("http://www.buscacep.correios.com.br/sistemas/buscacep/", "_blank")} block>
                        Não sabe seu cep?
                      </Button>

                      <Form.Item>
                        <Button  type="primary" htmlType="submit" onClick={handlerSubmitCpfCepClick}  block>
                          Informar cpf
                        </Button>
                      </Form.Item>
                    </Form>
                    </Card>
                  </Col>
                <Col xs={0} sm={2} md={4} lg={6} xl={8}></Col>
              </Row>
             
            </Content>
          <Footer>
              { 
                stateErro.temErro &&  
                <Alert message={ stateErro.info } type="error" /> 
              }
          </Footer>
        </Layout> 
    );
}