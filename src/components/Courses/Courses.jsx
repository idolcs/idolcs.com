import React from "react";
import { Link } from "react-router-dom";
import RequestCourseForm from "./RequestCourseForm/RequestCourseForm";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "B.Sc Computer Science",
    },
    {
      id: 2,
      title: "B.Sc Information Technology",
    },
    {
      id: 3,
      title: "M.Sc Computer Science",
    },
    {
      id: 4,
      title: "M.Sc Information Technology",
    },
  ];
  const [toggleRequestCourse, setToggleRequestCourse] = React.useState(false);
  const handleToggleRequestCourse = () => {
    setToggleRequestCourse(!toggleRequestCourse);
  };
  return (
    <>
    <div>
        {toggleRequestCourse ? (<RequestCourseForm setToggleRequestCourse={setToggleRequestCourse} />) : ""}    
    </div>
      <div className="relative m-auto mx-4 my-12 flex min-h-[55vh] max-w-full flex-col">
        <h2 className="text-[1.3em]">Select Course</h2>
        {courses.map((course) => (
          <button
            key={course.id}
            className="mt-3 rounded bg-[#6B71D0] p-3 text-left"
          >
            <h3 className=" font-semibold text-[#1F2138]">{course.title}</h3>
          </button>
        ))}
        <p className="mt-3 text-center text-sm">
          Not seeing your course?{" "}
          <a href="#" className="underline" onClick={handleToggleRequestCourse}>
            Request a new course
          </a>
        </p>
      </div>
    </>
  );
};

export default Courses;
