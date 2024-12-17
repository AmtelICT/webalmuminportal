// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const VideoPlayer = () => {
//     const { state } = useLocation();
//     const { video } = state;

//     return (
//         <div>
//             <video controls src={`http://localhost:5000/${video.videoUrl}`} style={{ width: '100%' }} />
//             <h2>{video.title}</h2>
//             <p>{video.description}</p>
//         </div>
//     );
// };

// export default VideoPlayer;

import './videoplayer.css';
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons';


import { useNavigate } from "react-router-dom";

const VideoPlayer = () => {
    const { state } = useLocation();
    const { video } = state;
    const navigate= useNavigate();

    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
    
        const playVideo = async () => {
          if (videoElement) {
            try {
              await videoElement.play();
            } catch (err) {
              console.error("Error trying to play the video:", err);
            }
          }
        };
    
        playVideo();
    
        return () => {
          if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset to start
          }
        };
      }, [video]); // Re-run when `video` changes
    



    if (!video) {
        return <div>Loading...</div>; // Handle loading if no video is passed in the state
    }

    const handleNavigation = () => {
        navigate("/join");
      };

    return (
        <div className='body'>
            <div className='videocont'>
                    <video 
                            controls src={`${video.videoUrl}`}
                            className='videoplayer'
                            ref={videoRef}
                      />
                    <h2 className='videotitlein'>{video.title}</h2>
                    <p className='descriptionin'>{video.description}</p>

            </div>

            <div className='flexbot'>
                    <p className='author'> By {video.author}</p>
                    <button className='registerbtn' onClick={handleNavigation} >
                           {/* <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /> */}
                            <FontAwesomeIcon icon={faGraduationCap} size='2x' className='icongrad' />
                         <text className='register'>  Register For Certificate<br/> &  Training </text> 

                        </button>
            </div>


        </div>
    );
};

export default VideoPlayer;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const VideoPlayer = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const res = await axios.get(`http://localhost:5000/api/videos/${id}`);
//       setVideo(res.data);
//     };
//     fetchVideo();
//   }, [id]);

//   if (!video) return <div>Loading...</div>;

//   return (
//     <div>
//       <video controls>
//         <source src={video.videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <h2>{video.title}</h2>
//       <p>Author: {video.author}</p>
//     </div>
//   );
// };

// export default VideoPlayer;
