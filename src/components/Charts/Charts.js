import React, { useEffect } from "react";
import Highcharts from "highcharts";
import ChartsData from "./chartsData";

import MiniChart from "./subComponents/MiniChart/MiniChart";
import DataTable from "../DataTable/DataTable";

import Grid from "@material-ui/core/Grid";

import "./Charts.scss";

Highcharts.setOptions({
  colors: ["#B7EFFF", "#A4A1FB", "#9CF0C6"]
});

function Charts() {
  useEffect(() => {
    // Static data
    Highcharts.chart("chart1", ChartsData.dataSet1);
    Highcharts.chart("chart2", ChartsData.dataSet2);
    Highcharts.chart("chart3", ChartsData.dataSet3);
    Highcharts.chart("chart4", ChartsData.dataSet4);
    Highcharts.chart("chart7", ChartsData.dataSet7);

    // Promise result data
    ChartsData.dataSet5.then(res => {
      Highcharts.chart("chart5", res);
    });
  }, []);

  return (
    <section className="Charts">
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
          <DataTable />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="chart7" />
        </Grid>
      </Grid>
    </section>
  );
}

export default Charts;
