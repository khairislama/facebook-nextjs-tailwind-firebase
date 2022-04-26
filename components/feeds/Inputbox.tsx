import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'
import { db } from '../../firebase'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
const { v4: uuidv4 } = require('uuid')
import { getStorage, ref, getDownloadURL, uploadString } from 'firebase/storage'

function Inputbox() {
  const { data: session }: any = useSession()
  const inputRef = useRef(null)
  const filepickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)
  const [message, setMessage] = useState('')

  const sendPost = async (e: any) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    const myUuid = uuidv4()
    const myDocument = doc(db, 'posts', myUuid)
    setDoc(myDocument, {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((doc) => {
      if (imageToPost) {
        //upload image
        uploadString(
          ref(getStorage(), `posts/${myUuid}`),
          imageToPost,
          'data_url'
        ).then((data) => {
          removeImage()
          getDownloadURL(data.ref).then((url) => {
            setDoc(
              myDocument,
              {
                postImage: url,
              },
              { merge: true }
            )
          })
        })
      }
    })

    inputRef.current.value = ''
  }

  const addImageToPost = (e: any) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
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
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <img className="h-10 object-contain" src={imageToPost} alt="" />
            <p className="text-center text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filepickerRef}
          />
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
