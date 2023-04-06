// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Assets/Custom.scss'
import Home from './Pages/Home';
function App() {



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>;
            </BrowserRouter>
            {/* <div id="large-header" class="large-header">
                <canvas id="demo-canvas"></canvas>
                <h1 class="main-title">Connect <span class="thin">Three</span></h1>
            </div> */}
        </>
    );
}

export default App;
