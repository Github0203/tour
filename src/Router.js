import {BrowserRouter, Routes, Route } from "react-router-dom";
import Bocatvang from "./pages/gioithieu/Bocatvang";
import Gioithieuvecongty from "./pages/gioithieu/Gioithieuvecongty";
import Home from "./pages/Home";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/bocatvang' element={<Bocatvang /> } />
            <Route path='/about' element={<Gioithieuvecongty />} />
            <Route exact path="/" element={<Home />} />
            </Routes>
            </BrowserRouter>            
    );
};

export default Router;
