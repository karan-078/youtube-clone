import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import {BsFillCheckCircleFill} from "react-icons/bs"
import { Link } from 'react-router-dom';
const VideoCard = ({video}) => {
  return (
    <div>
     <Link to = {`/video/${video.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 nd-rounded-xl overflow-hidden">
          <img className='h-full w-full object-cover' src={video?.thumbnails[0]?.url} alt="" />

          
          
        </div>
      </div>
     </Link>
    </div>
  )
}

export default VideoCard
