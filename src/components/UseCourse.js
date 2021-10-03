import { useEffect, useState } from "react"

const UseCourse=()=>{
    const [course,setCourse]=useState([])

    useEffect(()=>{
        fetch('./Courses.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])

    return [course]
}

export default UseCourse;