import React from 'react';
import styled from 'styled-components';
import RAD from '../imgs/Radiografia.jpg';
import bkg from '../imgs/geometric_background.png';
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Examex() {

    const history = useNavigate();

    return (
        <ExamexStyle>
            <Header/>
                <DivStyle>
                    <ExamStyle src={RAD} alt="" />
                    <ButtonStyle onClick={() => history("/exams")}>VOLTAR</ButtonStyle>
                </DivStyle>
        </ExamexStyle>
    );
};

const ExamexStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url(${bkg});
    background-size: 1500px;
`;

const ExamStyle = styled.img`
    width: 450px;
    height: 450px;
`;

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 625px;
    margin-top: 100px;
    margin-bottom: 20px;

    background-color: rgba(244, 228, 212,0.98);
    border-radius: 40px;
    border: 5px solid #1F6B6C;
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;

    font-family: 'Open Sans', sans-serif;
    font-size:  12pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 20px;
    background: #427F80;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.3);
    height: 30px;
    margin-top: 30px;

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