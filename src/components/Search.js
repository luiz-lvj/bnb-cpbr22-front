import React from 'react';
import styled from 'styled-components';
import bkg from '../imgs/geometric_background.png';
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Search(props) {

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
        <SearchStyle>
            <Header/>
            <DivStyle>
                <TitleStyle>LISTA DE PACIENTES</TitleStyle>
                <LineStyle></LineStyle>
                <MyForm onSubmit={handleSubmit}>

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

                    <ButtonStyle 
                    type="submit"
                    value="Sign in">
                        SEARCH
                    </ButtonStyle>

                </MyForm>
            </DivStyle>
        </SearchStyle>
    );
};

const SearchStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    background-size: 1500px;
`;


const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 745px;
    background-color: rgba(256,256,256,0.95);
`;

const TitleStyle = styled.div`
    width: 90%;
    padding-top: 120px;
    margin-left: 10%;

    font-family: 'Open Sans', sans-serif;
    font-size:  24pt;
    letter-spacing: 3pt;
    color:  #427F80;
    font-weight: 900;
`;

const LineStyle = styled.div`
    width: 80%;
    margin-top: 20px;
    height: 2px;
    background:  #427F80;
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
    color:  #427F80;
    letter-spacing: 3pt;

    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 800px;
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
    margin-bottom: 40px;
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
    color:  #427F80;
    letter-spacing: 3pt;

    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
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
    color:  #427F80;
    letter-spacing: 3pt;

    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 20px;
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
    background: #427F80;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 50px;
    margin-top: 40px;

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