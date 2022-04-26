interface Props {
  active?: boolean
  Icon: any
}

function HeaderIcon({ Icon, active }: Props) {
  return (
    <div className="group flex cursor-pointer items-center rounded-xl active:border-b-2 active:border-blue-500 sm:h-14 md:px-10 md:hover:bg-gray-100">
      <Icon
        className={`mx-auto h-5 text-center text-gray-500 group-hover:text-blue-500 sm:h-7 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
