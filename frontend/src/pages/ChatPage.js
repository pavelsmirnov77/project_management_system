import MenuBar from '../components/MenuBar';
import '../css/teacherChatStyle.css';
import TeacherChat from "../components/TeacherChat";


const ChatPage = () => {
    return (
        <div>
            <MenuBar/>
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <TeacherChat/>
            </div>
        </div>
    )
};

export default ChatPage;
