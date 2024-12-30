import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Include default styles

const ImportantDays = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Define important days and their events (example: Hanuman Jayanti and other events)
  const importantDates = [
    { date: new Date("2024-04-06"), event: "Hanuman Jayanti" },
    { date: new Date("2024-05-05"), event: "Special Pooja" },
    { date: new Date("2024-06-15"), event: "Temple Anniversary" },
    { date: new Date("2024-12-25"), event: "Christmas Special Pooja" }, // Example
  ];

  // Function to check if the date is an important day
  const isImportantDate = (date) => {
    return importantDates.find(
      (importantDate) =>
        importantDate.date.getDate() === date.getDate() &&
        importantDate.date.getMonth() === date.getMonth() &&
        importantDate.date.getFullYear() === date.getFullYear()
    );
  };

  // Function to get important events for the selected month
  const getImportantEventsForMonth = (month) => {
    return importantDates.filter(
      (importantDate) => importantDate.date.getMonth() === month
    );
  };

  // Handle date selection
  const onDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  // Get important events for the selected month
  const importantEventsThisMonth = getImportantEventsForMonth(
    selectedDate.getMonth()
  );

  return (
    <div>
      <h2 className="text-center">Important Days</h2>
      <Calendar
        className="w-100 h-50"
        style={{ width: "100% !important" }}
        onChange={onDateChange}
        value={selectedDate}
        tileContent={({ date, view }) =>
          view === "month" && isImportantDate(date) ? (
            <div className="highlight-event">
              {
                importantDates.find(
                  (importantDate) =>
                    importantDate.date.getDate() === date.getDate() &&
                    importantDate.date.getMonth() === date.getMonth() &&
                    importantDate.date.getFullYear() === date.getFullYear()
                ).event
              }
            </div>
          ) : null
        }
      />
      <p className="text-center mt-3">
        {importantEventsThisMonth.length > 0
          ? `Important events this month: ${importantEventsThisMonth
              .map((event) => event.event)
              .join(", ")}`
          : "No important events this month."}
      </p>
    </div>
  );
};

export default ImportantDays;
