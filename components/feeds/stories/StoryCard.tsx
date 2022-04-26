import Image from 'next/image'

function StoryCard({ name, src, profile }: any) {
  return (
    <div className="overflow-x relative h-14 w-14 transform cursor-pointer p-3 transition duration-200 ease-in hover:scale-105 hover:animate-pulse md:h-20 md:w-20 lg:h-56 lg:w-32">
      <Image
        className="absolute top-10 z-50 rounded-full opacity-0 lg:opacity-100"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="rounded-full object-cover brightness-75 filter lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  )
}

export default StoryCard
