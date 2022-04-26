import { Timestamp } from 'firebase/firestore/lite'
import Image from 'next/image'
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

interface PostProps {
  name: string
  message: string
  email: string
  postImage: string
  image: string
  timestamp: Timestamp
}

function Post({
  name,
  message,
  email,
  postImage,
  image,
  timestamp,
}: PostProps) {
  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            width={40}
            height={40}
            alt="user's image"
            className="rounded-full"
          />
          <div className="">
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400 shadow-md">
        <div className="inputIcon rounded-none rounded-bl-2xl p-3">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none p-3">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl p-3">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
