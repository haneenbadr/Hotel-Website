const btn = document.getElementById("checkBtn");

btn.addEventListener("click", function () {
    const bookingData = {
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value,
        adult: document.getElementById("adult").value,
        children: document.getElementById("children").value,
        roomType: document.getElementById("roomType").value
    };

    if (!bookingData.checkIn || !bookingData.checkOut) {
        alert("Please select check-in and check-out dates");
        return;
    }

     
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
 
    bookings.push(bookingData);

 
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking data saved successfully!");
});