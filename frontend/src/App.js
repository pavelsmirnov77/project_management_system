import {Route, Routes} from "react-router-dom";
import {StartPage} from "./pages/StartPage";
import {MainPage} from "./pages/MainPage";
import {NotFoundPage} from "./pages/NotFountPage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import ProfileInfoPage from "./pages/ProfileInfoPage";
import HomeworkPage from "./pages/HomeworkPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/api/auth/signin" element={<AuthPage/>}/>
            <Route path="/api/auth/signup" element={<RegisterPage/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/users/profile" element={<ProfileInfoPage/>}/>
            <Route path="/homework" element={<HomeworkPage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
