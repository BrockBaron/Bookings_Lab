import React from "react";
import { deleteBooking } from "../BookingService";

const Booking = ({ setBookings, bookings, name, email, status, id }) => {
  const handleDelete = () => {
    const newArray = bookings.filter((booking) => {
      return booking._id !== id;
    });
    setBookings(newArray);
    deleteBooking(id);
  };
  return (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{status}</p>
      <input type="button" onClick={handleDelete} value="delete" />
    </>
  );
};

export default Booking;
