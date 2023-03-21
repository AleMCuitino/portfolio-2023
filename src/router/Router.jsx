import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Projects from "../views/ProjectsList";
import Cv from "../views/Cv";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>     
                <Route path="/proyectos" element={<Projects />}></Route>
                <Route path="/cv/alemcuitino" element={<Cv />}></Route>   
            </Routes>
        </BrowserRouter>
    );
};

export default Router;