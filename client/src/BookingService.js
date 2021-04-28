const BaseUrl = "http://localhost:5000/api/bookings";

export const postBooking = (booking) => {
  fetch(BaseUrl, {
    method: "POST",
    body: JSON.stringify(booking),
    headers: { "Content-type": "application/json" },
  }).then((res) => res.json());
};

export const getBooking = () => {
  fetch(BaseUrl).then((res) => res.json());
};
