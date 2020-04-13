import React, { useState } from 'react';
import './App.css';

import { Card, CardBody, CardLink, Col, Button, Form, FormGroup, Input, Badge, Alert } from 'reactstrap';
import logo_full from './assets/logo_full.png';

import { validate as validateCPF } from 'gerador-validador-cpf'
import api from './services/api';
import Axios from 'axios'; 
 

function App() { 
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
      
      //criar sessao do usuario
      //redirecionar para página administradora
      
    }catch(e){
      setStateErro({ temErro: true,info:e.message });
    } 
  }

 
  return (
    <div className="App" row>   
         <Col className="container_main" sm={{size:4,offset: 4 }} block>
            <Card className="Card_main">
              <CardBody> 
                <img width="80%" src={logo_full} classname="logo" alt="logo" />
              </CardBody> 
              <CardBody>
                  <Form onSubmit={handlerSubmitCpfCepClick}>
                    <FormGroup row> 
                      <Col sm={12}>
                        <Input type="cpf" name="cpf" id="imputCpf" placeholder="informe seu cpf" onChange={(event) => setStateCpf(event.target.value)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row> 
                      <Col sm={12}>
                        <Input type="cep" name="cep" id="imputCep" placeholder="informe seu cep" onChange={(event) => setStateCep(event.target.value)} />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={12} >
  <Badge href="http://www.buscacep.correios.com.br/sistemas/buscacep/" id="linkBuscarCep" color="secondary" target="_blank">Não sabe seu cep? {process.env.REACT_APP_CUSTOM_NODE_ENV}</Badge> 
                      </Col> 
                    </FormGroup>
                    <FormGroup row>
                      <Col sm={12}>
                        <Button color="primary" size="lg" id="btnInformarCpfSubmit" block>Informar cpf</Button>  
                      </Col>
                    </FormGroup> 
                  </Form>
                <CardLink href="https://www.linkedin.com/in/felipe1181">Desenvolvido por felipe ferraresi</CardLink> 
              </CardBody>
            </Card>
              <div className="messageBox" sm={{size:12,offset: 0 }} block>
                  { stateErro.temErro &&  
                  <Alert color="danger">
                      { stateErro.info }
                  </Alert>
                  }
              </div>
          </Col>   
    </div>
    
  );
}

export default App;
