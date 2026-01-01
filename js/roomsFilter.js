 const roomsData = [
    {
        id: 1,
        name: "Luxury Suite",
        type: "luxury",
        price: 550,
        image: "../assests/Superior-King-Room-3-1024x688-1.jpg",
        description: "Spacious luxury suite with premium amenities",
        features: ["King Bed", "Sea View", "Mini Bar", "Jacuzzi"]
    },
    {
        id: 2,
        name: "Luxury King Room",
        type: "luxury",
        price: 450,
        image: "../assests/Superior-King-Room-3-1024x688-1.jpg",
        description: "Elegant king room with luxury furnishings",
        features: ["King Bed", "City View", "Smart TV"]
    },
    {
        id: 3,
        name: "Superior King",
        type: "superior",
        price: 280,
        image: "../assests/Superior-King-Room-3-1024x688-1.jpg",
        description: "Comfortable superior room with modern design",
        features: ["King Bed", "WiFi", "Work Desk"]
    },
    {
        id: 4,
        name: "Superior Twin",
        type: "superior",
        price: 260,
        image: "../assests/superior-twin.jpg",
        description: "Twin beds perfect for friends or family",
        features: ["2 Twin Beds", "WiFi", "Coffee Maker"]
    },
    {
        id: 5,
        name: "Superior Deluxe",
        type: "superior",
        price: 320,
        image: "../assests/superior-twin.jpg",
        description: "Enhanced superior room with extra space",
        features: ["Queen Bed", "Balcony", "Mini Fridge"]
    },
    {
        id: 6,
        name: "Standard Double",
        type: "standard",
        price: 180,
        image: "../assests/Bergen-Harbour-Standard-Queen-bedroom-scaled-e1648711820671.jpg",
        description: "Cozy double room with essential amenities",
        features: ["Double Bed", "WiFi", "TV"]
    },
    {
        id: 7,
        name: "Standard Twin",
        type: "standard",
        price: 170,
        image: "../assests/Bergen-Harbour-Standard-Single-1-1024x614-1.webp",
        description: "Standard room with twin beds",
        features: ["2 Single Beds", "WiFi", "TV"]
    },
    {
        id: 8,
        name: "Standard Plus",
        type: "standard",
        price: 200,
        image: "../assests/Bergen-Harbour-Standard-Queen-bedroom-scaled-e1648711820671.jpg",
        description: "Enhanced standard room with extra comfort",
        features: ["Queen Bed", "WiFi", "Work Area"]
    },
    {
        id: 9,
        name: "Economy Single",
        type: "economy",
        price: 90,
        image: "../assests/13-1-1-scaled-1.jpg",
        description: "Budget-friendly single room",
        features: ["Single Bed", "WiFi", "Shared Bath"]
    },
    {
        id: 10,
        name: "Economy Double",
        type: "economy",
        price: 120,
        image: "../assests/507-standard-room-1-scaled-1.jpg",
        description: "Affordable double room option",
        features: ["Double Bed", "WiFi", "Private Bath"]
    },
    {
        id: 11,
        name: "Economy Twin",
        type: "economy",
        price: 110,
        image: "../assests/13-1-1-scaled-1.jpg",
        description: "Budget room with twin beds",
        features: ["2 Single Beds", "WiFi", "Shared Bath"]
    },
    {
        id: 12,
        name: "Deluxe Signature Room",
        type: "luxury",
        price: 600,
        image: "../assests/Superior-King-Room-3-1024x688-1.jpg",
        description: "Our finest room with exclusive amenities",
        features: ["King Bed", "Ocean View", "Butler Service", "Premium Bar"]
    }
];

let filteredRooms = [...roomsData];

function displayRooms(rooms) {
    const container = document.getElementById('roomsContainer');
    
    if (rooms.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-bed" style="font-size: 4em; color: sienna;"></i>
                <h3>No rooms found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    
    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'room';
        roomCard.setAttribute('data-type', room.type);
        roomCard.setAttribute('data-price', room.price);
        
        roomCard.innerHTML = `
            <img src="${room.image}" alt="${room.name}">
            <div class="room-overlay">
                <div class="room-info">
                    <p class="room-name">${room.name}</p>
                    <p class="room-description">${room.description}</p>
                    <div class="room-features">
                        ${room.features.map(feature => `<span class="feature"><i class="fa-solid fa-check"></i> ${feature}</span>`).join('')}
                    </div>
                    <div class="room-price">
                        <span class="price">$${room.price}</span>
                        <span class="per-night">/night</span>
                    </div>
                    <button class="book-btn" onclick="bookRoom('${room.name}', ${room.price})">
                        <i class="fa-solid fa-calendar-check"></i> Book Now
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(roomCard);
    });
    
    updateResultsCount(rooms.length);
}

 
function applyFilters() {
    const typeFilter = document.getElementById('filterType').value;
    const priceFilter = document.getElementById('filterPrice').value;
    const sortBy = document.getElementById('sortBy').value;
    
    
    let filtered = roomsData.filter(room => {
        if (typeFilter !== 'all' && room.type !== typeFilter) {
            return false;
        }
        return true;
    });
    
   
    filtered = filtered.filter(room => {
        if (priceFilter === 'all') return true;
        
        const price = room.price;
        
        if (priceFilter === '0-100') return price < 100;
        if (priceFilter === '100-200') return price >= 100 && price < 200;
        if (priceFilter === '200-300') return price >= 200 && price < 300;
        if (priceFilter === '300-500') return price >= 300 && price < 500;
        if (priceFilter === '500+') return price >= 500;
        
        return true;
    });
    
     
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    filteredRooms = filtered;
    displayRooms(filtered);
}

 
function resetFilters() {
    document.getElementById('filterType').value = 'all';
    document.getElementById('filterPrice').value = 'all';
    document.getElementById('sortBy').value = 'default';
    
    filteredRooms = [...roomsData];
    displayRooms(roomsData);
}

 
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    const total = roomsData.length;
    
    if (count === total) {
        resultsCount.textContent = `Showing all ${total} rooms`;
    } else {
        resultsCount.textContent = `Showing ${count} of ${total} rooms`;
    }
}

 
function bookRoom(roomName, price) {
     
    const selectedRoom = {
        name: roomName,
        price: price,
        selectedDate: new Date().toISOString()
    };
    
    localStorage.setItem('selectedRoom', JSON.stringify(selectedRoom));
    
    
    window.location.href = 'Book.html';
}

 
window.addEventListener('load', () => {
    displayRooms(roomsData);
});