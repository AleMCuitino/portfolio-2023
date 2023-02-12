import React from 'react';
import Projects from "../component/projects/Projects";
import Navbar from "../component/navbar/Navbar";

const ProjectsList = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Projects />
        </React.Fragment>
    )
}

export default ProjectsList