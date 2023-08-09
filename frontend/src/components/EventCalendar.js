import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.css'

const EventCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [markedDates, setMarkedDates] = useState([]);

    const handleDateClick = date => {
        setSelectedDate(date);
    };

    const handleAddMark = () => {
        setMarkedDates([...markedDates, selectedDate]);
    };

    const tileContent = ({date, view}) => {
        if (view === 'month') {
            return markedDates.find(markDate => markDate.toDateString() === date.toDateString()) ? (
                <div className="mark"></div>
            ) : null;
        }
    };

    return (
        <div className="event-calendar">
            <Calendar
                value={selectedDate}
                onChange={handleDateClick}
                tileContent={tileContent}
                calendarType="US"
                className="calendar"
            />
            <button onClick={handleAddMark} className="add-mark-button">
                Добавить пометку
            </button>
        </div>
    );
};

export default EventCalendar;
