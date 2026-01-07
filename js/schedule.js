// Injects schedule events into the page, following the pattern from faq.js and prizes.js

// Schedule data: maps time slots to events beginning during that hour
// Each day contains an object where keys are time strings and values are arrays of events
const schedule = {
    friday: {
        "3:00 PM": [
            { name: "Check In Begins + Sponsorship Expo", location: "Connan" },
            { name: "Team Formation", location: "Connan" }
        ],
        "4:00 PM": [
            { name: "Opening Ceremony", location: "McConomy" }
        ],
        "5:00 PM": [
            { name: "Hacking Starts", location: "Weigand Gym", featured: true }
        ],
        "7:30 PM": [
            { name: "Dinner", location: "Weigand Gym" }
        ]
    },
    saturday: {
        "12:00 AM": [
            { name: "Midnight Snack", location: "TBD" }
        ],
        "12:30 AM": [
            { name: "Karaoke", location: "TBD" }
        ],
        "9:00 AM": [
            { name: "Breakfast", location: "Weigand Gym" }
        ],
        "1:30 PM": [
            { name: "Lunch", location: "Weigand Gym" }
        ],
        "5:00 PM": [
            { name: "Hacking Ends", location: "Weigand Gym" }
        ],
        "5:30 PM": [
            { name: "Judging Expo", location: "Weigand Gym" }
        ],
        "8:00 PM": [
            { name: "Dinner", location: "Weigand Gym" }
        ],
        "9:00 PM": [
            { name: "Merch Distribution + Boba", location: "Connan" }
        ],
        "9:30 PM": [
            { name: "Closing Ceremony", location: "McConomy", featured: true }
        ]
    }
};

function renderScheduleDay(dayData, containerId, dayName) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Get all time slots for this day
    const timeSlots = Object.keys(dayData);

    for (const time of timeSlots) {
        const events = dayData[time];

        // Create a time row for this slot
        const timeRow = document.createElement("div");
        timeRow.classList.add("schedule-time-row");

        // Create the time label
        const timeLabel = document.createElement("div");
        timeLabel.classList.add("schedule-time-label");
        timeLabel.innerHTML = `<span>${time}</span>`;
        timeRow.appendChild(timeLabel);

        // Create events container for this time slot
        const eventsContainer = document.createElement("div");
        eventsContainer.classList.add("schedule-events");

        for (const event of events) {
            const eventCard = document.createElement("div");
            eventCard.classList.add("schedule-event-card");
            // Add featured class if applicable
            if (event.featured) {
                eventCard.classList.add("schedule-event-featured-" + dayName);
            }

            eventCard.innerHTML = `
                <div class="schedule-event-name">${event.name}</div>
                <div class="schedule-event-location">${event.location}</div>
            `;
            eventsContainer.appendChild(eventCard);
        }

        timeRow.appendChild(eventsContainer);
        container.appendChild(timeRow);
    }
}

function initSchedule() {
    renderScheduleDay(schedule.friday, "schedule-friday", "friday");
    renderScheduleDay(schedule.saturday, "schedule-saturday", "saturday");
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSchedule);
} else {
    initSchedule();
}
