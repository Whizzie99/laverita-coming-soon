import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;

  > h1{
    font-family: var(--font-stack);
    font-size: 3em;
    width: 60%;
    text-align: center;
  }

  > p {
    width: 50%;
    text-align: center;
    font-family: var(--font-stack);
    font-size: 1.1em;
  }
`;

export const StyledArcImg = styled.div`
  width: 30%;
  height: 30em;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 25em;
    border-top-right-radius: 25em;
  }

`;