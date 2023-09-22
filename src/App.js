import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import video from './v1.mp4';
import axios from './axios.js';


function App() {

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  },[]);

  console.log(videos);

  return (
    <div className="app">
      <h1>tiktok</h1>

      <div className='app_videos'>
        {videos.map(({channel, description, song, likes, messages, shares}) => (
            <Video url={video} channel={channel} description={description} song={song} likes={likes} messages={messages} shares={shares} />
        ))}
      </div>
    
      {/* app contaier */}
        {/* videos */}


    </div>
  );
}

export default App;
