import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
