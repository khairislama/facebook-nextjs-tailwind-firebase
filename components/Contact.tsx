import Image from 'next/image'

interface Props {
  src: string
  name: string
}

function Contact({ src, name }: Props) {
  return (
    <div className="relative mb-2 flex cursor-pointer items-center space-x-3 rounded-xl p-2 hover:bg-gray-200">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 h-3 w-3 animate-bounce rounded-full bg-green-400" />
    </div>
  )
}

export default Contact
