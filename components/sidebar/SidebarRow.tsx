import Image from 'next/image'

function SidebarRow({ src, Icon, title }: any) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-4 hover:bg-gray-200">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden font-medium sm:inline-flex">{title}</p>
    </div>
  )
}

export default SidebarRow
