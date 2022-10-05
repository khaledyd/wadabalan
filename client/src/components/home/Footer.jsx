import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Container = styled.footer`
    display: flex;
    flex-direction: column;
  `;
  const Footerone = styled.div`
    display: flex;
    margin-top: 100px;
    width: 100%;
    height: 200px;
    background-color: red;
    font-family: "Roboto", sans-serif;
    color: #fff;
    background-color: #554994;
  `;
  const Animlot = styled.ul`
    padding: 50px 200px;
    font-size: 20px;
    list-style: none;
  `;
  const AnimlotItems = styled.li`
    font-size: 12px;
    padding: 3px;
  `;
  const Resource = styled.ul`
    padding: 50px 100px;
    font-size: 20px;
    list-style: none;
  `;
  const Resourceitems = styled.li`
    font-size: 12px;
    padding: 3px;
  `;
  const Usecases = styled.ul`
    font-size: 20px;
    list-style: none;
    padding: 50px 180px;
  `;
  const Usecasesitems = styled.li`
    font-size: 12px;
    padding: 3px;
  `;

  const Footertwo = styled.div`
  display:flex;`;
  const FooterImg = styled.img`
  
  width:220px;
  height:30px;
padding: 50px 30px;
  `;
  
  const FooterTwoLits = styled.ul`
  display: flex;
  font-family: "Roboto", sans-serif;
  list-style: none;
padding-left: 500px;
padding-top: 50px;
padding-bottom: 50px;
  `;
  const FooterTwolistitems = styled.li`
  padding:5px;
  `;
  const Footertwotext = styled.p`
  padding: 55px 30px;
  font-family: "Roboto", sans-serif;
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
          <Usecasesitems>Creators</Usecasesitems>
      
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
