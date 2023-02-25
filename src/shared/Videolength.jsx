import React from 'react'
import moment from 'moment/moment'
const Videolength = ({time}) => {
    const VideolengthInSeconds = moment().startOf("day").second(time).format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
        {
            VideolengthInSeconds
        }
    </div>
  )
}

export default Videolength
