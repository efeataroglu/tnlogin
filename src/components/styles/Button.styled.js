import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  border: ${({ br }) => br || "0"} solid #d9e5fb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  width: ${({ wd }) => wd};
  margin-top: 20px;
  margin-left: ${({ ml }) => ml};
  &:hover {
    opacity: 0.8;
  }
`;
