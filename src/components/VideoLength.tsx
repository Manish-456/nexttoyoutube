import React from 'react'
import moment from 'moment'
type Time = {
    time : number
}
const VideoLength = ({time} : Time ) =>{
    const videoLengthInSeconds = moment().startOf("days").seconds(time).format('H:mm:ss')

    
  return (
    <div className='absolute bottom-2 right-2 bg-black px-2 py-1 text-white text-xs rounded-md'>
      {videoLengthInSeconds}
    </div>
  )
}

export default VideoLength
