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
  }
`;
const Header = styled.div`
  width: 100%;
  height: max-content;
  background-color: #f7f7f7;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;

  //phones
  @media (max-width: 480px) {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  //labtops
  @media (min-width: 769px) and (max-width: 1024px) {
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;
const Upcomming = styled.h1`
  margin-top: 50px;
  margin-left: 29px;
  font-family: "Oxygen Mono", monospace;
  font-size: 30px;
  display: flex;
  color: #554994;
  //phones
  @media (max-width: 480px) {
    font-size: 70px;
    width: 300vw;
    text-align: center;
    display: flex;
  }
`;
const Allcards = styled.div`
  display: flex;
  justify-content: space-between;
  //phones
  @media (max-width: 480px) {
  }
`;
const Sidebar = styled.div`
  width: 300px;
  height: 500px;
  margin-right: 20px;
  background-color: red;
  margin-top: 50px;
  background-color: #fcfcfc;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  //phones
  @media (max-width: 480px) {
    display: none;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
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

  //phones

  //phones
  @media (max-width: 480px) {
    width: 400vw;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 400vw;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
   justify-content: center;
  }
   //labtops
   @media (min-width: 769px) and (max-width: 1024px) {
    width: 400vw;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
   justify-content: center;
}
`;
const Seemore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeeMore = styled.button`
  width: max-content;
  padding: 20px 70px;
  border-radius: 3px;
  border: none;
  background-color: #554994;
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (min-width: 481px) and (max-width: 768px) {
    width: max-content;
  padding: 40px 110px;
  font-size: 40px;
  }
`;
const Popularocntaier = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fcfcfc;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  //phones
  @media (max-width: 480px) {
    width: 400vw;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 400vw;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const PopularTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 30px;
  font-family: "Oxygen Mono", monospace;
  margin-left: 30px;
  color: #554994;
  @media (max-width: 480px) {
    font-size: 80px;
    margin-top: 150px;
    margin-bottom: 50px;
  }
`;
const PopularCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  //phones
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
const Vstrong = styled.strong`
  color: #f35588;
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
          </EventCards>
          <Sidebar>
            <SidebarTitle>Set up the next events</SidebarTitle>
            <SidebarBtn>Get Started</SidebarBtn>
          </Sidebar>
        </Allcards>
        <Seemore>
          <SeeMore>See More</SeeMore>
        </Seemore>
      </Header>
      <Steps />
      <Popularocntaier>
        <PopularTitle>
          Popular <Vstrong>Organizers</Vstrong>
        </PopularTitle>
        <PopularCard>
          <Popular />
          <Popular />
       
        </PopularCard>
      </Popularocntaier>

      <Footer />
    </Container>
  );
};

export default Home;
