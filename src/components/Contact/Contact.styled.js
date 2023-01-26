import styled from 'styled-components';

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.2;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #9c9a9a;
  border-radius: 6px;
  background-color: #9ce7a1;

  
  &:hover,
  &:focus,
  &:active {
    background-color: #6abc6c;
  }
`;