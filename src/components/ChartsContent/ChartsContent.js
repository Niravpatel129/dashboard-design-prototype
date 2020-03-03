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

function ChartsContent() {
  return (
    <div className="ChartsContent">
      <div className="charts-row1">
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ChartsContent;
