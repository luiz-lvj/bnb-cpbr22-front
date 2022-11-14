import React from "react";
import logoGreen from '../imgs/MedSync_Logo.png';
import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

const HeaderHome=(props) => {

    const location = useLocation();
    const history = useNavigate();
    
        return (
            <Box>
                <LogoStyle onClick={() => history("/start")}>MED<p>SYNC</p></LogoStyle>
                <MenuStyle>
                    <ButtonStyle onClick={() => history("/search")}>CONSULTA</ButtonStyle>
                    <ButtonStyle onClick={() => history("/dashboard")}>DASHBOARD</ButtonStyle>
                    <ButtonStyle onClick={() => history("/")}>LOGOUT</ButtonStyle>
                </MenuStyle>
                {/* <LoginStyle onClick={() => history("/login")}>Entre na AGITA</LoginStyle> */}
                {/* <LogoutStyle onClick={LogoutFunction}>Login/Logout</LogoutStyle> */}
            </Box>
    );
};

export default HeaderHome;

export const Box = styled.div`
    position: fixed;
    display: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0 !important;
    height: 80px;
    width: 100%;
    min-width: 100px;
    background: #F4E4D4;
    opacity: 95%;
    flex-direction: row;
    bottom: 0;
    padding-left: 10%;
    padding-right: 7%;
    padding-top: 10px;
    z-index: 1;
`;

const LogoStyle = styled.label`
    position: fixed;
    left: 5%;
    height: 50px;
    margin-top: 15px;

    font-family: 'Open Sans', sans-serif;
    font-size: 20pt;
    color: #1F6B6C;
    font-weight: 1000;
    text-align: center;
    letter-spacing: 3pt;

    p {
        font-weight: 400;
        display: inline;
    };
`;

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 25%;
    height: 80px;
    width: 60%;
`;

const LoginStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 73%;
    margin-top: 5px;
    height: 40px;
    width: 10%;

    background: #96156A;
    border-radius: 5px;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 10pt;
    font-weight: 600;
    font-style: italic;
    color: #FFFFFF;

    :hover {
        background: #F4E4D4;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const LogoutStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 75%;
    margin-top: 5px;
    height: 40px;
    width: 15%;

    background: #212121;
    border-radius: 5px;

    font-family: 'Inter', Helvetica, sans-serif;
    font-size: 10pt;
    font-weight: 600;
    font-style: italic;
    color: #FFFFFF;

    :hover {
        background: #000000;
    } 

    :focus {
        border: 1px solid #96156A;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;

const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 60px;

    background: transparent;
    border: 0px;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400;
    color: #427f80;
    letter-spacing: 3pt;

    :hover {
        color: #212121;
    } 

    :focus {
        background: #f4f4f4;
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;