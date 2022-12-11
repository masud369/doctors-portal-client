import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingsData = [
  {
    id: "1",
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: "2",
    subject: "Cosmetic Dentistry",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: "3",
    subject: "Teeth Cleaning",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: "4",
    subject: "Cavity Protection",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: "5",
    subject: "Theet Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: "6",
    subject: "Theet Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];

const AppointmentBookings = ({ date }) => {
  return (
    <div className="my-5">
      <h2 className="text-center text-brand fw-bolder my-4">
        Available Appointment on {date.toDateString()}
      </h2>
      <div className="container">
        <div className="row">
          {bookingsData.map((bookingsData) => (
            <BookingCard date={date} bookingsData={bookingsData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookings;
