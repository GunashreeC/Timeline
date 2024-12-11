const events = [
    {
        year: 1987,
        title: "Tapas Das Gupta, MD - 1st Director",
        description: "Launched the Diverse Biorepository. Key efforts included community interventions for cancer prevention (P01CA042760).",
        image: "tapas-das-gupta.png"
    },
    {
        year: 1980,
        title: "Richard Warnecke, PhD",
        description: "Launched Health Disparities & Cancer Control Research. Key focus on cancer control and population sciences.",
        image: "richard-warnecke.png"
    },
    {
        year: 2007,
        title: "Gary Kruh, MD - 4th Director",
        description: "Established the first comprehensive Patient Navigation Center at UIC. Key projects included the UIC Center for Population Health and Health Disparities (P50 CA106743) and Cancer Education and Career Development (T32CA057699).",
        image: "gary-kruh.png"
    },
    {
        year: 2015,
        title: "Robert A. Winn, MD - 6th Director",
        description: "Initiated a community focus with the Chicago Cancer Health Equity Collaborative (CHEC) (U54CA202995).",
        image: "robert-winn.png"
    },
    {
        year: 2020,
        title: "Jan Kitajewski, PhD - 7th Director",
        description: "Focused on community-to-bench research. Established the ACS Illinois Cancer Health Equity Research Center (I-CHER) (MSI-21-168-01).",
        image: "jan-kitajewski.png"
    }
];

let currentIndex = 0;

function showEvent(index) {
    const event = events[index];
    document.querySelector(".event-image").src = event.image;
    document.querySelector(".event-text h2").textContent = event.year;
    document.querySelector(".event-text h3").textContent = event.title;
    document.querySelector(".event-text p").textContent = event.description;

    document.querySelectorAll(".timeline-point").forEach((point, idx) => {
        point.classList.toggle("active", idx === index);
    });

    currentIndex = index;
}

function navigate(direction) {
    const newIndex = Math.min(Math.max(currentIndex + direction, 0), events.length - 1);
    showEvent(newIndex);
}

// Initialize with the first event
showEvent(currentIndex);
