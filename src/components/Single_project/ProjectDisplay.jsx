import React from 'react'
import { useParams } from 'react-router-dom'
import './ProjectDisplay.css'
import { ProjectList } from './../Project/ProjectsData/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const ProjectDisplay = () => {
  const { id } = useParams()
  const Pro = ProjectList[id]
  return (
    <div className='Pro'>
      <h1>{Pro.name}</h1>
      <img src={Pro.img} alt="Project Img"/>
      <FontAwesomeIcon icon={faGithub}/>
    </div>
  )
}

export default ProjectDisplay