function generateDate() {
    const selection = document.getElementById("selection").value;
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const output = document.getElementById("randomDate");

output.innerHTML = ""; // Clear previous output

// Validate date inputs
if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    output.innerHTML = "Please enter valid dates.";
    return;
}
// Check if start date is before end date
if (startDate > endDate) {
    output.innerHTML = "Start date must be before end date.";
    return;
}
const dateCount = parseInt(selection);
let result = [];
// Generate random dates
for (let i = 0; i < dateCount; i++) {
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
    result.push(randomDate.toDateString()); // Displays Format "Day Month Date Year"
}
output.innerHTML = result.join("<br>"); // Display results
}