import styled from "styled-components";

export const StyledLoginForm = styled.div`
  flex: 45%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px auto;
  border-radius: 4px;
  background: #fff;
  width: 384px;
  height: 681px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const StyledLogo = styled.img`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: -222px;
  cursor: pointer;
  font-size: 16px;
`;

export const StyledInfoMessage = styled.span`
  background-color: rgba(66, 133, 244, 0.1);
  font-size: 15px;
  border-radius: 4px;
  color: rgb(46, 58, 89);
  font-weight: bold;
  line-height: 1.6;
  padding: 12px 16px 12px 12px;
  border-left: 4px solid rgb(66, 133, 244);
  margin: 0px 30px;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  color: rgb(143, 155, 179);
  margin-left: ${({ px }) => px};
`;

export const StyledInput = styled.input`
  height: 48px;
  width: 85%;
  background-color: transparent;
  font-size: 15px;
  padding: 16px;
  color: rgb(34, 43, 69);
  border-radius: 4px;
  border: 2px solid rgb(197, 206, 224);
  margin: 0px 30px;
  margin-bottom: 30px;

  &:focus {
    border-color: #185a9d;
    outline: none;
  }
`;

export const StyledCheckBoxInput = styled.input``;

export const StyledLink = styled.a`
  margin-top: 35px;
  font-size: 16px;
  font-weight: 600;
  color: rgb(26, 71, 132);
  text-align: center;
  text-decoration: none;

  &:hover {
    color: rgb(66, 133, 244);
    cursor: pointer;
  }
`;

export const StyledLoginContent = styled.p`
  padding: 0px;
  margin: 10px 25px auto;
  text-align: center;
  margin-top: 50px;
  cursor: inherit;
  font-size: 13px;
  color: rgb(143, 155, 179);
`;

export const StyledHref = styled.a`
  color: rgb(26, 71, 132);
  &:hover {
    color: rgb(66, 133, 244);
    cursor: pointer;
  }
`;
