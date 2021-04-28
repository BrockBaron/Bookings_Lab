import React from "react";
import Booking from "./Booking";

const BookingList = ({ setBookings, bookings }) => {
  const Bookings = bookings.map((booking, index) => {
    return (
      <Booking
        setBookings={setBookings}
        bookings={bookings}
        key={index}
        name={booking.name}
        email={booking.email}
        status={booking.status}
        id={booking._id}
      />
    );
  });

  return <div>{Bookings}</div>;
};

export default BookingList;
