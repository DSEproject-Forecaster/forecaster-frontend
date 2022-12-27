function getComment(data) {
  const dayTimeStart = 6;
  const dayTimeEnd = 18;
  const curHour = parseInt(data.time_stamp.substring(11, 13));
  let comment = "";
  // Cloud cover
  if (dayTimeStart <= curHour && dayTimeEnd > curHour) {
    if (data.total_cloud_cover > 40) {
      comment += "Partially Cloudy";
    } else if (data.total_cloud_cover > 60) {
      comment += "Cloudy";
    } else {
      comment += "Sunny";
    }
  } else {
    if (data.total_cloud_cover > 60) {
      comment += "Cloudy Night";
    } else if (data.total_cloud_cover > 40) {
      comment += "Partially Cloudy Night";
    } else {
      comment += "Clear";
    }
  }

  if (data.wind_speed > 117) {
    comment += ", Hurricane Force";
  } else if (data.wind_speed > 88) {
    comment += ", Storm";
  } else if (data.wind_speed > 62) {
    comment += ", Gale";
  } else if (data.wind_speed > 40) {
    comment += ", Strong Breeze";
  } else if (data.wind_speed > 20) {
    comment += ", Breeze";
  } else if (data.wind_speed > 6) {
    comment += ", Light Breeze";
  }
  //   else {
  //     comment += " Calm";
  //   }

  // Temperature
  if (data.temperature > 35) {
    comment += ", Swelting";
  } else if (data.temperature > 29) {
    comment += ", Hot";
  } else if (data.temperature > 23) {
    comment += ", Warm";
  }
  //   else if (data.temperature > 18) {
  //     comment += " Comfortable";
  //   }
  else if (data.temperature > 12 && data.temperature <= 18) {
    comment += ", Cool";
  } else if (data.temperature > 7 && data.temperature <= 12) {
    comment += ", Cold";
  } else if (data.temperature > 0 && data.temperature <= 7) {
    comment += ", very Cold";
  } else if (data.temperature > -9 && data.temperature <= 0) {
    comment += ", Freezing";
  }

  // Relative Humidity and Dev Point
  if (data.devpoint_temperature < 5) {
    comment += ", very Dry";
  } else if (data.devpoint_temperature < 10) {
    comment += ", Dry";
  } else if (data.devpoint_temperature > 24) {
    comment += ", Muggy";
  } else if (data.devpoint_temperature > 24) {
    comment += ", Oppressive";
  }

  return comment;
}

module.exports = { getComment };
