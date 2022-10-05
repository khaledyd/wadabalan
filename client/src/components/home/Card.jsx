import React from "react";
import styled from "styled-components";

const Container = styled.div`
margin-left: 50px;
margin-top: 50px;
width: 250px ;
height: 400px;
background-color:#FAFAFA;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
margin-bottom: 0;

`;
const CardImg = styled.img`
width: 250px;
height: 150px;
`;
const CardTitle = styled.h2`
font-size: 15px;
font-family: 'Varela', sans-serif;
padding-left: 10px;
padding-top: 10px;
font-weight: bold;
color: #554994;
`;
const CardDate = styled.h3`
font-size: 12px;
font-family: 'Inter', sans-serif;
padding-left: 10px;
padding-top: 20px;
color: #F675A8;
`;
const CardType = styled.h4`
font-size: 13px;
padding-left: 10px;
padding-top: 10px;
font-family: 'Inter', sans-serif;

`;
const Atendees = styled.h5`
padding-left: 10px;
padding-top: 10px;
font-family: 'Inter', sans-serif;`;
const Usertitle = styled.h6`
padding-left: 10px;
padding-top: 10px;
font-family: 'Inter', sans-serif;
color: #554994;
font-size: 16px;
`;

const Card = () => {
  return (
    <Container>
      <CardImg src="https://images.pexels.com/photos/13692259/pexels-photo-13692259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <CardTitle>the next life is workigs Lorem tempore repellendus!</CardTitle>
      <CardDate>Sat,nov20,10:20AM</CardDate>
      <CardType>Online Events</CardType>
      <Atendees>30 Atendees</Atendees>
      <Usertitle>ice works</Usertitle>
    </Container>
  );
};

export default Card;
