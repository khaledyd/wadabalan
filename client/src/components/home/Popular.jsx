import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 100px;
  margin-bottom: 100px;
  margin-top: 50px;
`;
const PopularTitle = styled.h1`

margin-bottom: 50px;
font-size: 30px;
font-family: "Oxygen Mono", monospace;
margin-left: 30px;
color: #554994;
`;
const Group = styled.div`

`;
const PopularIMGGroup = styled.div``;
const PopularGroupimgs = styled.img`
width: 250px;
height: 170px;
padding: 20px 30px;
`;
const PopularGroupTextgroup = styled.div`
display: flex;
`;
const PopularGroupText = styled.p`
padding: 10px 100px;
font-size: 20px;
font-family: "Oxygen Mono", monospace;
color: #554994;
`;
const Vstrong = styled.strong`
color: #f35588;
`;

const Popular = () => {
  return (
    <Container>
      <PopularTitle>Popular <Vstrong>Organizers</Vstrong></PopularTitle>
      <Group>
        <PopularIMGGroup>
          <PopularGroupimgs src="https://images.pexels.com/photos/13813447/pexels-photo-13813447.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
          <PopularGroupimgs src="https://images.pexels.com/photos/12128381/pexels-photo-12128381.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
          <PopularGroupimgs src="https://images.pexels.com/photos/13633764/pexels-photo-13633764.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
        </PopularIMGGroup>
        <PopularGroupTextgroup>
          <PopularGroupText>Ice works</PopularGroupText>
          <PopularGroupText>Ice works</PopularGroupText>
          <PopularGroupText>Ice works</PopularGroupText>
        </PopularGroupTextgroup>
      </Group>
    </Container>
  );
};

export default Popular;
