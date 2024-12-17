// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadForm = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         author: '',
//         description: '',
//         // category:''
//     });
//     const [bannerImage, setBannerImage] = useState(null);
//     const [video, setVideo] = useState(null);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         if (e.target.name === 'bannerImage') setBannerImage(e.target.files[0]);
//         if (e.target.name === 'video') setVideo(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const data = new FormData();
//         data.append('title', formData.title);
//         data.append('author', formData.author);
//         data.append('description', formData.description);
//         data.append('bannerImage', bannerImage);
//         data.append('video', video);

//         try {
//             await axios.post('http://localhost:5000/api/upload', data);
//             alert('Video uploaded successfully!');
//         } catch (error) {
//             console.error(error);
//             alert('Upload failed!');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input name="title" placeholder="Title" onChange={handleChange} required />
//             <input name="author" placeholder="Author" onChange={handleChange} required />
//             <textarea name="description" placeholder="Description" onChange={handleChange} required />
//             <input type="file" name="bannerImage" onChange={handleFileChange} required />
//             <input type="file" name="video" onChange={handleFileChange} required />
//             <button type="submit">Upload Video</button>
//         </form>
//     );
// };

// export default UploadForm;






import React, { useState } from 'react';
import axios from 'axios';

const UploadVideo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('microsoftpacks');
  const [author, setAuthor] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('author', author);
    formData.append('video', videoFile);
    formData.append('bannerImage', bannerFile);

    try {
      // const response = await axios.post('http://34.173.218.25:5000/api/videos/upload', formData, {
        const response = await axios.post('https://almumininstitute.duckdns.org/api/videos/upload', formData, {
          // const response = await axios.post('http://localhost:5000/api/videos/upload', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Video uploaded successfully:', response.data);
      alert('Files uploaded successfully!');
    } catch (err) {
      console.error('Error uploading video:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
  <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
  <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="" disabled>Select a Category</option>
   
    <option value="microsoftpacks">Microsoft Packages</option>
    <option value="softwaredev"> Software Development and Coding </option>
    <option value="videoedit">Motion Graphics and Videography</option>
    <option value="photoedit">Graphic Design and Photography</option>
    <option value="networking">Networking and Cloud Computing</option>
    <option value="systemadmin">System Administration</option>
    <option value="cybersec">Cyber Security and Ethical Hacking</option>
    <option value="digitalm">Digital Marketting</option>
    <option value="shariah">Shariah Studies</option>
    <option value="arabic">Arabic Language</option>
    <option value="french">French Language</option>
    <option value="english">English Language</option>
    <option value="swahili">Swahili Language</option>
    <option value="mostpopular">IDEAL</option>

  </select>

  <input
    type="file"
    accept="video/*"
    onChange={(e) => setVideoFile(e.target.files[0])}
    name="video" // This should match the backend field name
  />
  
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setBannerFile(e.target.files[0])}
    name="bannerImage" // This should match the backend field name
  />
  
  <button type="submit">Upload</button>
</form>

  );
};

export default UploadVideo;
