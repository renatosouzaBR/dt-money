import styled from 'styled-components'

export const SeachFormContainer = styled.form`
  width: 100%;
  height: 5.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  input {
    flex: 1;
    height: 100%;
    border: 0;
    padding: 1.6rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    height: 100%;
    border-radius: 6px;
    padding: 0 3.2rem;
    font-weight: 700;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};

    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }
  }
`
