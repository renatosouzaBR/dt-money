import { HeaderContainer, HeaderContent, LogoArea } from './styles'

import logoImage from '@/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoArea>
          <img src={logoImage} alt="" />
          <h1>DT Money</h1>
        </LogoArea>

        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
