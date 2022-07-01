import React from 'react'
import { ProjectList } from './ProjectsData/ProjectList'
import "./Project.css"
import { useNavigate } from 'react-router-dom';
const Project = () => {
  const naviagte = useNavigate()
  return (
    <div className='Project'>
      <h1 className='Project-header'>My Personal Project</h1>
      <div className='projectList'>
      {
        ProjectList.map((project,id) => {
          return (
            <div className='pro' onClick={() => {
              naviagte('/project/' + id)
            }}>
              <div style={{ backgroundImage: `url(${project.img})` }} className="img"/>
              {console.log(project.img)}
              <h1>{project.name }</h1>
              
            </div>
          )
        })
        }
        </div>
    </div>
  )
}

export default Project