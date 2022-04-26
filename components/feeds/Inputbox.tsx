import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import { db } from '../../firebase'
import firebase from 'firebase'

function Inputbox() {
  const { data: session }: any = useSession()
  const inputRef = useRef(null)

  const sendPost = (e: any) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    db.collection('posts').add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    inputRef.current.value = ''
  }

  return (
    <div className="mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session?.user?.image || 'https://links.papareact.com/5me'}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user?.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default Inputbox
