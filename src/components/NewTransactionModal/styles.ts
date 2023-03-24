import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const TransactionModalContainer = styled(Dialog.Portal)``

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vd;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 52rem;
  border-radius: 6px;
  padding: 4rem 4.8rem;
  background-color: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border: none;
      border-radius: 6px;
      padding: 1.6rem;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 2.4rem;
      border: none;
      border-radius: 6px;
      height: 5.8rem;
      padding: 1.6rem 3.2rem;

      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['green-300']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  border: none;
  line-height: 0;
  background-color: transparent;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
`

export const Title = styled(Dialog.Title)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1.6rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  width: 100%;
  border: 0;
  border-radius: 6px;
  margin-top: 0.8rem;
  padding: 2.4rem 1.6rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
