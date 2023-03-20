import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { ApiContext } from '../context/contextApi';
import Leftbar from './Leftbar';
import Videos from './Videos';

const Feed = () => {
  const {loading, searchResult} = useContext(ApiContext)
  useEffect(() => {
  document.getElementById('root')?.classList.remove("custom-h")
  }, []);
 
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <Leftbar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
       {!loading && searchResult?.map((item) => {
        if(item.type !== "video") return false;
        return (
          <Videos key={item?.video?.videoId} video={item?.video}/>
        )
       })}
      </div>
</div>
      
    </div>
  )
}

export default Feed
