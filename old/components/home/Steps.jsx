import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 480px) {
    width: 400vw;
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 400vw;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
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
const StepsBigImgDiv = styled.div`
  display: flex;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StepsBigImg = styled.img`
  width: 400px;
  @media (max-width: 480px) {
    width: 600px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 1200px;
  }
`;

const InfoTitle = styled.h1`
  font-size: 30px;
  font-family: "Inter", sans-serif;
  margin-bottom: 30px;
  width: 400px;
  color: #554994;
  @media (max-width: 480px) {
    margin-top: 100px;
    font-size: 70px;
    text-align: center;
    margin-bottom: 50px;
    width: 200vw;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 100px;
    font-size: 90px;
    text-align: center;
    margin-bottom: 100px;
    width: 200vw;
  }
`;
const InfoSteps = styled.div`
  height: 300px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #fff;
  background-color: #f675a8;
  @media (max-width: 480px) {
    display: flex;
    width: max-content;
    height: max-content;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350vw;
    height: max-content;
    font-size: 50px;
    margin-top: 150px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    width: max-content;
    height: max-content;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350vw;
 height: max-content;
    font-size: 80px;
    font-weight: bolder;
    margin-top: 150px;
  }
`;
const InfoGroupone = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 480px) {
    margin-top: 50px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 100px;
  }
`;
const InfoGrouponeImg = styled.img`
  width: 200px;
  height: 130px;
  @media (max-width: 480px) {
    width: 400px;
    height: 260px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 800px;
    height: 520px;
  }
`;
const InfoGrouponetext = styled.p`
  margin-top: 20px;
`;

const InfoGrouptwo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin-top: 150px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
   margin-top: 300px;
  }
`;
const InfoGrouptwoImg = styled.img`
  width: 200px;
  height: 130px;
  @media (max-width: 480px) {
    width: 400px;
    height: 260px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 800px;
    height: 520px;
  }
`;
const InfoGrouptwotext = styled.p`
  margin-top: 20px;
  @media (min-width: 481px) and (max-width: 768px) {
   
  }
`;

const InfoGroupthree = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin-top: 150px;
    margin-bottom: 50px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
   margin-top: 300px;
   margin-bottom: 100px;
  }
`;
const InfoGroupthreeImg = styled.img`
  width: 200px;
  height: 130px;
  @media (max-width: 480px) {
    width: 400px;
    height: 260px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 800px;
    height: 520px;
  }
`;
const InfoGroupthreetext = styled.p`
  margin-top: 20px;
`;

const Infobtndiv = styled.div`

display:flex;
align-items: center;
justify-content: center;
`;
const InfoBtn = styled.button`
  width: max-content;
  padding: 10px 40px;
  margin-top: 50px;
  border: none;
  background-color: #f675a8;
  color: #fff;
  font-size: 23px;

  @media (max-width: 480px) {
   font-size: 40px;
   padding: 20px 80px;
   :hover {
     background-color: #fff;
     color:#f675a8; 
     transition: 500ms;
   }
  }
  @media (min-width: 481px) and (max-width: 768px) {
  font-size: 60px;
  padding: 40px 120px;
  }
`;
const Vstrong = styled.strong`
  color: #f35588;
`;
const Steps = () => {
  return (
    <Container>
      <Info>
        <InfoTitle>
          With the <Vstrong>simple</Vstrong> Steps you can attend event{" "}
        </InfoTitle>
        <InfoSteps>
          <InfoGroupone>
            <InfoGrouponeImg src="./images/create.png" />
            <InfoGrouponetext>Create Account</InfoGrouponetext>
          </InfoGroupone>
          <InfoGrouptwo>
            <InfoGrouptwoImg src="./images/fill.png" />
            <InfoGrouptwotext>Fill the necessery form</InfoGrouptwotext>
          </InfoGrouptwo>
          <InfoGroupthree>
            <InfoGroupthreeImg src="./images/boom.png" />
            <InfoGroupthreetext>Boom ! You are in</InfoGroupthreetext>
          </InfoGroupthree>
        </InfoSteps>
        <Infobtndiv>
          <InfoBtn>Join Wadabalan</InfoBtn>
        </Infobtndiv>
      </Info>
      <StepsBigImgDiv>
        <StepsBigImg src="./images/stepimg.png" />
      </StepsBigImgDiv>
    </Container>
  );
};

export default Steps;
