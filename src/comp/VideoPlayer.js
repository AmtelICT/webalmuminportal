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


import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
    const { state } = useLocation();
    const { video } = state;

    if (!video) {
        return <div>Loading...</div>; // Handle loading if no video is passed in the state
    }

    return (
        <div>
            <video controls src={`${video.videoUrl}`} style={{ width: '100%' }} />
            <h2>{video.title}</h2>
            <p>{video.description}</p>
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
