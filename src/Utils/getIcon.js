function getIcon(comment) {
  let iconPath = "";
  let comment_list = comment.split(",");

  if (comment_list.includes("Partially Cloudy")) {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/cloud-day-3.svg";
    }
  } else if (comment_list.includes("Cloudy")) {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/cloudy.svg";
    }
  } else if (comment_list.includes("Sunny")) {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/day.svg";
    }
  } else if (comment_list.includes("Cloudy Night")) {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/cloudy.svg";
    }
  } else if (comment_list.includes("Partially Cloudy Night")) {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/cloudy-night-3.svg";
    }
  }
  // clear
  else {
    if (
      comment_list.includes("Light Breeze") ||
      comment_list.includes("Breeze")
    ) {
      iconPath = "icons/animated/partly-cloudy-day-haze.svg";
    } else if (
      comment_list.includes("Strong Breeze") ||
      comment_list.includes("Gale")
    ) {
      iconPath = "icons/animated/wind.svg";
    } else if (
      comment_list.includes("Storm") ||
      comment_list.includes("Hurricane Force")
    ) {
      iconPath = "icons/animated/tornado.svg";
    } else {
      iconPath = "icons/animated/night.svg";
    }
  }

  // temperature
  if (comment_list.includes("Hot")) {
    iconPath = "icons/animated/thermometer.svg";
  } else if (comment_list.includes("Hot")) {
    iconPath = "icons/animated/thermometer-warmer.svg";
  }

// 


  return iconPath;
}

module.exports = { getIcon };
