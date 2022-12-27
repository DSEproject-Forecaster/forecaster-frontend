function getIcon(comment) {
  let iconPath = "";
  let comment_list = comment.split(",");

  // Clear Night
  if (comment_list.includes("Clear")) {
    iconPath = "icons/animated/night.svg";
  }
  if (comment_list.includes("Partially Cloudy")) {
    iconPath = "icons/animated/cloudy-day.svg";
  }
  if (comment_list.includes("Partially Cloudy Night")) {
    iconPath = "icons/animated/cloudy-night.svg";
  }
  if (comment_list.includes("Cloudy")) {
    iconPath = "icons/animated/overcast.svg";
  }
  if (comment_list.includes("Sunny")) {
    iconPath = "icons/animated/day.svg";
  }
  if (comment_list.includes("Hurricane") || comment_list.includes("Storm")) {
    iconPath = "icons/animated/tornado.svg";
  }
  if (comment_list.includes("Strong Breeze") || comment_list.includes("Gale")) {
    iconPath = "icons/animated/wind.svg";
  }
  if (comment_list.includes("Freezing")) {
    iconPath = "icons/animated/snowflake.svg";
  }
  if (comment_list.includes("very Cold")) {
    iconPath = "icons/animated/thermometer-colder.svg";
  }
  if (comment_list.includes("Swelting")) {
    iconPath = "icons/animated/thermometer-warmer.svg";
  }

  //

  return iconPath;
}

module.exports = { getIcon };
