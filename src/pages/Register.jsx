import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?cs=srgb&dl=pexels-mentatdgt-1336873.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #ddd;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Lastname" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm password" />
                    <Button>CREATE</Button>
                    Already have An Account<Link> Click Here.</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
