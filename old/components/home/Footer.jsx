import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Container = styled.footer`
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
      display: flex;
      width: 400vw;
      flex-direction: column;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      width: 400vw;
      flex-direction: column;
    
    }
    @media (min-width: 769px) and (max-width: 1024px) {
    
    
    }
  `;
  const Footerone = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    width: 100%;
    height: 200px;
    background-color: red;
    font-family: "Roboto", sans-serif;
    color: #fff;
    background-color: #554994;
    padding-top: 50px;


    @media (max-width: 480px) {
      display: flex;
      width: 400vw;
      flex-direction: column;
      height: max-content;

      justify-content: flex-start;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      width: 400vw;
      flex-direction: column;
      height: max-content;

      justify-content: flex-start;
    }
  `;
  const Animlot = styled.ul`
    font-size: 20px;
    list-style: none;
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 65px;
      padding-left: 30px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 95px;
      padding-left: 30px;
   
    
    }
  `;
  const AnimlotItems = styled.li`
    font-size: 12px;
    padding: 3px;
    @media (max-width: 480px) {
      font-size: 45px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 55px;
    }
  `;
  const Resource = styled.ul`
    font-size: 20px;
    list-style: none;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 65px;
      padding-left: 30px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 95px;
      margin-bottom: 50px;
      padding-left: 30px;
    }
  `;
  const Resourceitems = styled.li`
    font-size: 12px;
    padding: 3px;
    @media (max-width: 480px) {
      font-size: 45px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 55px;
    }
  `;
  const Usecases = styled.ul`
    font-size: 20px;
    list-style: none;
    padding-right: 50px;

    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 65px;
      margin-bottom: 50px;
     padding-left: 30px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      font-size: 95px;
      margin-bottom: 50px;
      padding-left: 30px;
    }
  `;
  const Usecasesitems = styled.li`
    font-size: 12px;
    padding: 3px;
    @media (max-width: 480px) {
      font-size: 45px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      font-size: 55px;
    }
  `;

  const Footertwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  `;
  const FooterImg = styled.img`
    width: max-content;
    height: max-content;
    padding: 50px 30px;
    @media (max-width: 480px) {
      width: 450px;
      height: 100px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
    width: 1000px;
    height: 200px;
    }
  `;

  const FooterTwoLits = styled.ul`
    display: flex;
    font-family: "Roboto", sans-serif;
    list-style: none;
    padding-top: 50px;
    padding-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 50px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
  font-size: 80px;
    }
  `;
  const FooterTwolistitems = styled.li`
    padding: 5px;
  `;
  const Footertwotext = styled.p`
    font-family: "Roboto", sans-serif;
    padding-top: 50px;
    padding-bottom: 20px;
    margin-left: 20px;

    @media (max-width: 480px) {
      font-size: 40px;
      margin-bottom: 20px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
 font-size: 80px;
      margin-bottom: 20px;
    }
  `;
  return (
    <Container>
      <Footerone>
        <FooterImg src="/images/lg.png" />
        <Animlot>
          Wadabalan
          <AnimlotItems>About</AnimlotItems>
          <AnimlotItems>Service</AnimlotItems>
          <AnimlotItems>Careers</AnimlotItems>
          <AnimlotItems>Press</AnimlotItems>
        </Animlot>
        <Resource>
          Resources
          <Resourceitems>Blogs</Resourceitems>
          <Resourceitems>Case studies</Resourceitems>
        </Resource>
        <Usecases>
          Use cases
          <Usecasesitems>small bussiness</Usecasesitems>
          <Usecasesitems>creators </Usecasesitems>
        </Usecases>
      </Footerone>
      <Footertwo>
        <FooterTwoLits>
          <FooterTwolistitems>terms |</FooterTwolistitems>
          <FooterTwolistitems>privaciy |</FooterTwolistitems>
          <FooterTwolistitems>Copywrite </FooterTwolistitems>
        </FooterTwoLits>
        <Footertwotext>© 2022 Wadabalan All Rights Reserved</Footertwotext>
      </Footertwo>
    </Container>
  );
}
