import { MagnifyingGlass } from 'phosphor-react'

import { SeachFormContainer } from './styles'

export function SearchForm() {
  return (
    <SeachFormContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  )
}
