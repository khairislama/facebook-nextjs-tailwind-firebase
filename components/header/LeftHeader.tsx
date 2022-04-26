import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'

function LeftHeader() {
  return (
    <div className="flex items-center">
      <Image
        src="https://links.papareact.com/5me"
        width={40}
        height={40}
        layout="fixed"
      />
      <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          className="ml-2 hidden flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
    </div>
  )
}

export default LeftHeader
