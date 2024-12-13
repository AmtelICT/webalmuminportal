// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const VideoList = () => {
//     const [videos, setVideos] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/videos').then((res) => setVideos(res.data));
//     }, []);

//     const handleClick = (video) => {
//         navigate(`/video/${video._id}`, { state: { video } });
//     };

//     return (
//         <div>
//             {videos.map((video) => (
//                 <div key={video._id} onClick={() => handleClick(video)}>
//                     <img src={`http://localhost:5000/${video.bannerImage}`} alt={video.title} />
//                     <h3>{video.title}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default VideoList;



import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    // Using async/await in useEffect
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://34.173.218.25:5000/api/videos');
                setVideos(response.data);  // Setting videos state after fetching
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []); // Empty dependency array to run only once when the component mounts

    const handleClick = (video) => {
        navigate(`/video/${video._id}`, { state: { video } });
    };

    return (
        <div>
            {videos.map((video) => (
                <div key={video._id} onClick={() => handleClick(video)}>
                    <img src={`${video.bannerImage}`} alt={video.title} />
                    <h3>{video.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default VideoList;












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const VideoList = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       const res = await axios.get('http://localhost:5000/api/videos/');
//       setVideos(res.data);
//     };
//     fetchVideos();
//   }, []);

//   return (
//     <div>
//       {videos.map((video) => (
//         <div key={video._id}>
//           <Link to={`/video/${video._id}`}>
          
//             <img src={video.bannerImage} alt={video.title} />
//             {/* <img src={video.bannerImageUrl} alt={video.title} /> */}
//             <h3>{video.title}</h3>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoList;
