import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 18px;
  line-height: 1.6;
  padding: 5px;
  border: 1px solid #cccaca;
  border-radius: 5px;
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