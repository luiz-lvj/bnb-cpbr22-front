import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logoGreen from '../imgs/MedSync_Logo.png';
import signHealth from '../imgs/sign_health.png';
import menuPhoto from '../imgs/menu_photo.png';
import styled from 'styled-components';


export default function Login(props){

    const history = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if(name == "username"){
            props.setUserName(value);
        }
        // setInputs({
        //     'username': name == 'username' ? value : '',
        //     'email': name == 'email' ? value : '',
        //     'password': name == 'password' ? value : '',
        // });
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        history("/start");
    }

    return(
        <LoginStyle>

            <LeftDiv>

                <LogoStyle src={logoGreen} alt="" />
                <TextLogoStyle>BLOCKCHAIN AS A SERVICE FOR HOSPITALS AND PACIENTS</TextLogoStyle>
                <PhotoDiv src={menuPhoto} alt="" />

            </LeftDiv>

            

            <RightDiv>

                <SignStyle src={signHealth} alt="" />
                <LineStyle></LineStyle>

                <MyForm onSubmit={handleSubmit}>

                    <LabelStyle>USERNAME</LabelStyle>
                    
                    <InputStyle
                    type="text"
                    placeholder="your username"
                    name="username" 
                    value={inputs.username || ""} 
                    onChange={handleChange}
                    />

                    <LabelStyle>PASSWORD</LabelStyle>

                    <InputStyle
                    type="password"
                    placeholder="your password"
                    name="password" 
                    value={inputs.password || ""} 
                    onChange={handleChange}
                    />

                    <ButtonStyle 
                    type="submit"
                    value="Sign in"
                    >
                        SIGN IN
                    </ButtonStyle>

                </MyForm>

            </RightDiv>

        </LoginStyle>
    );
}

const LoginStyle = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 1400px;
    width: 100%;
    height: 400px;
    padding-bottom: 0px;
    background: #9ad1d2;
`;

const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 1090px;
    padding-bottom: 0px;
    background: #427F80;
`;

const PhotoDiv = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 1200px;
    height: 800px;
    z-index: -1;
`;

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 300px;
    width: 60%;
    height: 1090px;
    padding-bottom: 0px;
    /* background: #F4E4D4; */
`;

const LogoStyle = styled.img`
    width: 250px;
    height: 250px;
`;

const TextLogoStyle = styled.label`
    font-family: 'Open Sans', sans-serif;
    font-size: 16pt;
    line-height: 24pt;
    color: #427F80;
    font-weight: 600;
    text-align: center;
    letter-spacing: 3pt;

    height: 45px;
    margin-top: 80px;

    border: 0;
    outline: 0;
    width: 500px;
`;

const SignStyle = styled.img`
    width: 60px;
    height: 60px;
    margin-top: 400px;
    margin-bottom: 20px;
`;

const LineStyle = styled.div`
    width: 500px;
    height: 3px;
    margin-bottom: 50px;
    border-radius: 5px;
    background: #F4E4D4;
`;

const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 400px;
    padding-bottom: 100px;
    background: #427F80;
`;

const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 80%;

    text-indent: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size:   12pt;
    font-weight: 600px;
    color:  #FFFFFF;
    letter-spacing: 3pt;

    padding-top: 10px;
    padding-bottom: 5px;
`;

const InputStyle = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    font-family: 'Open Sans', sans-serif;
    font-size: 14pt;
    font-weight: 400px;
    color: #427F80;
    text-indent: 10px;
    letter-spacing: 1pt;
    
    background: #9AD1D2;
    border-radius: 20px;
    border: 0px solid #1F6B6C;
    height: 45px;
    margin-bottom: 10px;

    outline: 0;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;

    :hover {
        background: #1F6B6C;
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
    font-size:  12pt;
    letter-spacing: 3pt;
    color:  #FFFFFF;
    font-weight: 600;

    border-radius: 20px;
    background: #1F6B6C;
    height: 45px;
    margin-top: 40px;

    border: 0;
    outline: 0;

    :hover {
        transition: 1s;
        background: #F4E4D4;
    } 

    :focus {
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
    } 
`;