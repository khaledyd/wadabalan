import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  width: 100%;
  height: 500px;

  background-image: url("https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-repeat: no-repeat;
  background-size: 1500px, 500px;
`;
const Navup = styled.div`
  display: flex;
`;
const Img = styled.img`
  margin-bottom: 400px;
  margin-left: 20px;
  margin-top: 20px;
`;

const Navlist = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 400px;
  font-size: 20px;
  list-style: none;
  font-family: "Oxygen Mono", monospace;
  margin-bottom: 400px;
  color: #fff;
`;
const NavlistItem = styled.li`
  padding: 5px 20px;
`;
const Navbtn = styled.button`
  padding: 10px 40px;
  font-family: "Oxygen Mono", monospace;
  border: none;
  border-radius: 3px;
  color: #554994;
  background-color: #fff;
  margin-bottom: 400px;
  margin-top: 10px;
`;
const Navdown = styled.div`
display: flex;
flex-direction: column;
margin-top: -300px;

`;
const NavdownTitle = styled.h1`
font-size: 40px;
font-family: 'Inter', sans-serif;
color: #fff ;
padding-bottom: 10px;



`;
const Navdownsubtitle = styled.p`
font-size: 20px;
font-family: 'Inter', sans-serif;
color: #fff ;
padding-bottom: 10px;
margin-left: 120px;
`;
const Navsearcharea = styled.div`
display: flex;

`;
const Navdowninput = styled.input`
width: 700px;
height: 50px;
margin-left: -80px;
border: none;
background-color: #fff;
outline: none;
padding-left: 20px;
font-size: 20px;

`;

const Navdownbutton = styled.button`
height: 55x;
width: 80px;
margin-left: -5px;
border: none;
background-color: #554995;
`;

const Navbar = () => {
  return (
    <Container>
      <Navup>
        <Img src="./images/lg.png" />
        <Navlist>
          <NavlistItem>Find Events</NavlistItem>
          <NavlistItem>Orgnaize Events</NavlistItem>
          <NavlistItem>About</NavlistItem>
          <NavlistItem>Log In</NavlistItem>
        </Navlist>
        <Navbtn>Get Started</Navbtn>
      </Navup>
      <Navdown>
        <NavdownTitle>The next events are here !</NavdownTitle>
        <Navdownsubtitle>Search with rich filters</Navdownsubtitle>
        <Navsearcharea>
          <Navdowninput type="text" />
          <Navdownbutton type="submit"><SearchIcon style={{color : "#fff", fontSize:"30px"}}/></Navdownbutton>
        </Navsearcharea>

        
      </Navdown>
    </Container>
  );
};

export default Navbar;
