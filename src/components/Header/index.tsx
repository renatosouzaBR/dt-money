import * as Radix from '@radix-ui/react-dialog'

import logoImage from '@/assets/logo.svg'

import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, LogoArea } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoArea>
          <img src={logoImage} alt="" />
          <h1>DT Money</h1>
        </LogoArea>

        <Radix.Root>
          <Radix.Trigger asChild>
            <button>Nova transação</button>
          </Radix.Trigger>

          <NewTransactionModal />
        </Radix.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
