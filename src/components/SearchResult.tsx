import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { fetchDataFromAPI } from '../utils/api'
import { ApiContext, VideoData } from '../context/contextApi'
import Leftbar from './Leftbar'
import SearchResultCard from './SearchResultCard'

type SearchVideos = {
  contents : VideoData[]
}
const SearchResult = () => {
const [result, setResult] = useState<SearchVideos>();
const {searchQuery} = useParams()
const {setLoading} = useContext(ApiContext)


useEffect(() => {
  document.getElementById('root')?.classList.remove('custom-h');
  fetchSearchResults()
}, [searchQuery])
const fetchSearchResults = () => {
  setLoading(true);
  fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
    setResult(res)
    setLoading(false)
  })
}
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <Leftbar />
      <div className="grow w-[calc(100%-240px)] h-full flex flex-col gap-10  overflow-y-auto bg-black">
        {result?.contents.map((video) => {
          if(video.type !== "video") return false;
          
           return <SearchResultCard key={video.video.videoId} video={video.video}/>
        })}
      </div>
    </div>
  )
}

export default SearchResult
