import styled from 'styled-components'

export const TransactionContainer = styled.div``

export const TransactionsData = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 6.4rem auto 0;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.8rem;
    margin-top: 2.4rem;

    td {
      padding: 2rem 3.2rem;
      background-color: ${(props) => props.theme['gray-700']};
      text-align: left;
      line-height: 1.6;
      color: ${(props) => props.theme['gray-300']};

      &:first-child {
        width: 50%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`

interface TransactionTypeProps {
  variant: 'income' | 'outcome'
}

export const TransactionType = styled.td<TransactionTypeProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']} !important;
`
