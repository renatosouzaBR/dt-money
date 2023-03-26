import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { useTransactions } from '@/contexts/TransactionsContext'
import { dateFormat, priceFormat } from '@/utils/formatter'

import { SearchForm } from './components/SearchForm'
import {
  TransactionContainer,
  TransactionsData,
  TransactionType,
} from './styles'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <TransactionContainer>
      <Header />
      <Summary />

      <TransactionsData>
        <SearchForm />

        <table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <TransactionType variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormat.format(transaction.price)}
                </TransactionType>
                <td>{transaction.category}</td>
                <td>{dateFormat.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TransactionsData>
    </TransactionContainer>
  )
}
