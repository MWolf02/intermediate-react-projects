import Chart from "react-apexcharts"; // Importing Chart component from react-apexcharts

const options = { // Options configuration for the pie chart
  labels: ["Income", "Expense"], // Labels for the chart
  colors: ["#213ebf","#FD5E53"], // Colors for different sections of the chart
  chart: {
    width: "50px", // Width of the chart
  },
  states: {
    hover: {
      filter: {
        type: "none", // Disable filter effect on hover
      },
    },
  },
  legend: {
    show: false, // Hide legend
  },
  dataLabels: {
    enabled: false, // Disable data labels
  },
  hover: { mode: null }, // Disable hover effect
  plotOptions: {
    donut: {
      expandOnClick: false, // Don't expand on click
      donut: {
        labels: {
          show: false, // Hide labels inside the donut chart
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf","#FD5E53"], // Colors for filling the chart sections
  },
  tooltip: {
    enabled: true, // Enable tooltip
    theme: "dark", // Tooltip theme
    style: {
      fontSize: "12px", // Font size of tooltip
      fontFamily: undefined, // Font family of tooltip
      backgroundColor: "#000000", // Background color of tooltip
    },
  },
};

export default function TransactionChartSummary({expense = 100, income = 100}) { // TransactionChartSummary component
  return (
    <Chart
      options={options} // Pass options to the chart
      series={[income, expense]} // Pass series data (income and expense)
      type="pie" // Chart type
      width={"100%"} // Width of the chart
      height={"100%"} // Height of the chart
    />
  );
}
