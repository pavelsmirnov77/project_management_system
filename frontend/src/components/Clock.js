import React, {useState, useEffect} from "react";
import {Card} from "antd";
import {CalendarOutlined, ClockCircleOutlined} from "@ant-design/icons";
import moment from "moment";

export const Clock = () => {
    const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
    const [selectedDate] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format("HH:mm:ss"));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Card
            style={{
                width: "270px",
                textAlign: "center",
                padding: "8px",
                background: "#2867fa",
                color: "#fff",
                fontSize: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
            hoverable
        >
            <div style={{marginBottom: "16px"}}>
                <CalendarOutlined style={{fontSize: "24px", marginRight: "8px"}}/>
                {selectedDate.format("DD-MM-YYYY")}
            </div>
            <div style={{marginBottom: "8px"}}>
                <ClockCircleOutlined style={{fontSize: "24px", marginRight: "8px"}}/>
                {currentTime}
            </div>
        </Card>
    );
};

export default Clock;