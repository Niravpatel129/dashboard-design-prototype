import axios from "axios";

import DateConverter from "../../../helpers/ConvertDate";
import TimeConverter from "../../../helpers/ConvertTime";

const chartdata5 = async () => {
  let res = await axios.get("https://www.mercadobitcoin.net/api/BTC/trades");

  let buyPrice = res.data
    .filter(each => each.type === "buy")
    .reduce((arr, each) => {
      return [...arr, [each.date, each.price]];
    }, []);

  let sellPrice = res.data
    .filter(each => each.type === "sell")
    .reduce((arr, each) => {
      return [...arr, [each.date, each.price]];
    }, []);

  return {
    title: {
      text: "BTC Trades"
    },

    yAxis: {
      title: {
        text: "Number of Trade Price"
      }
    },
    xAxis: [
      {
        labels: {
          formatter: function() {
            const date = DateConverter(this.value);
            return date;
          }
        }
      }
    ],
    tooltip: {
      pointFormatter: function() {
        return "<b>" + TimeConverter(this.x) + " UTC</b>";
      }
    },
    series: [
      {
        name: "Btc Buy Price",
        data: buyPrice
      },
      {
        name: "Btc Sell Price",
        data: sellPrice
      }
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
};

export default chartdata5;
