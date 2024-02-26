import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0;
  width: 100%;
`;

export const StyledNewsletter = styled.div`
  width: 80%;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    input{
      font-family: var(--font-stack);
      padding: 0.5em 1em;
      background: transparent;
      border: 0;
      border-bottom: 0.05em solid var(--black);
      width: 100%;
      font-family: var(--font-stack);
      font-size: 1em;
      color: var(--black);
      text-align: center;

      &::placeholder{
        font-family: var(--font-stack);
        text-align: center;
        font-size: 1.2em;
        text-transform: capitalize;
      }

      &:focus{
        outline: none;
      }
    }

    button{
      background: var(--yellow-1);
      padding: 0.5em 2em;
      border: none;
      font-family: var(--font-stack);
      text-transform: capitalize;
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 991px) {
    width: 50%;

    form{
      input{
        width: 50%;
      }
    }
  }
`;