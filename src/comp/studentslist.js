import React, { useState, useEffect } from 'react'; 
import axios from 'axios';


export default function Students()
{

    const [students, setStudents] = useState([]);
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                // const response = await axios.get('http://34.173.218.25:5000/api/videos');
                const response = await axios.get('https://almumininstitute.duckdns.org/api/students/');
                // const response = await axios.get('http://localhost:5000/api/students/');
                setStudents(response.data);  // Setting videos state after fetching
              
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchStudents();
    }, []); // Empty dependency array to run only once when the component mounts


    return(

        <div>
                {students.map((student) => (
                <div key={student._id} >
                    
                    <h3 style={{color:"red"}}>{student.name}</h3>
                    <h3>{student.email}</h3>
                    <h3>{student.category}</h3>
                    <h3>{student.phone}</h3>
                    <h3>{student.date}</h3>
                </div>
            ))}

        </div>
    )
}