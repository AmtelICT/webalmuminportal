
import './videolist.css';

import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const VideoList = () => {
    // const [videos, setVideos] = useState([]);
    const [mostpopular, setMostpopular] = useState([]);
    const [microsoftpacks, setMicrosoftpacks] = useState([]);
    const [softwaredev, setSoftwaredev] = useState([]);
    const [photoedit, setPhotoedit] = useState([]);
    const [videoedit, setVideoedit] = useState([]);
    const [networking, setNetworking] = useState([]);
    const [cybersec, setCybersec] = useState([]);
    const [systemadmin, setSystemadmin] = useState([]);
    const [digitalm, setDigitalm] = useState([]);
    const [arabic, setArabic] = useState([]);
    const [shariah, setShariah] = useState([]);
    const [french, setFrench] = useState([]);
    const [english, setEnglish] = useState([]);
    const [swahili, setSwahili] = useState([]);

    const navigate = useNavigate();

    // Using async/await in useEffect
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // const response = await axios.get('http://34.173.218.25:5000/api/videos');
                const response = await axios.get('https://almumininstitute.duckdns.org/api/videos');
                // const response = await axios.get('http://localhost:5000/api/videos');
                // setVideos(response.data);  // Setting videos state after fetching
                const videos = response.data;

                // Categorizing videos
                const mostpopular= videos.filter(video => video.category === 'mostpopular');
                const microsoftpacks= videos.filter(video => video.category === 'microsoftpacks');
                const softwaredev = videos.filter(video => video.category === 'softwaredev');
                const videoedit = videos.filter(video => video.category === 'videoedit');
                const photoedit= videos.filter(video => video.category === 'photoedit');
                const networking = videos.filter(video => video.category === 'networking');
                const systemadmin= videos.filter(video => video.category === 'systemadmin');
                const cybersec = videos.filter(video => video.category === 'cybersec');
                const digitalm = videos.filter(video => video.category === 'digitalm');
                const shariah= videos.filter(video => video.category === 'shariah');
                const arabic = videos.filter(video => video.category === 'arabic');
                const french = videos.filter(video => video.category === 'french');
                const english = videos.filter(video => video.category === 'english');
                const swahili = videos.filter(video => video.category === 'swahili');
                // Setting state for each category

                setMostpopular(mostpopular);
                setMicrosoftpacks(microsoftpacks);
                setSoftwaredev(softwaredev);
                setVideoedit(videoedit);
                setPhotoedit(photoedit);
                setNetworking(networking);
                setCybersec(cybersec);
                setSystemadmin(systemadmin);
                setDigitalm(digitalm);
                setShariah(shariah);
                setArabic(arabic);
                setFrench(french);
                setEnglish(english);
                setSwahili(swahili);
                



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
        <div className='body'>

               <div className='navbar'>
                         <div className='logodiv'>
                              {/* <img src='#g' alt='Almumin Digital Labs' className='logo' /> */}
                              {/* <h3 className='logo' >Explore !!!!</h3> */}
                         </div>

                        <form  className='searchbar' >

                                <input className='sinput' type='text' placeholder="Search for a course or video" />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='sicon' size='2x' />

                        </form>
         
                </div>

           <text className='categorytitle'>  1 . Most Popular  </text>
            
            <div className='section'>
                 
            {mostpopular.map((video) => (
                <div key={video._id} onClick={() => handleClick(video)}>
                    <img src={`${video.bannerImage}`} alt={video.title} className="scroll-image" />
                    <h3 className='vt'> Course Title </h3>
                    <h3 className='videotitle'>{video.title}</h3>
                </div>
            ))}
            </div>

       
              <text className='categorytitle'>  2 . Microsft Packages </text>
                
           
            <div className='section'>
            {microsoftpacks.map((video) => (
                <div key={video._id} onClick={() => handleClick(video)}>
                    <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image" />
                    <h3 className='vt'> Course Title </h3>
                    <h3 className='videotitle' >{video.title}</h3>
                </div>
            ))}
              </div>




           <text className='categorytitle'>  3 . Software Development  </text>


           <div className='section'>
                {softwaredev.map((video) => (
                    <div key={video._id} onClick={() => handleClick(video)}>
                        <img src={`${video.bannerImage}`} alt={video.title}   className="scroll-image" />
                        <h3 className='vt'> Course Title </h3>
                        <h3  className='videotitle'>{video.title}</h3>
               </div>
                ))}

            </div>



              <text className='categorytitle'>  4 . Motion Graphics & Video </text>
           <div className='section'>
                    {videoedit.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>


            <text className='categorytitle'>  5 . Graphic Design & Photo  </text>
           <div className='section'>
                    {photoedit.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>


            <text className='categorytitle'>  6 .  Networking & Cloud </text>
           <div className='section'>
                    {networking.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  7 . System Administration</text>
           <div className='section'>
                    {systemadmin.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  8 . CyberSecurity Course </text>
           <div className='section'>
                    {cybersec.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  9 . Shariah Studies </text>
           <div className='section'>
                    {shariah.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  10 . Arabic Language </text>
           <div className='section'>
                    {arabic.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  11 . Swahili Language </text>
           <div className='section'>
                    {swahili.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  12 . English Language</text>
           <div className='section'>
                    {english.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  13 . French Language </text>
           <div className='section'>
                    {french.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>

            <text className='categorytitle'>  14 . Digital Marketting  </text>
           <div className='section'>
                    {arabic.map((video) => (
                        <div key={video._id} onClick={() => handleClick(video)}>
                            <img src={`${video.bannerImage}`} alt={video.title}    className="scroll-image"/>
                            <h3 className='vt'> Course Title </h3>
                            <h3  className='videotitle'>{video.title}</h3>
                        </div>
                    ))}

            </div>







        </div>



    );
};

export default VideoList;




// import React from "react";
// import "./videolist.css";

// const VideoList = () => {
//   const images = [
//     "https://via.placeholder.com/200", 
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",
//     "https://via.placeholder.com/200",

//     // Add more images here
//   ];

//   return (
//     <div className="horizontal-scroll-container">
//       {images.map((src, index) => (
//         <img key={index} src={src} alt={`Image ${index + 1}`} className="scroll-image" />
//       ))}
//     </div>
//   );
// };

// export default VideoList;











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
