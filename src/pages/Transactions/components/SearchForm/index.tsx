import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { SeachFormContainer } from './styles'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormTypes = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormTypes>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions() {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(true)
      }, 3000),
    )
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
