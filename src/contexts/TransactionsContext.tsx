import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '@/lib/axios'

type Transaction = {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateTransactionProps {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextProps {
  transactions: Transaction[]
  fetchTransactions(query?: string): Promise<void>
  createTransaction(data: CreateTransactionProps): Promise<void>
}

const TransactionsContext = createContext({} as TransactionsContextProps)

interface TransactionsProviderProps {
  children: ReactNode
}

function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionProps) {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date().toISOString(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}

export { TransactionsProvider, useTransactions }
