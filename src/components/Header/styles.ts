import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 3.2rem 12.2rem;
  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 5rem;
    border-radius: 6px;
    border: none;
    padding: 1.2rem 2rem;
    background-color: ${(props) => props.theme['green-500']};

    font-weight: 700;
    color: ${(props) => props.theme.white};
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme['green-300']};
      transition: background-color 0.2s;
    }
  }
`

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    height: 3.8rem;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
  }
`
