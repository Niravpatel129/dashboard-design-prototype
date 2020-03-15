/**
 * Convert UNIX timestamp to a time.
 * @param {string} timestamp - UNIX timestamp
 */

function ConvertTime(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);

  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ":" + min + ":" + sec;
  return time;
}

export default ConvertTime;
