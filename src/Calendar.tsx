import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, addMonths, subMonths, getMonth } from 'date-fns';
import { IoArrowForwardSharp, IoArrowBackSharp } from 'react-icons/io5';

interface Event {
    date: Date;
    title: string;
    description: string;
}

interface CalendarProps {
    events?: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events = [] }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const startDay = startOfWeek(startOfMonth(currentDate));
    const endDay = endOfWeek(endOfMonth(currentDate));
    const days = eachDayOfInterval({ start: startDay, end: endDay });

    const months = Array.from({ length: 12 }, (_, i) => new Date(0, i));

    const setMonth = (month: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), month));
    };

    const previousYear = () => {
        setCurrentDate(prev => subMonths(prev, 12));
    };

    const nextYear = () => {
        setCurrentDate(prev => addMonths(prev, 12));
    };

    const dayHasEvents = (day: Date) => {
        return events.some(event => format(event.date, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd'));
    };

    const monthEvents = events.filter(event =>
        getMonth(event.date) === getMonth(currentDate) &&
        event.date.getFullYear() === currentDate.getFullYear()
    );

    return (
        <div className="flex flex-row">
            <div className="w-1/4 bg-gray-700 text-white p-4">
                <div className="flex justify-between items-center">
                    <button onClick={previousYear}><IoArrowBackSharp /></button>
                    <h1 className="text-xl font-bold">{format(currentDate, 'yyyy')}</h1>
                    <button onClick={nextYear}><IoArrowForwardSharp /></button>
                </div>
                {months.map((month, index) => (
                    <div key={index}
                        className={`p-2 cursor-pointer font-bold ${getMonth(currentDate) === index ? 'bg-primary' : 'bg-gray-700'}`}
                        onClick={() => setMonth(index)}>
                        {format(month, 'MMMM')}
                    </div>
                ))}
            </div>
            <div className="w-3/4 p-4">
                <div className="grid grid-cols-7 gap-4 text-center">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="font-bold">{day}</div>
                    ))}
                    {days.map(day => (
                        <div key={day.toString()}
                            className={`p-2 cursor-pointer ${dayHasEvents(day) ? 'bg-yellow-200' : 'bg-gray-100'} 
                            ${format(day, 'MM') !== format(currentDate, 'MM') ? 'text-gray-400' : 'text-black'}`}>
                            {format(day, 'd')}
                        </div>
                    ))}
                </div>
                <div className="w-full bg-gray-100 overflow-y-auto h-56 p-4 mt-4">
                    <h2 className="text-lg font-bold">{monthEvents.length <= 0 ? "No Events" : `Events for ${format(currentDate, 'MMMM yyyy')}`}</h2>
                    {monthEvents.map((event, index) => (
                        <div key={index} className="mt-2 p-2 border border-gray-300">
                            <h3 className="font-bold">{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
