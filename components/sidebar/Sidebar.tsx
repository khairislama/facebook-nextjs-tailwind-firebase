import { useSession } from 'next-auth/react'
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session, loading }: any = useSession()
  return (
    <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
      <SidebarRow src={session?.user?.image} title={session?.user?.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar
