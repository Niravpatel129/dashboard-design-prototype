import React, { useEffect } from "react";
import Highcharts from "highcharts";
import ChartsData from "./ChartsData";

import Grid from "@material-ui/core/Grid";

import "./ChartsContent.scss";

function ChartsContent() {
  useEffect(() => {
    Highcharts.setOptions({
      colors: ["#B7EFFF", "#A4A1FB"]
    });

    Highcharts.chart("chart1", ChartsData.dataSet1);
    Highcharts.chart("chart2", ChartsData.dataSet2);
    Highcharts.chart("chart3", ChartsData.dataSet3);
    Highcharts.chart("chart4", ChartsData.dataSet6);
    Highcharts.chart("chart6", ChartsData.dataSet3);
    Highcharts.chart("chart7", ChartsData.dataSet5);

    ChartsData.dataSet4.then(res => {
      Highcharts.chart("chart5", res);
    });
  }, []);

  return (
    <div className="ChartsContent">
      <h2>Overview</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <div id="chart1" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div id="chart2" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div id="chart3" />
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
    </div>
  );
}

export default ChartsContent;
