import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Input'

export function Sidebar() {
  return (
    <aside className="bottom-o fixed left-0 right-0 top-0 z-20 flex h-screen flex-col gap-6 border-r border-zinc-200 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />

      {/* <Input.Root> */}
      {/*   <Input.Prefix> */}
      {/*     <Search className="h-5 w-5 text-zinc-500" /> */}
      {/*   </Input.Prefix> */}
      {/*   <Input.Control placeholder="Search" /> */}
      {/* </Input.Root> */}

      <div className="h-px bg-zinc-200" />

      <div className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </div>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        {/* <UsedSpaceWidget /> */}
      </div>
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}
