import React from 'react';
import Navbar from "../component/navbar/Navbar";
import ProjectId from '../component/project/ProjectId';
import { useParams } from 'react-router';


const ProjectDetail = () => {
    const {id} = useParams()
        console.log(id)
    return (
        <React.Fragment>
            <Navbar />
            <ProjectId />
        </React.Fragment>
    )
}

export default ProjectDetail;
