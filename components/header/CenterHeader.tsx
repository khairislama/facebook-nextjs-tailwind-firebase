import { FlagIcon, PlayIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { HomeIcon, UserGroupIcon } from '@heroicons/react/solid'

import HeaderIcon from './HeaderIcon'

function CenterHeader() {
  return (
    <div className="flex flex-grow justify-center">
      <div className="flex space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
    </div>
  )
}

export default CenterHeader
