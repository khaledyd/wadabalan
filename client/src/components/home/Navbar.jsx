import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
width: 100%;
height: 500px;


background-image: url("https://images.pexels.com/photos/3274551/pexels-photo-3274551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 
`;
const Cover = styled.div``

const Navlist = styled.ul`
display: flex;
align-items: center;
margin-left: 600px;
font-size: 20px;
list-style: none;
font-family: 'Oxygen Mono', monospace;
margin-bottom: 400px;
color: #fff;

`;
const NavlistItem = styled.li`
padding: 5px 20px;`;
const Navbtn = styled.button`
padding: 10px 40px;
font-family: 'Oxygen Mono', monospace;
border: none;
border-radius: 3px;
color: #554994;
background-color: #fff;
margin-bottom: 400px;
`;



const Navbar = () => {
  return (
    <Container>
      <Navlist>
        <NavlistItem>Find Events</NavlistItem>
        <NavlistItem>Orgnaize Events</NavlistItem>
        <NavlistItem>About</NavlistItem>
        <NavlistItem>Log In</NavlistItem>
      </Navlist>
      <Navbtn>Get Started</Navbtn>
    </Container>
  );
};

export default Navbar;
