const renderChart = () => {
  function renderChart1() {
    Highcharts.chart("chart1", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Wheat",
          data: [45321],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart2() {
    Highcharts.chart("chart2", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart3() {
    Highcharts.chart("chart3", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart4() {
    Highcharts.chart("chart4", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart5() {
    Highcharts.chart("chart5", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart6() {
    Highcharts.chart("chart6", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart7() {
    Highcharts.chart("chart7", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  function renderChart8() {
    Highcharts.chart("chart8", {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      xAxis: {
        lineColor: "#fff", // màu đường trục X
        tickColor: "#fff", // màu các tick
        categories: ["USA", "China", "Brazil", "EU", "Argentina", "India"],
        crosshair: true,
        accessibility: {
          description: "Countries",
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: null,
        },
        labels: {
          style: { color: "#fff" }, // giá trị Y màu trắng
        },
        gridLineWidth: 0,
      },
      tooltip: {
        valueSuffix: " (1000 MT)",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Corn",
          data: [387749, 280000, 129000, 64300, 54000, 34300],
        },
        {
          name: "Wheat",
          data: [45321, 140000, 10000, 140500, 19500, 113500],
        },
      ],
      legend: {
        itemStyle: { color: "#fff" }, // chữ trong legend cũng chuyển trắng
      },
      credits: {
        enabled: false, // <-- tắt watermark Highcharts
      },
    });
  }
  return { renderChart1, renderChart2, renderChart3, renderChart4, renderChart5, renderChart6, renderChart7, renderChart8 };
};
export default renderChart;
