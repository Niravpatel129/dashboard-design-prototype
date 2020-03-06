import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./ChartsContent.scss";

const options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

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
      <div className="wrapper">
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
      </div>
    </div>
  );
}

export default ChartsContent;
