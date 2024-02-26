import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  p{
    text-align: center;
    font-family: var(--font-stack);
    text-transform: capitalize;
    font-size: 1em;
    padding-bottom: 1em;
    width: 75%;
  }

  @media screen and (min-width: 991px) {
    p{
      font-size: 1.1em;
      width: auto;
    }
  }
`;