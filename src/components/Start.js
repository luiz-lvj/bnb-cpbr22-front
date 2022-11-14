import React from 'react';
import styled from 'styled-components';
import bkg from '../imgs/geometric_background.png';
import icon1 from '../imgs/iconF1.png';
import icon2 from '../imgs/iconF2.png';
import icon3 from '../imgs/iconF4.png';
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";

export default function Start() {

    const history = useNavigate();

    return (
        <StartStyle>
            <Header/>
                <WelcomeStyle>
                    <WelcomeTitleStyle>SEJA BEM VINDO!</WelcomeTitleStyle>
                    <ReqStyle onClick={() => history("/req")}>+ REQUISIÇÃO DE HISTÓRICO</ReqStyle>
                </WelcomeStyle>
                <DivStyle>
                    <SplitDiv>
                        <ColDiv>
                            <IconDiv src={icon1} alt="" />
                            <TitlelDiv>BLOCKCHAIN AS A SERVICE, <b></b> MAIS SEGURANÇA E <b></b> TECNOLOGIA PARA DADOS</TitlelDiv>
                        </ColDiv>
                        <ColDiv>
                            <IconDiv src={icon2} alt="" />
                            <TitlelDiv>A MEDSYNC TEM POTENCIAL <b></b> DE IMPACTAR X PACIENTES <b></b> EM TODO O BRASIL</TitlelDiv>
                        </ColDiv>
                        <ColkDiv>
                            <IconKDiv src={icon3} alt="" />
                            <TitleKDiv>SALVE UMA VIDA</TitleKDiv>
                            <ConsultDiv onClick={() => history("/search")}>CONSULTE AGORA</ConsultDiv>
                        </ColkDiv>
                    </SplitDiv>
                </DivStyle>
        </StartStyle>
    );
};

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    background-size: 1500px;
`;

const WelcomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 100px;
    margin-top: 100px;

    background-color: rgba(256,256,256,0.95);
    border-radius: 40px;
`;

const WelcomeTitleStyle = styled.div`
    width: 60%;
    margin-left: 5%;

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
    width: 30%;
    margin-right: 5%;

    font-family: 'Open Sans', sans-serif;
    font-size:  14pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 400;

    background: #427F80;
    border-radius: 40px;
    height: 50px;

    border: 0px;

    :hover {
        transition: 1s;
        background: #F4E4D4;
        color: #1F6B6C;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 525px;
    margin-top: 20px;

    background-color: rgba(256,256,256,0.95);
    border-radius: 40px 40px 0px 0px;
`;

const SplitDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
`;

const IconDiv = styled.img`
    padding: 10px;
    height: 300px;
`;

const IconKDiv = styled.img`
    margin-top: 10px;
    height: 240px;
`;

const TitlelDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;
    margin-bottom: 40px;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 1pt;
    line-height: 24pt;
    color:  #1F6B6C;
    font-weight: 700;

    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3); */
`;

const TitleKDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30%;

    font-family: 'Open Sans', sans-serif;
    font-size:  16pt;
    letter-spacing: 1pt;
    line-height: 24pt;
    color:  #1F6B6C;
    font-weight: 700;

    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3); */
`;

const ConsultDiv = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    font-family: 'Open Sans', sans-serif;
    font-size:  10pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 20px;
    background: #427F80;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 40px;
    margin-bottom: 30px;

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

const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 80%;
    border-radius: 20px;
    border: 2px solid #9AD1D2;
    background: #FFFFFF;
    opacity: 0.9;

    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3); */
`;

const ColkDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 80%;
    border-radius: 20px;
    border: 2px solid #9AD1D2;
    background: #FFFFFF;
    opacity: 0.9;

    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3); */
`;