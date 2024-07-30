# Simple Chart Tooltip

This project demonstrates how to create a simple chart with tooltips using HTML, CSS, and JavaScript. The chart displays progress bars with segments representing different categories (positive, negative, neutral) and shows tooltips with additional information when hovered over.

## Features

- Dynamic creation of progress bars based on data
- Tooltips that display additional information on hover
- Responsive design

## Getting Started

### Prerequisites

- A modern web browser

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/simple-chart-tooltip.git
    ```
2. Navigate to the project directory:
    ```sh
    cd simple-chart-tooltip
    ```

### Usage

1. Open the `index.html` file in your web browser to view the chart.

### Project Structure

- `index.html`: The main HTML file that includes the structure of the chart.
- `style.css`: The CSS file that styles the chart and tooltips.
- `script.js`: The JavaScript file that dynamically generates the chart based on data.

### Example Data

The example data used in the project is as follows:
```javascript
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
```