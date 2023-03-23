import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -8.2rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-600']};
  padding: 2.4rem 2.4rem 2.4rem 3.2rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    font-size: 3.2rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};

    display: block;
    margin-top: 1.8rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
