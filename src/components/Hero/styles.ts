import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;

  > h1{
    font-family: var(--font-stack);
    font-size: 2em;
    width: 90%;
    text-align: center;

    @media screen and (min-width: 991px) {
      > h1{
        font-size: 3em;
        width: 60%;
      }
    }
  }

  > p {
    width: 80%;
    text-align: center;
    font-family: var(--font-stack);
    font-size: 1.1em;

    @media screen and (min-width: 991px) {
      width: 50%;
      font-size: 1.15em
    }
  }
`;

export const StyledArcImg = styled.div`
  width: 80%;
  height: 25em;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 25em;
    border-top-right-radius: 25em;
  }

  @media screen and (min-width: 991px) {
    width: 30%;
    height: 30em;
  }

`;