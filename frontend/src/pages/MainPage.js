import MenuBar from "../components/MenuBar";
import Clock from "../components/Clock";
import EventCalendar from "../components/EventCalendar";

export const MainPage = () => {
    return(
        <div>
            <MenuBar/>
            <div style={{position: "absolute", top: "80px", right: "16px"}}>
                <Clock/>
                <EventCalendar/>
            </div>
        </div>
    )
}