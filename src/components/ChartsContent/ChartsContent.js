import React, { useEffect } from "react";
import Highcharts from "highcharts";
import ChartsData from "./chartsData";

import Grid from "@material-ui/core/Grid";

import "./ChartsContent.scss";
import MiniChart from "./subComponents/MiniChart/MiniChart";

Highcharts.setOptions({
  colors: ["#B7EFFF", "#A4A1FB", "#9CF0C6"]
});

function ChartsContent() {
  useEffect(() => {
    Highcharts.chart("chart1", ChartsData.dataSet7);
    Highcharts.chart("chart2", ChartsData.dataSet8);
    Highcharts.chart("chart3", ChartsData.dataSet9);
    Highcharts.chart("chart4", ChartsData.dataSet6);
    Highcharts.chart("chart6", ChartsData.dataSet3);
    Highcharts.chart("chart7", ChartsData.dataSet5);

    ChartsData.dataSet4.then(res => {
      Highcharts.chart("chart5", res);
    });
  }, []);

  return (
    <section className="ChartsContent">
      <h2>Overview</h2>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={12} sm={3}>
          <MiniChart
            id="chart1"
            name="Total Views"
            amount="267k"
            percentage={-13.8}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <MiniChart
            id="chart2"
            name="All Products"
            amount="2453"
            percentage={6.8}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <MiniChart
            id="chart3"
            name="Total Earnings"
            amount="39k"
            percentage={-4.3}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div id="chart4" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div id="chart5" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="chart6" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="chart7" />
        </Grid>
      </Grid>
    </section>
  );
}

export default ChartsContent;
