const chartdata2 = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column",
    width: 120,
    height: 100,
    margin: [0, 0, 20, 0],
    backgroundColor: "transparent"
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  title: {
    text: ""
  },
  xAxis: {
    visible: false
  },
  yAxis: {
    visible: false
  },
  legend: {
    enabled: false
  },
  series: [
    {
      color: "#A4A1FB",
      data: [5, 3, 4, 10, 9, 4, 12, 3, 7, 7, 4, 2],
      maxPointWidth: 15
    }
  ]
};

export default chartdata2;
