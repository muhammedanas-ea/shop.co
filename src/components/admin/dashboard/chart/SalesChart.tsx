import ApexCharts from "apexcharts";
import { useEffect } from "react";
// import { useEffect } from "react";

const SalesChart = () => {
  const options = {
    series: [
      {
        name: "sales amount",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 111, 112],
        color: "#2884FF",
      },
    ],
    chart: {
      type: "bar",
      height: "208px",
      fontFamily: "DM Sans , sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },

    xaxis: {
      categories: [
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
        "Feb",
      ],
    },
    grid: {
      show: false,
    },
  };

  useEffect(() => {
    if (
      document.getElementById("sales-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("sales-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm dark:bg-[#FFFFFF] border ">
      <div className="px-6 pt-6">
        <h1 className="text-xl font-bold text-[#242731] admin-font">
          Sales <span className="font-normal">Statistics</span>
        </h1>
        <div className="mt-2">
          <p className="text-sm font-bold admin-font">20 February 2022</p>
        </div>
      </div>
      <div id="sales-chart" className="px-3 pt-2 pb-3" />
    </div>
  );
};
export default SalesChart;
