import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  justify-content: flex-start;
`;

const PopularCard = styled.div`
display: flex;

flex-direction: column;
align-items: baseline;
margin-left: 50px;

`;
const PopularGroupimgs = styled.img`
  width: 250px;
  height: 170px;
     //phones
     @media (max-width: 480px) {
      width: 250vw;
      height: 740px;
    
  }
      //tablets
      @media  (min-width: 481px) and  (max-width: 768px) {
        width: 150vw;
      height: 740px;
     
  }
 
`;

const PopularcardText = styled.p`
  font-size: 20px;
  font-family: "Oxygen Mono", monospace;
  color: #554994;
  margin-top: 10px;
  @media (max-width: 480px) {
    font-size: 60px;

    
  }
  @media (min-width: 481px) and (max-width: 768px) {
 font-size: 70px;
  }
`;


const Popular = () => {
  return (
    <Container>
    
      <PopularCard>
        <PopularGroupimgs src="https://images.pexels.com/photos/13813447/pexels-photo-13813447.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />

        <PopularcardText>Ice works</PopularcardText>
      </PopularCard>
    </Container>
  );
};

export default Popular;
