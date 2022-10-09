import { Container } from '@mui/system';    
import React from 'react';
import styled from 'styled-components';

const Test = () => {
    const Container = styled.div`
    width: 100%;
height: 100px;
    background-color: red;
    display: flex;
    align-items: center;
 justify-content: flex-end;

 @media (max-width: 480px) {
    width: 100%;
height: 200px;
    background-color: yellow;
    display: flex;
    align-items: center;
 justify-content: flex-end;
     



  }
    `
    const Component = styled.div`
    width: 50%;
    height: 50px;
    background-color: white;
    display: flex;
   align-items: center;
   justify-content: flex-end;
   margin-right: 50px;

    `
     const Componentt = styled.div`
     width: 50%;
     height: 50px;
     background-color: white;
     display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;

 
     `
    const TestComponent = styled.button`
    width: max-content;
 padding: 5px 30px;
    background-color:green;
    margin-right: 50px;
    font-size: 16px;
    `
       const TestComponentwo = styled.button`
       width: max-content;
    padding: 5px 30px;
       background-color:green;
       margin-right: 50px;
       font-size: 16px;
       `
    return (
        <Container>
            <Component>
                <TestComponent>the test</TestComponent>
            </Component>
            <Componentt>
                <TestComponentwo>world of things</TestComponentwo>
            </Componentt>
        </Container>
    );
}

export default Test;
