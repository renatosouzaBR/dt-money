import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useTransactions } from '@/contexts/TransactionsContext'

import { SeachFormContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormTypes = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormTypes>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormTypes) {
    await fetchTransactions(data.query)
  }

  return (
    <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        disabled={isSubmitting}
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}
