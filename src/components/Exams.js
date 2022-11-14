import React from 'react';
import styled from 'styled-components';
import bkg from '../imgs/geometric_background.png';
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

export default function Exams(props) {

    const history = useNavigate();

    return (
        <ExamStyle>
            <Header/>
                <DivStyle>    
                    <SplitDiv>
                        <TitleStyle>HISTÓRICO MÉDICO</TitleStyle>
                        <ReqStyle onClick={() => history("/req")}>+ REQUISIÇÃO DE HISTÓRICO</ReqStyle>
                    </SplitDiv>
                    <LineStyle></LineStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE SANGUE</TextInputStyle>
                        <DateInputStyle>11/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>DERMATOLOGISTA</TextInputStyle>
                        <DateInputStyle>01/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE RAIO X</TextInputStyle>
                        <DateInputStyle>23/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE SANGUE</TextInputStyle>
                        <DateInputStyle>17/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>CARDIOLOGISTA</TextInputStyle>
                        <DateInputStyle>09/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE SANGUE</TextInputStyle>
                        <DateInputStyle>11/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>DERMATOLOGISTA</TextInputStyle>
                        <DateInputStyle>01/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>CARDIOLOGISTA</TextInputStyle>
                        <DateInputStyle>23/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE SANGUE</TextInputStyle>
                        <DateInputStyle>17/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>CARDIOLOGISTA</TextInputStyle>
                        <DateInputStyle>09/10/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>EXAME DE SANGUE</TextInputStyle>
                        <DateInputStyle>11/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>
                    <InputStyle>
                        <TextInputStyle>DERMATOLOGISTA</TextInputStyle>
                        <DateInputStyle>01/11/2022</DateInputStyle>
                        <RightButtonStyle onClick={() => history("/examex")}>ACESSAR</RightButtonStyle>
                    </InputStyle>  
                    <LineStyle></LineStyle>
                </DivStyle>
        </ExamStyle>
    );
};

const ExamStyle = styled.div`
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
    height: 1150px;
    background-color: rgba(256,256,256,0.95);
`;

const SplitDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    margin-bottom: 20px;
    padding-top: 135px;
`;

const TitleStyle = styled.div`
    width: 90%;
    margin-left: 10%;

    font-family: 'Open Sans', sans-serif;
    font-size:  24pt;
    letter-spacing: 3pt;
    color:  #427F80;
    font-weight: 900;
`;

const ReqStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-right: 10%;

    font-family: 'Open Sans', sans-serif;
    font-size:  14pt;
    letter-spacing: 3pt;
    color:  #1F6B6C;
    font-weight: 400;

    background: #F4E4D4;
    border-radius: 40px;
    height: 50px;

    border: 0px;

    :hover {
        transition: 1s;
        background: #9ad1d2;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const LineStyle = styled.div`
    width: 80%;
    margin-top: 20px;
    height: 2px;
    margin-bottom: 40px;
    background:  #427F80;
`;

const InputStyle = styled.div`
    display: flex;
    align-items: center;
    width: 80%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #427F80;
    font-weight: 600;

    border-radius: 20px;
    background: #F4F4F4;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 50px;
    margin-bottom: 20px;

    border: 2px solid #427F80;
    outline: 0;
`;

const TextInputStyle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 50%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 3pt;
    text-indent: 40px;
    color:  #427F80;
    font-weight: 600;
`;

const DateInputStyle = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 20%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #427F80;
    font-weight: 600;
`;

const RightButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 750;

    background: #427F80;
    border-radius: 100px 40px 40px 0px;
    height: 50px;

    border: 2px solid #427F80;

    :hover {
        transition: 1s;
        background: #F4E4D4;
        color: #1F6B6C;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;