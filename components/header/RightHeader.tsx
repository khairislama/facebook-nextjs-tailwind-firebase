import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function RightHeader() {
  const { data: session } = useSession()
  return (
    <div className="flex items-center justify-end sm:space-x-2">
      {/* Profile Pic */}
      <Image
        onClick={() => signOut()}
        className="cursor-pointer rounded-full"
        src={session?.user?.image || 'https://links.papareact.com/5me'}
        width="40"
        height="40"
        layout="fixed"
      />
      <p className="whitespace-nowrap pr-3 font-semibold text-gray-500">
        {session?.user?.name}
      </p>
      <ViewGridIcon className="icon" />
      <ChatIcon className="icon" />
      <BellIcon className="icon" />
      <ChevronDownIcon className="icon" />
    </div>
  )
}

export default RightHeader
