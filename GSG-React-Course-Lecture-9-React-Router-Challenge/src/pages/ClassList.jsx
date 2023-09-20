import React from "react";
import studentsData from "../Data/studentData";
import { Link } from "react-router-dom";
const ClassList = () => {

  const Dataa=studentsData.students.map((stud) =>{
    return <div>
      <Link to={`${stud.id}`} >
      <h1>{stud.first_name}</h1>
      </Link>
    </div>

  })
  
  return (
    <div className="box">
      <h1>React Bootcamp</h1>
      <h2>ClassList:</h2>
      {Dataa}
    </div>
  );
};

export default ClassList;
