import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourse, setLikedcourse] = useState([]);
  let allCourses = [];
  function getCourses() {
    if (category === "All") {
      // yaha api se data ko ek single array me convert kiya gya hai
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // main sirf pecific categoriy ka data array krunga
      return courses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center  gap-4 mb-4 ">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourse={likedCourse}
            setLikedcourse={setLikedcourse}
          />
        );
      })}
    </div>
  );
};

export default Cards;
