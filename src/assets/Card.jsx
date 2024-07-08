// Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  color: #007BFF;
  
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const Card1 = ({ icon, title, description }) => {
  return (
    
    <CardContainer>
      <div className='mb-2' style={{marginLeft:"14vh"}}>
        <IconWrapper>{icon}</IconWrapper>
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card1;
