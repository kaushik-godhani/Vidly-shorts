import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({ likes, messages, shares}) {
    const [liked, setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_button'>
            {liked ? (
                <FavoriteIcon fontSize="medium" 
                    onClick={(e)=> setLiked(false)}
                />
            ) : (
                <FavoriteBorderIcon fontSize='medium' 
                    onClick={(e) => setLiked(true)}
                />
            )}
            
            <p>{liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar_button'>
            <MessageIcon fontSize='medium' />
            <p>{ messages }</p>
        </div>
        <div className='videoSidebar_button'>
            <ShareIcon fontSize='medium' />
            <p>{ shares }</p>
        </div>
    </div>
  )
}

export default VideoSidebar