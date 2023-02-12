import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/ProjectsList"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>     
                <Route path="/proyectos" element={<Projects />}></Route>   
            </Routes>
        </BrowserRouter>
    );
};

export default Router;