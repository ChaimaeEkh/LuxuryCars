const carData = [
    {
        id: 1,
        name: "Mercedes-Benz S-Class",
        type: "sedan",
        price: "$95,000",
        year: 2024,
        engine: "3.0L V6",
        transmission: "9-speed automatic",
        image: "https://i.pinimg.com/736x/73/fa/d8/73fad853177cddd2b8923d2c285572a2.jpg"
    },
    {
        id: 2,
        name: "BMW X7",
        type: "suv",
        price: "$77,000",
        year: 2024,
        engine: "4.4L V8",
        transmission: "8-speed automatic",
        image: "https://i.pinimg.com/736x/b1/63/51/b16351bebc0c25b6e5134e6a6feec5f7.jpg"
    },
    {
        id: 3,
        name: "Porsche 911",
        type: "sports",
        price: "$106,000",
        year: 2024,
        engine: "3.0L Twin-Turbo",
        transmission: "7-speed PDK",
        image: "https://i.pinimg.com/736x/0e/e1/e1/0ee1e189120741a731547a35b702b15f.jpg"
    }
];

// DOM Elements
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const filterButtons = document.querySelectorAll('.filter-btn');
const carList = document.getElementById('carList');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter cars
        const filterValue = button.getAttribute('data-filter');
        displayCars(filterValue);
    });
});

// Display cars function
function displayCars(filter = 'all') {
    const filteredCars = filter === 'all' 
        ? carData 
        : carData.filter(car => car.type === filter);

    carList.innerHTML = filteredCars.map(car => `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
            </div>
            <div class="car-details">
                <h3>${car.name}</h3>
                <div class="car-price">${car.price}</div>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-engine"></i> ${car.engine}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                    <span><i class="fas fa-car"></i> ${car.type.toUpperCase()}</span>
                </div>
                <a href="#" class="car-btn">View Details</a>
            </div>
        </div>
    `).join('');
}

// Initial display
displayCars();