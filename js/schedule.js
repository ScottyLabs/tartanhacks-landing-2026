// Injects schedule events into the page, following the pattern from faq.js and prizes.js

// Schedule data: maps time slots to events beginning during that hour
// Each day contains an object where keys are time strings and values are arrays of events
const schedule = {
    weekBefore: {
        "Monday 5:30-6:30pm": [
            { name: "Agentuity", location: "" }
        ],
        "Tuesday 6:00-7:00pm": [
            { name: "Modal", location: "" }
        ],
        "Wednesday 5:00-6:00pm": [
            { name: "AppLovin", location: "" }
        ],
        "Thursday 5:30-6:30 PM": [
            { name: "IMC Trading", location: "" }
        ]
    },
    friday: {
        "3:00-4:00 PM": [
            { name: "Check-In", location: "Connan Room", details: "Provide participant guides, stickers, wifi access code" },
            { name: "Sponsorship Expo", location: "" },
            { name: "Team Formation", location: "" }
        ],
        "4:00-5:00 PM": [
            { name: "Opening Ceremony", location: "McConomy Auditorium", details: "Overflow: TBD" }
        ],
        "5:00 PM": [
            { name: "HACKING STARTS", location: "Weigand Gym", featured: true }
        ],
        "5:30-6:30 PM": [
            { name: "Ripple Talk", location: "" }
        ],
        "6:30-7:30 PM": [
            { name: "Wolfram Key Note", location: "" }
        ],
        "7:00-8:00 PM": [
            { name: "Telora Talk", location: "PMW" }
        ],
        "7:30-8:30 PM": [
            { name: "Dinner", location: "Weigand Gym" }
        ],
        "8:00-9:00 PM": [
            { name: "Dedalus Talk", location: "" }
        ],
        "9:30-10:30 PM": [
            { name: "Conway Talk", location: "" }
        ]
    },
    saturday: {
        "12:00 AM": [
            { name: "Midnight Snack", location: "", details: "Make sure unlocked at midnight" }
        ],
        "12:30-1:30 AM": [
            { name: "Karaoke", location: "" }
        ],
        "9:00-11:00 AM": [
            { name: "Breakfast", location: "Weigand Gym" }
        ],
        "11:00-12:00 PM": [
            { name: "AppLovin Resume Workshop", location: "" }
        ],
        "12:30-1:30 PM": [
            { name: "Visa Talk", location: "" }
        ],
        "1:30-2:30 PM": [
            { name: "Lunch", location: "Weigand Gym" }
        ],
        "5:00 PM": [
            { name: "SUBMISSION DEADLINE", location: "", featured: true }
        ],
        "5:30-8:00 PM": [
            { name: "Judging Expo", location: "Weigand Gym" }
        ],
        "8:00-9:00 PM": [
            { name: "Dinner", location: "Weigand Gym" }
        ],
        "8:30-9:00 PM": [
            { name: "Merch Distribution + Boba", location: "Connan Room" }
        ],
        "9:00-10:00 PM": [
            { name: "Closing Ceremony", location: "McConomy Auditorium", featured: true }
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
    renderScheduleDay(schedule.weekBefore, "schedule-weekBefore", "weekBefore");
    renderScheduleDay(schedule.friday, "schedule-friday", "friday");
    renderScheduleDay(schedule.saturday, "schedule-saturday", "saturday");
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSchedule);
} else {
    initSchedule();
}
