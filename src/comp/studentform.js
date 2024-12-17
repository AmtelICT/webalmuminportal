import React, { useState } from 'react';
import './studentform.css';
import axios from 'axios';

const ContactUs = () => {
//   const [subject, setSubject] = useState('biology');

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [category, setCategory] = useState('microsoftpacks');
//   const [phone, setPhone] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('phone', phone);
//     formData.append('category', category);
//     formData.append('date', date);

//     try {
//         // const response = await axios.post('http://34.173.218.25:5000/api/videos/upload', formData, {
//           const response = await axios.post('https://almumininstitute.duckdns.org/api/students/create', formData, {
//             // const response = await axios.post('http://localhost:5000/api/students/create', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         console.log('User Created successfully:', response.data);
//         alert('Request received successfully, Kindly check your email!');
//       } catch (err) {
//         console.error('Error uploading video:', err.response ? err.response.data : err);
//         alert('Errorfgfg uploading video:',err.response ? err.response.data : err);
//       }
//     };





const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date:'',
    category: '', // Added category
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://almumininstitute.duckdns.org/api/students/create', formData);
      setResponseMessage(response.data.success);
      setFormData({ name: '', email: '', phone: '', category: '', date:'' }); // Reset category
      alert("Request received successfully, Kindly check your email!")
    } catch (error) {
      setResponseMessage(error.response?.data?.error || 'Something went wrong!');
    }
  };


  return (
    <div className="contact-us-page">
      <form   onSubmit={handleSubmit} className="contact-form">
        <h1>Registration Form</h1>
        <input 
          type="text"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)} 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
          placeholder="Your Full Name" 
          className="form-input" 
        />
        <input 
          type="email" 
          
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your Email" 
          className="form-input" 
        />
          <input 
          type="phone" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Lambarka Telephoneka" 
          className="form-input" 
        />
             <input 
          type="date" 
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          placeholder="Date of Birth YYYY-MM-DD" 
          className="form-input" 
        />
        <select
        name="category"
          className="form-select"
        //   value={category}
        //   onChange={(e) => setCategory(e.target.value)}
        value={formData.category}
        onChange={handleChange}
        required
        >
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
        </select>
     
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactUs;
