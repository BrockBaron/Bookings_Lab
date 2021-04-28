import { postBooking } from "../BookingService";
import React from "react";

const Form = ({ bookings, setBookings }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const newobj = {
      name: event.target.name.value,
      email: event.target.email.value,
      status: false,
    };

    const arrayCopy = [...bookings, newobj];
    postBooking(newobj);
    setBookings(arrayCopy);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="enter name here" />
      <input type="text" id="email" placeholder="enter email address" />
      <input type="submit" value="add Booking" />
    </form>
  );
};

export default Form;
