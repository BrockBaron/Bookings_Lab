import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import BookingList from "../components/BookingList";

const BookingContainer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((bookings) => setBookings(bookings));
  }, []);

  return (
    <>
      <Form setBookings={setBookings} bookings={bookings} />
      <BookingList bookings={bookings} setBookings={setBookings} />
    </>
  );
};

export default BookingContainer;
