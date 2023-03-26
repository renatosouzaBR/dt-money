import { useEffect, useState } from 'react'

import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'

import { SearchForm } from './components/SearchForm'
import {
  TransactionContainer,
  TransactionsData,
  TransactionType,
} from './styles'

interface Transaction {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

export function Transactions() {
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([])

  async function fetchTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactionsData(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContainer>
      <Header />
      <Summary />

      <TransactionsData>
        <SearchForm />

        <table>
          <tbody>
            {transactionsData.map((transation) => (
              <tr key={transation.id}>
                <td>{transation.description}</td>
                <TransactionType variant={transation.type}>
                  {transation.price}
                </TransactionType>
                <td>{transation.category}</td>
                <td>{transation.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TransactionsData>
    </TransactionContainer>
  )
}
