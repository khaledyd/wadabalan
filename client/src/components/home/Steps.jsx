import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
margin-bottom: 50px;
`

;
const Info = styled.div`display:flex;
flex-direction: column;
margin-left: 30px;
`;
const StepsBigImg = styled.img`
width: 400px;
`;

const InfoTitle = styled.h1`
font-size: 30px;
font-family: 'Inter', sans-serif;
margin-bottom: 30px;
width: 400px;
color: #554994;
`;
const InfoSteps = styled.div`
height: 300px;
width: 1000px;
background-color:#F675A8;
`;
const Infoimggroup = styled.div`
display: flex;

`;
const InfoGrouptxt = styled.div`
display: flex;
`;
const InfoImgone = styled.img`
padding: 30px 100px;
width: 120px;
height: 100px;
`;
const InfoText = styled.p`

padding: 10px 100px;
width: max-content;
font-family: "Oxygen Mono", monospace;

font-size: 20px;
color: #fff;
`;
const InfoBtn = styled.button`
width: max-content;
padding: 10px 40px;
margin-left: 300px;
margin-top: 50px;
border: none;
background-color:#F675A8;
color: #fff;
font-size: 23px;
`;
const Vstrong = styled.strong`
color: #f35588;
`;
const Steps = () => {
  return (
    <Container>
      <Info>
        <InfoTitle>With the <Vstrong>simple</Vstrong> Steps you can attend event </InfoTitle>
        <InfoSteps>
          <Infoimggroup>
            <InfoImgone src="./images/create.png" />
            <InfoImgone src="./images/fill.png" />
            <InfoImgone src="./images/boom.png" />
          </Infoimggroup>
          <InfoGrouptxt>
              <InfoText>Create account</InfoText>
              <InfoText>Fill the necessery form</InfoText>
              <InfoText>Boom ! You are in</InfoText>
          </InfoGrouptxt>


        </InfoSteps>
        <InfoBtn>Join Wadabalan</InfoBtn>
      </Info>
      <StepsBigImg src="./images/stepimg.png" />
    </Container>
  );
};

export default Steps;
