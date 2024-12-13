import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UploadForm from './comp/UploadForm';
// import VideoList from './comp/VideoList';
// import VideoPlayer from './comp/VideoPlayer';
import VideoList from './comp/VideoList';
import VideoPlayer from './comp/VideoPlayer';
import UploadVideo from './comp/UploadForm';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<VideoList />} />
                <Route path="/upload" element={<UploadVideo />} />
                <Route path="/video/:id" element={<VideoPlayer />} />
            </Routes>
        </Router>
    );
};

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import VideoList from './comp/VideoList';
// import VideoPlayer from './comp/VideoPlayer';
// import UploadVideo from './comp/UploadForm';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={VideoList} />
//         <Route path="/video/:id" element={VideoPlayer} />
//         <Route path="/upload" element={UploadVideo} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
