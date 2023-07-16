import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFountPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
