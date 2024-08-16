import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DashboardChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Trading performance",
      data: [
        3100,
        4200,
        2800,
        5100,
        4200,
        6900,
        10000,
        3348,
        2300,
        2800,
        3100,
        3500,
      ],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FF5B96"], // Gold color for the line
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    grid: {
      show: true,
      borderColor: "var(--graph-color)",
      borderOpacity: 0.4,
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tickAmount: undefined,
      tickPlacement: "between",
      min: undefined,
      max: undefined,
      stepSize: undefined,
      range: undefined,
      floating: false,
      decimalsInFloat: undefined,
      overwriteCategories: undefined,
      position: "bottom",
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: ["#fff"],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
          minute: "HH:mm:ss",
          second: "HH:mm:ss",
        },
      },
      group: {
        groups: [],
        style: {
          colors: [],
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: undefined,
          cssClass: "",
        },
      },
      axisBorder: {
        show: true,
        color: "rgba(255, 255, 255, 0.05)",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#fff",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },

      crosshairs: {
        show: true,
        width: 1,
        position: "back",
        opacity: 0.9,
        stroke: {
          color: "#fff",
          width: 0,
          dashArray: 0,
        },
        fill: {
          type: "solid",
          color: "#fff",
          gradient: {
            colorFrom: "#fff",
            colorTo: "#fff",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 1,
          opacity: 0.4,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: 0,
          fontFamily: 0,
        },
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: "#fff", // White color for the labels
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true,
      },
      y: {
        formatter: (value) => `$${value.toLocaleString()}`, // Format tooltip values as currency
      },
      x: {
        format: "dd MMM, yyyy", // Date format for the tooltip
      },
    },
  });

  return (
    <div style={{ borderRadius: "10px" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default DashboardChart;
