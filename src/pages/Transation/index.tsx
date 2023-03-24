import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'

import { SearchForm } from './components/SearchForm'
import {
  TransactionContainer,
  TransactionsData,
  TransactionType,
} from './styles'

export function Transaction() {
  return (
    <TransactionContainer>
      <Header />
      <Summary />

      <TransactionsData>
        <SearchForm />

        <table>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <TransactionType variant="income">R$ 12.000,00</TransactionType>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <TransactionType variant="outcome">-R$ 59,00</TransactionType>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </table>
      </TransactionsData>
    </TransactionContainer>
  )
}
