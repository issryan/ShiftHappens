import React from 'react';
import Nav from '../components/Nav/Nav.jsx'
import MyCalendar from '../components/Calendar/Calendar.jsx';

const Calendar = () => {
  return (
    <>
    <Nav/>
    <div>
      <MyCalendar />
    </div>
    </>
  );
}

export default Calendar;