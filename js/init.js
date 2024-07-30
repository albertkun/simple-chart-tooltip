// Helper function to create a div with a tooltip
function createDivWithTooltip(className, id, tooltipText, widthPercentage) {
    let div = document.createElement('div');
    div.className = className;
    div.id = id;
    div.style.width = widthPercentage + '%';

    let tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    div.appendChild(tooltip);

    return div;
}

// Function to create progress bar elements
function createProgressBarElements(elementId, data) {
    let container = document.createElement('div');
    container.className = 'progress-bar-container';
    container.id = elementId;

    // Create and append header
    let header = document.createElement('h3');
    header.textContent = elementId.charAt(0).toUpperCase() + elementId.slice(1);
    container.appendChild(header);

    // Calculate total for percentage calculation
    let total = data.positive + data.negative + data.neutral;

    // Create a div to hold the progress bars
    let progressBarWrapper = document.createElement('div');
    progressBarWrapper.className = 'progress-bar';

    // Create and append positive, negative, and neutral divs with tooltips
    progressBarWrapper.appendChild(createDivWithTooltip('positive', `${elementId}Positive`, `Positive: ${data.positive}`, (data.positive / total) * 100));
    progressBarWrapper.appendChild(createDivWithTooltip('negative', `${elementId}Negative`, `Negative: ${data.negative}`, (data.negative / total) * 100));
    progressBarWrapper.appendChild(createDivWithTooltip('neutral', `${elementId}Neutral`, `Neutral: ${data.neutral}`, (data.neutral / total) * 100));

    // Append progress bar wrapper to container
    container.appendChild(progressBarWrapper);

    // Append container to chart
    let chart = document.getElementById('chart');
    if (chart) {
        chart.appendChild(container);
    } else {
        console.error('Element with ID "chart" not found.');
    }
}

// Function to create and append a heading to the chart container
function createChartHeading(text) {
    let heading = document.createElement('h2');
    heading.textContent = text;
    let chart = document.getElementById('chart');
    if (chart) {
        chart.appendChild(heading);
    } else {
        console.error('Element with ID "chart" not found.');
    }
}

// Main function to update progress bars for any type of data
function updateProgressBars(data) {
    createChartHeading('Response Counts');
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            createProgressBarElements(key, data[key]);
        }
    }
}

// Example data input
let responseCounts = {
    vaccinated: {
        positive: 30,
        negative: 10,
        neutral: 20
    },
    nonVaccinated: {
        positive: 25,
        negative: 15,
        neutral: 10
    }
};

// Call the function to update the progress bars
updateProgressBars(responseCounts);