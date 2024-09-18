import ApexCharts from "apexcharts";
import { useEffect } from "react";

const ProductChart = () => {
  const options = {
    xaxis: {
      show: true,
      categories: ["Feb", "Feb", "Feb", "Feb", "Feb", "Feb", "Feb"],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value:number) {
          return "$" + value;
        },
      },
    },
    series: [
      {
        name: "Designer Edition",
        data: [43, 13, 65, 12, 42, 73],
        color: "#FF764C",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "208px",
      width: "100%",
      type: "area",
      fontFamily: "DM Sans , sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  useEffect(() => {
    if (
      document.getElementById("product-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("product-chart"),
        options
      );
      chart.render();
    }
  }, []);
  return (
    <div className="bg-white rounded-2xl shadow-sm dark:bg-[#FFFFFF] border">
      <div className="px-6 pt-6">
        <h1 className="text-xl font-bold text-[#242731]">
          Product <span className="font-normal admin-font">Statistics</span>
        </h1>
        <div className="mt-2">
          <p className="text-sm font-bold admin-font">20 February 2022</p>
        </div>
      </div>
      <div id="product-chart" className="px-3 pt-2 pb-3" />
    </div>
  );
};

export default ProductChart;
