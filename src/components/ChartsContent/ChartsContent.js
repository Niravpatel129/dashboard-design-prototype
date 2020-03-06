import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Grid from "@material-ui/core/Grid";

import "./ChartsContent.scss";

const options2 = {
  title: {
    text: "My stock chart"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};

function ChartsContent() {
  return (
    <div className="ChartsContent">
      <h2>Overview</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={4}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={4}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={8}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={4}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />{" "}
        </Grid>
      </Grid>
      {/* <div className="wrapper">
        <div className="row row1">
          <HighchartsReact
            className="chart"
            highcharts={Highcharts}
            options={options}
          />
          <HighchartsReact highcharts={Highcharts} options={options} />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

        <div className="row row2">
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
            constructorType={"chart"}
          />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="row row3">
          <HighchartsReact highcharts={Highcharts} options={options} />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div> */}
    </div>
  );
}

export default ChartsContent;
