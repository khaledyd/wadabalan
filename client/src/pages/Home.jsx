import React from "react";
import styled from "styled-components";
import Card from "../components/home/Card";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Popular from "../components/home/Popular";
import Steps from "../components/home/Steps";

const Container = styled.div`
  display: flex;
  flex-direction: column;
    //phones
    @media (max-width: 480px) {
    display: flex;
  

    align-items: center;
    justify-content: center;
width: 100%;
background-color: red;



  }

`;
const Header = styled.div`
  width: 100%;
  height: 1060px;
  background-color: #f7f7f7;
  margin-bottom: 50px;
`;
const Upcomming = styled.h1`
  margin-top: 50px;
  margin-left: 29px;
  font-family: "Oxygen Mono", monospace;
  font-size: 30px;
  display: flex;
  color: #554994;
`;
const Allcards = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 300px;
  height: 500px;
  margin-right: 20px;
  background-color: red;
  margin-top: 50px;
  background-color: #fcfcfc;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const SidebarTitle = styled.h1`
  font-size: 26px;
  padding-left: 20px;
  padding-top: 50px;
  font-family: "Inter", sans-serif;
`;
const SidebarBtn = styled.button`
  width: max-content;
  padding: 10px 30px;
  margin-left: 15px;
  margin-top: 80px;
  border-radius: 3px;
  border: none;
  background-color: #554994;
  color: #fff;
`;
const EventCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const SeeMore = styled.button`
  width: max-content;
  padding: 20px 70px;
  margin-left: 500px;
  border-radius: 3px;
  border: none;
  background-color: #554994;
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
`;
const Popularocntaier = styled.div`
width: 100%;
height: 500px;
background-color:#FCFCFC;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Upcomming>Upcomming Events!</Upcomming>
      <Header>
        <Allcards>
          <EventCards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </EventCards>
          <Sidebar>
            <SidebarTitle>Set up the next events</SidebarTitle>
            <SidebarBtn>Get Started</SidebarBtn>
          </Sidebar>
        </Allcards>
        <SeeMore>See More</SeeMore>
      </Header>
      <Steps />
      <Popularocntaier>
        <Popular />
      </Popularocntaier>

      <Footer />
    </Container>
  );
};

export default Home;
