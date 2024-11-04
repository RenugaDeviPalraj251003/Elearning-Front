
import React from 'react';
import "./courses.css";
 // Assuming CourseCard is in this path
import { CourseData } from '../../context/CourseContext';
import CourseCard from '../../components/coursecard/CourseCard';
const CoursesList = () => {
    const { courses } = CourseData();

    return (
        //<div className="courses-list">
            <div className="courses">
                <h2>Available Courses</h2>
                <div className="course-container">
                   
            { courses && courses.length > 0 ? (
                courses.map((course) => (
                    <CourseCard key={course._id} course={course}   className="course-card" />
                ))
            ) : (
                <p>No courses available</p>
            )}
           
        </div>
        </div>
       
    );
};

export default CoursesList;

