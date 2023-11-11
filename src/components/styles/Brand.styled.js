import styled from "styled-components";

export const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-position: center;
  flex: 55%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;

export const BannerLogo = styled.img`
  width: 140px;
  margin: 10px 0px 10px -48%;
`;

export const BannerSpan = styled.span`
  color: #fff;
  background-color: rgb(14, 157, 88);
  padding: 10px;
  border-radius: 9px;
  font-size: 10px;
  margin: 10px 0px 10px -43%;
`;

export const BannerTitle = styled.h2`
  color: #fff;
  font-size: 30px;
  max-width: 30ch;
  margin: 20px 20px 20px 1%;
`;

export const BannerContent = styled.p`
  color: #fff;
  font-size: 16px;
  max-width: 51ch;
  margin-left: -7%;
`;
