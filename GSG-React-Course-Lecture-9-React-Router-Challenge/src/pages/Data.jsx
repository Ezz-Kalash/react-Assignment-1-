import React from "react";
import { useParams } from "react-router-dom";
import studentsData from "../Data/studentData";

function Data(){
    const {id}=useParams();
    const student=studentsData.students.find((s)=>{
        return s.id === id
    })

    return(
        <>
        <h1>{student.first_name}</h1>
        <h1>{student.last_name}</h1>
        <h1>{student.email}</h1>


        </>


    )
}
export default Data