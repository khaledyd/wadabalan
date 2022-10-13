import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //phones
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
      //latptops
      @media (min-width: 769px) and (max-width: 1024px) {
        display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wraper = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  width: 250px;
  height: 400px;
  background-color: #fafafa;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  //phones
  @media (max-width: 480px) {
    width: 300vw;
    height: 1550px;
    background-color: #fafafa;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-left: 0px;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    width: 150vw;
    height: 1500px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vw;
 height: 1000px;}
`;
const CardImg = styled.img`
  width: 250px;
  height: 150px;
  @media (max-width: 480px) {
    width: 300vw;
    height: 850px;
  }
  //tablets
  @media (min-width: 481px) and (max-width: 768px) {
    width: 150vw;
    height: 500px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100vw;
    height: 400px;

}
  
`;
const CardTitle = styled.h2`
  font-size: 15px;
  font-family: "Varela", sans-serif;
  padding-left: 10px;
  padding-top: 10px;
  font-weight: bold;
  color: #554994;
  @media (max-width: 480px) {
    font-size: 60px;
    font-weight: bolder;
    padding-left: 30px;
  }
   //tablets
   @media (min-width: 481px) and (max-width: 768px) {
    font-size: 70px;
    font-weight: bolder;
    padding-left: 60px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 50px;
    font-weight: bolder;
padding-left: 30px;
}
`;
const CardDate = styled.h3`
  font-size: 12px;
  font-family: "Inter", sans-serif;
  padding-left: 10px;
  padding-top: 20px;
  color: #f675a8;
  @media (max-width: 480px) {
    font-size: 50px;
    font-weight: bolder;
    padding-left: 30px;
  }
     //tablets
     @media (min-width: 481px) and (max-width: 768px) {
      font-size: 50px;
    font-weight: bolder;
    padding-left: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 50px;
    font-weight: bolder;
    padding-left: 30px;
}
`;
const CardType = styled.h4`
  font-size: 13px;
  padding-left: 10px;
  padding-top: 10px;
  font-family: "Inter", sans-serif;
  @media (max-width: 480px) {
    font-size: 45px;
    padding-left: 30px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 45px;
    padding-left: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 45px;
    padding-left: 30px;
}
`;
const Atendees = styled.h5`
  padding-left: 10px;
  padding-top: 10px;
  font-family: "Inter", sans-serif;
  @media (max-width: 480px) {
    font-size: 35px;
    padding-left: 30px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 35px;
    padding-left: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 35px;
    padding-left: 30px;
}
`;
const Usertitle = styled.h6`
  padding-left: 10px;
  padding-top: 10px;
  font-family: "Inter", sans-serif;
  color: #554994;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 30px;
    padding-left: 30px;
    padding-bottom: 20px;
}
`;

const Card = () => {
  return (
    <Container>
      <Wraper>
        <CardImg src="https://images.pexels.com/photos/13692259/pexels-photo-13692259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <CardTitle>
          the next life is workigs Lorem tempore repellendus!
        </CardTitle>
        <CardDate>Sat,nov20,10:20AM</CardDate>
        <CardType>Online Events</CardType>
        <Atendees>30 Atendees</Atendees>
        <Usertitle>ice works</Usertitle>
      </Wraper>
    </Container>
  );
};

export default Card;
