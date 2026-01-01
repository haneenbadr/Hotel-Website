 function display() {
     
    var bookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]');
    
    var cartona = ``;
    
     
    if (bookings.length === 0) {
        cartona = `
            <div class="empty-message">
                <h2>There are not any reservations now🏨</h2>
            </div>
        `;
    }
     else {
         
        for (var i = 0; i < bookings.length; i++) {
            cartona += `
                <div class="room">
                    <div class="room-header">
                        <h2>Booking #${i + 1}</h2>
                        <button class="delete-btn" onclick="deleteBooking(${i})">🗑️ Delete</button>
                    </div>
                    <div class="room-details">
                        <h3>Type of Room: <span>${bookings[i].type}</span></h3>
                        <h3>Check In Date: <span>${bookings[i].checkIn}</span></h3>
                        <h3>Check Out Date: <span>${bookings[i].checkOut}</span></h3>
                        <h3>Number of Adults: <span>${bookings[i].adultNum}</span></h3>
                        <h3>Number of Children: <span>${bookings[i].childNum}</span></h3>
                    </div>
                </div>
            `;
        }
    }
    
    document.getElementById("roomsContainer").innerHTML = cartona;
}

 
function deleteBooking(index) {
    if (confirm('are you sure from deleting this reservation?')) {
        var bookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]');
        bookings.splice(index, 1);
        localStorage.setItem('hotelBookings', JSON.stringify(bookings));
        display();  
    }
}

// دالة لحذف جميع الحجوزات
function clearAll() {
    if (confirm('are you sure from deleting all reservations')) {
        localStorage.removeItem('hotelBookings');
        display();
    }
}

// عرض الحجوزات عند تحميل الصفحة
window.addEventListener('load', display);