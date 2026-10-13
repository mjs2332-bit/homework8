
// HOMEWORK 8
// Advanced JavaScript Interactivity
// Mark St Geme

console.log("Hello World!");
console.log("Homework 8 JavaScript loaded!");


// =====================================
// STEP 1: ADD SKILLS USING USER INPUT
// =====================================

const skillForm = document.getElementById("skillForm");
const skillInput = document.getElementById("skillInput");
const skillsList = document.getElementById("skillsList");
const skillMessage = document.getElementById("skillMessage");

skillForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const newSkill = skillInput.value.trim();

    if (newSkill !== "") {
        const newItem = document.createElement("li");

        newItem.textContent = newSkill;
        skillsList.appendChild(newItem);

        skillMessage.textContent =
            newSkill + " was added successfully!";

        skillInput.value = "";
    } else {
        skillMessage.textContent =
            "Please enter a valid skill.";
    }
});


// =====================================
// STEP 2: THREE PROJECT ARRAYS
// =====================================

const projectTitles = [
    "Portfolio Website",
    "Calculator",
    "Student Management System"
];

const projectDescriptions = [
    "A personal portfolio created using HTML, CSS, and JavaScript.",
    "A calculator program that performs basic arithmetic operations.",
    "A program used to manage student names and grades."
];

// Example dates for the assignment.
// Replace them with actual dates if available.
const projectDeadlines = [
    "2026-10-20",
    "2026-09-15",
    "2026-11-10"
];

const projectsList = document.getElementById("projectsList");


// =====================================
// STEP 3: LOOP AND DEADLINE COMPARISON
// =====================================

const today = new Date();
today.setHours(0, 0, 0, 0);

for (let i = 0; i < projectTitles.length; i++) {

    const deadline = new Date(
        projectDeadlines[i] + "T00:00:00"
    );

    let status = "";

    if (deadline > today) {
        status = "Ongoing";
    } else if (deadline < today) {
        status = "Completed";
    } else if (deadline.getTime() === today.getTime()) {
        status = "Due Today";
    }

    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = projectTitles[i];

    const description = document.createElement("p");
    description.textContent = projectDescriptions[i];

    const deadlineText = document.createElement("p");
    deadlineText.textContent =
        "Deadline: " + projectDeadlines[i];

    const statusText = document.createElement("p");
    statusText.textContent =
        "Status: " + status;

    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(deadlineText);
    projectCard.appendChild(statusText);

    projectsList.appendChild(projectCard);
}


// =====================================
// STEP 4: RESUME DOWNLOAD COUNTER
// =====================================

let downloadCount = 0;

const resumeButton =
    document.getElementById("resumeDownload");

const downloadDisplay =
    document.getElementById("downloadCount");

resumeButton.addEventListener("click", function() {

    downloadCount++;

    downloadDisplay.textContent = downloadCount;
});


// =====================================
// STEP 5: DYNAMIC EDUCATION TABLE
// =====================================

const educationData = [
    [
        "Cybersecurity Student",
        "Northern Arizona University",
        "2026",
        "Present"
    ]
];

function createTable(containerId, headings, data) {

    const container =
        document.getElementById(containerId);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    for (let i = 0; i < headings.length; i++) {

        const th = document.createElement("th");
        th.textContent = headings[i];

        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let i = 0; i < data.length; i++) {

        const row = document.createElement("tr");

        for (let j = 0; j < data[i].length; j++) {

            const cell = document.createElement("td");
            cell.textContent = data[i][j];

            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    container.appendChild(table);
}

createTable(
    "educationTable",
    ["Program", "University", "Start Date", "End Date"],
    educationData
);


// =====================================
// STEP 5: DYNAMIC EXPERIENCE TABLE
// =====================================

const experienceData = [
    [
        "Student Developer",
        "Personal Programming Projects",
        "2026",
        "Present"
    ]
];

createTable(
    "experienceTable",
    ["Role", "Company / Project", "Start Date", "End Date"],
    experienceData
);


// =====================================
// BONUS: LIGHT AND DARK MODE
// =====================================

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent =
            "Switch to Light Mode";
    } else {
        themeToggle.textContent =
            "Switch to Dark Mode";
    }
});


// =====================================
// BONUS: CHANGE FONT SIZE
// =====================================

const fontSizeSelect =
    document.getElementById("fontSize");

fontSizeSelect.addEventListener("change", function() {

    document.body.style.fontSize =
        fontSizeSelect.value + "px";
});


// =====================================
// BONUS: CHANGE BACKGROUND COLOR
// =====================================

const backgroundColor =
    document.getElementById("backgroundColor");

backgroundColor.addEventListener("input", function() {

    document.body.style.backgroundColor =
        backgroundColor.value;
});
