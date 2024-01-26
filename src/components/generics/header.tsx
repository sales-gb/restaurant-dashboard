import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { ThemeToggle } from '../theme'
import { Separator } from '../ui'
import { AccountMenu, Navlink } from '.'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Navlink to="/">
            <Home className="h-4 w-4" />
            Início
          </Navlink>

          <Navlink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </Navlink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
