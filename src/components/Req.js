import React from 'react';
import styled from 'styled-components';
import bkg from '../imgs/geometric_background.png';
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Req(props) {

    const history = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        // setInputs({
        //     'username': name == 'username' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'password': name == 'password' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history("/exams");
    }

    return (
        <ReqStyle>
            <Header/>
                <DivStyle>
                    <TitleStyle>REQUISIÇÃO DE HISTÓRICO</TitleStyle>
                    <LineStyle></LineStyle>

                    <MyForm onSubmit={handleSubmit}>

                        <SectorStyle>DADOS DO PACIENTE</SectorStyle>

                        <LabelStyle>CHAVE PÚBLICA*</LabelStyle>
                        <InputStyle
                        type="text"
                        placeholder="patient's key from wallet"
                        name="key" 
                        value={inputs.key || ""} 
                        onChange={handleChange}
                        />

                        <SplitDiv>
                            <ColDiv>
                                <LabelLStyle>NOME</LabelLStyle>
                                <InputMinorLStyle
                                type="text"
                                placeholder="patient's Name"
                                name="name" 
                                value={inputs.name || ""} 
                                onChange={handleChange}
                                />
                            </ColDiv>
                            <ColDiv>
                                <LabelRStyle>CPF</LabelRStyle>
                                <InputMinorRStyle
                                type="number"
                                placeholder="patient's CPF"
                                name="cpf" 
                                value={inputs.cpf || ""} 
                                onChange={handleChange}
                                />
                            </ColDiv>
                        </SplitDiv>

                        <SectorStyle>DADOS DA REQUISIÇÃO</SectorStyle>

                        <SplitDiv>
                        <ColDiv>
                            <LabelLStyle>HOSPITAL*</LabelLStyle>
                            <SelectLStyle
                            name="hospital" 
                            value={inputs.hospital || ""} 
                            onChange={handleChange}>
                                <option value="A">Hospital A</option>
                                <option value="B">Hospital B</option>
                                <option value="C">Hospital C</option>
                            </SelectLStyle>
                        </ColDiv>
                        <ColDiv>
                            <LabelRStyle>TIPO DE REQUISIÇÃO*</LabelRStyle>
                            <SelectRStyle
                            name="type" 
                            value={inputs.typeR || ""} 
                            onChange={handleChange}>
                                <option value="1">Histórico Completo</option>
                                <option value="2">Consultas Médicas</option>
                                <option value="3">Exames Médicos</option>
                                <option value="4">Histórico até 1 mês atrás</option>
                                <option value="5">Histórico até 1 ano atrás</option>
                            </SelectRStyle>
                        </ColDiv>
                    </SplitDiv>

                        <ButtonStyle 
                        type="submit"
                        value="Sign in">
                            REALIZAR REQUISIÇÃO
                        </ButtonStyle>

                    </MyForm>
                </DivStyle>
        </ReqStyle>
    );
};

const ReqStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    background-size: 1500px;
`;

const TitleStyle = styled.div`
    width: 90%;
    margin-left: 10%;
    margin-top: 30px;

    font-family: 'Open Sans', sans-serif;
    font-size:  24pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 900;
`;

const LineStyle = styled.div`
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 2px;
    background:  #FFFFFF;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;
    height: 625px;
    margin-top: 100px;
    margin-bottom: 20px;

    background-color: rgba(66, 127, 128,0.98);
    border-radius: 40px;
    border: 5px solid #FFFFFF;
`;

// AQUI COMEÇA A PARTE DO FORM

const SectorStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;

    text-indent: 0px;
    font-family: 'Open Sans', sans-serif;
    font-size:   14pt;
    font-weight: 900;
    color:  #1F6B6C;
    letter-spacing: 3pt;

    margin-top: 10px;
    margin-bottom: 10px;
`;

const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;

    text-indent: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size:   14pt;
    font-weight: 600px;
    color:  #FFFFFF;
    letter-spacing: 3pt;

    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 15px;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 600px;
`;

const InputStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 40px;
    letter-spacing: 1pt;
    
    background: #f4f4f4;
    border-radius: 20px;
    border: 2px solid #427F80;
    height: 45px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #9ad1d2;
    } 

    :focus {
        background: #FFFFFF;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12pt;
        color: #427F80;
        font-weight: 400px;
        opacity: 80%;
    }
`;

const SplitDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    margin-bottom: 20px;
`;

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

const LabelRStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 95%;
    margin-left: 5%;

    text-indent: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size:   14pt;
    font-weight: 600px;
    color:  #FFFFFF;
    letter-spacing: 3pt;

    margin-top: 20px;
    padding-bottom: 15px;
`;

const InputMinorRStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-left: 5%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 40px;
    letter-spacing: 1pt;
    
    background: #f4f4f4;
    border-radius: 20px;
    border: 2px solid #427F80;
    height: 45px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #9ad1d2;
    } 

    :focus {
        background: #FFFFFF;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12pt;
        color: #427F80;
        font-weight: 400px;
        opacity: 80%;
    }
`;

const LabelLStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 95%;
    margin-right: 5%;

    text-indent: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size:   14pt;
    font-weight: 600px;
    color:  #FFFFFF;
    letter-spacing: 3pt;

    margin-top: 20px;
    padding-bottom: 15px;
`;

const InputMinorLStyle = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-right: 5%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 40px;
    letter-spacing: 1pt;
    
    background: #f4f4f4;
    border-radius: 20px;
    border: 2px solid #427F80;
    height: 45px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #9ad1d2;
    } 

    :focus {
        background: #FFFFFF;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12pt;
        color: #427F80;
        font-weight: 400px;
        opacity: 80%;
    }
`;


const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 20px;
    background: #1F6B6C;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 50px;
    margin-top: 20px;

    border: 0;
    outline: 0;

    :hover {
        transition: 1s;
        background: #F4E4D4;
        color: #1F6B6C;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const SelectRStyle = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-left: 5%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 40px;
    letter-spacing: 1pt;
    
    background: #f4f4f4;
    border-radius: 20px;
    border: 2px solid #427F80;
    height: 45px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #9ad1d2;
    } 

    :focus {
        background: #FFFFFF;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12pt;
        color: #427F80;
        font-weight: 400px;
        opacity: 80%;
    }
`;

const SelectLStyle = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-right: 5%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 40px;
    letter-spacing: 1pt;
    
    background: #f4f4f4;
    border-radius: 20px;
    border: 2px solid #427F80;
    height: 45px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #9ad1d2;
    } 

    :focus {
        background: #FFFFFF;
    } 

    ::-webkit-input-placeholder {
        font-family: 'Open Sans', sans-serif;
        font-size: 12pt;
        color: #427F80;
        font-weight: 400px;
        opacity: 80%;
    }
`;