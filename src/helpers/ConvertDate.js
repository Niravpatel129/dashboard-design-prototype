/**
 * Convert UNIX timestamp to a date.
 * @param {string} timestamp - UNIX timestamp
 */

function ConvertDate(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const month = months[a.getMonth()];
  const date = a.getDate();

  const time = date + " " + month;
  return time;
}

export default ConvertDate;
