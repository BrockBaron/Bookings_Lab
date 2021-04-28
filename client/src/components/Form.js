import { postBooking } from "../BookingService";
import React from "react";

const Form = ({ bookings, setBookings }) => {
  const handleSubmit = (event) => {
    const newobj = {
      name: event.target.name.value,
      email: event.target.email.value,
      status: event.target.status.value,
    };

    const arrayCopy = [...bookings, newobj];
    postBooking(newobj);
    setBookings(arrayCopy);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" id="name" />
      <input type="text" id="email" />
      <input type="text" id="status" />
      <input type="submit" value="add Booking" />
    </form>
  );
};

export default Form;
