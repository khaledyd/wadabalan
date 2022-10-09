import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { devices } from "../../uti/devices";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("https://images.pexels.com/photos/1540343/pexels-photo-1540343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  justify-content: flex-end;
  background-repeat: no-repeat, repeat;
  flex-direction: column;

  //phones
  @media (max-width: 480px) {
    width: 400vw;
    height: 800px;

    justify-content: flex-end;
    flex-direction: column;
  }

  //tablest
  @media (min-width: 481px) and (max-width: 768px) {
    width: 400vw;
    height: 1000px;

    justify-content: flex-end;
    flex-direction: column;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400vw;
    height: 1000px;

    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Navup = styled.div`
  display: flex;
  margin-right: 50px;

  //phones
  @media (max-width: 480px) {
    display: flex;
    margin-right: 50px;
    justify-content: baseline;
  }
  //tablest
  @media (min-width: 481px) and (max-width: 768) {
    display: flex;
    margin-right: 50px;
    justify-content: baseline;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    margin-right: 50px;
    justify-content: baseline;
  }
`;

const NavupList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-top: 30px;

  //phones
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    margin-top: 30px;
  }
  //tablests
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    margin-top: 30px;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    margin-top: 30px;
  }
`;
const Logo = styled.div``;

const Img = styled.img`
  width: max-content;
  height: max-content;
  padding-left: 30px;

  //phones
  @media (max-width: 480px) {
    margin-left: 20px;
    width: 270px;
    height: 60px;
  }
  //phones
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 20px;
    width: 640px;
    height: 120px;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 700px;
    height: 140px;
    padding-left: 30px;
  }
`;
const Navlistabtn = styled.div`
  display: flex;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
  }
`;

const Navlist = styled.ul`
  display: flex;

  font-family: "Oxygen Mono", monospace;

  color: #fff;
  list-style: none;

  //phones
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    list-style: none;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 60px;
    list-style: none;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;

    font-size: 60px;
    list-style: none;
  }
`;
const NavlistItem = styled.li`
  padding: 5px 20px;
  width: max-content;
  padding: 5px 10px;
  height: max-content;
  cursor: pointer;
  :hover {
    background-color: #f675a8;
    transition: 500ms;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 50px;
  }
`;
const Navbtn = styled.button`
  font-family: "Oxygen Mono", monospace;
  width: max-content;
  height: max-content;
  padding: 10px 30px;
  font-size: 16px;
  :hover {
    background-color: #f675a8;
    transition: 500ms;
    font-size: 20px;
    color: #fff;
    border: none;
    margin-left: 20px;
  }

  //phones
  @media (max-width: 480px) {
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 60px;
    font-size: 30px;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 60px;
    font-size: 30px;
  }
`;
const Navdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  padding-bottom: 100px;

  //phones
  @media (max-width: 480px) {
    margin-top: 200px;
    margin-left: 30px;
    color: #fff;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 450px;
    margin-left: 30px;
    color: #fff;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 250px;
    margin-left: 30px;
    color: #fff;
  }
`;
const NavdownTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 60px;
  color: #fff;

  //phones
  @media (max-width: 480px) {
    font-size: 70px;
    color: #fff;
    text-align: center;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 90px;
    color: #fff;
    text-align: center;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 90px;
    color: #fff;
    text-align: center;
  }
`;
const Navdownsubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  color: #fff;

  //phones
  @media (max-width: 480px) {
    font-size: 30px;
    color: #fff;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 60px;
    color: #fff;
  }
  //latptops
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 60px;
    color: #fff;
  }
`;
const Navsearcharea = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Navdowninput = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 30px;
  padding-left: 20px;
  //phones
  @media (max-width: 480px) {
    width: 500px;
    height: 70px;
    border: none;
    outline: none;
    font-size: 30px;
    padding-left: 20px;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    width: 900px;
    height: 100px;
    border: none;
    outline: none;
    font-size: 40px;
    padding-left: 40px;
  }
    //latptops
    @media (min-width: 769px) and (max-width: 1024px) {
      width: 900px;
    height: 100px;
    border: none;
    outline: none;
    font-size: 40px;
    padding-left: 40px;
  }
`;

const Navdownbutton = styled.button`
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: #f675a8;
  color: #fff;
`;

const Toggle = styled.div`
  display: none;
  //phones
  @media (max-width: 480px) {
    display: flex;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
  }
  
`;

const Toggleitems = styled.div``;

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Container>
      <NavupList>
        <Logo>
          <Img src="./images/lg.png" />
        </Logo>

        <Navup>
          {toggle ? (
            <>
              <Navlistabtn>
                <Navlist>
                  <NavlistItem>Find Events</NavlistItem>
                  <NavlistItem>Orgnaize Events</NavlistItem>
                  <NavlistItem>About</NavlistItem>
                  <NavlistItem>Log In</NavlistItem>
                </Navlist>
                <Navbtn>Get Started</Navbtn>
              </Navlistabtn>
            </>
          ) : (
            ""
          )}
          <Toggle
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <MenuIcon style={{ fontSize: "100px", color: "#fff" }} />
          </Toggle>
        </Navup>
      </NavupList>
      <Navdown>
        <NavdownTitle>The next events are here !</NavdownTitle>
        <Navdownsubtitle>Search with rich filters</Navdownsubtitle>
        <Navsearcharea>
          <Navdowninput type="text" />
          <Navdownbutton type="submit">
            <SearchIcon style={{ color: "#fff", fontSize: "30px" }} />
          </Navdownbutton>
        </Navsearcharea>
      </Navdown>
    </Container>
  );
};

export default Navbar;
///https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
