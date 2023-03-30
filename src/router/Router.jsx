import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/ProjectsList";
import ProjectDetail from "../views/ProjectDetail"
import Cv from "../views/Cv";
import AboutMe from "../views/AboutMe";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>     
                <Route path="/proyectos" element={<Projects />}></Route>
                <Route path="/proyecto/:id" element={<ProjectDetail />}></Route>
                <Route path="/cv/alemcuitino" element={<Cv />}></Route>   
                <Route path="/sobremi" element={<AboutMe />}></Route>   
            </Routes>
        </BrowserRouter>
    );
};

export default Router;