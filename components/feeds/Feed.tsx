import Inputbox from './Inputbox'
import Posts from './Posts'
import Stories from './stories/Stories'

function Feed() {
  return (
    <div className="mr-3 h-screen flex-grow overflow-y-auto pb-44 pt-6 scrollbar-hide xl:mr-40">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* stories */}
        <Stories />
        {/* Input box */}
        <Inputbox />
        {/* posts */}
        <Posts />
      </div>
    </div>
  )
}

export default Feed
