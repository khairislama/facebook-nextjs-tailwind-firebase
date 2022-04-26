import CenterHeader from './CenterHeader'

import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white p-2 shadow-md lg:px-5">
      <LeftHeader />
      <CenterHeader />
      <RightHeader />
    </div>
  )
}

export default Header
