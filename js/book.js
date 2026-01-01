var checkinInput=document.getElementById("checkIn")
var checkoutInput=document.getElementById("checkOut")
var adultInput=document.getElementById("adult")
var childrenInput=document.getElementById("children")
var typeInput=document.getElementById("roomType")
var confirm=document.getElementById("confirm")


confirm.addEventListener("click",function() {
    
    if (!checkinInput.value || !checkoutInput.value || !adultInput.value || !childrenInput.value || !typeInput.value) {
        alert('please fill all info⚠️');
        return;
    }

    if (new Date(checkoutInput.value) <= new Date(checkinInput.value)) {
        alert('check out date must after than check in date⚠️');
        return;
    }

    var Book={
     checkIn:checkinInput.value,
     checkOut:checkoutInput.value,
     adultNum:adultInput.value,
     childNum:childrenInput.value,
     type:typeInput.value
    }

     let bookings = JSON.parse(localStorage.getItem('hotelBookings') || '[]');
     bookings.push(Book);
     localStorage.setItem('hotelBookings', JSON.stringify(bookings));
     alert("Reservation Done")
     clear()
    window.location.href = 'myRooms.html';
     
});

function clear(){
 checkinInput.value="";
 checkoutInput.value= "";
 adultInput.value="";
 childrenInput.value="";
 typeInput.value="";
}

 

