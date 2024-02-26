import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

export const StyledImg = styled.div`
  width: 7em;

  > img{
    width: 100%;
    object-fit: contain;
  }
`;