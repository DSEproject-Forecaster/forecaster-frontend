import React from "react";
import {
  WiSandstorm,
  WiHumidity,
  WiCloudy,
  WiSolarEclipse,
  WiThermometer,
} from "react-icons/wi";
import "../css/weeklyPredictions.css";
import { getIcon } from "../Utils/getIcon";

export function WeeklyCard(props) {
  const convertDate = (timestamp) => {
    const date = new Date(timestamp);
    let dayName = date.toLocaleString("en-us", { weekday: "short" });
    let month = date.toLocaleString("en-us", { month: "short" });
    let day = date.toLocaleString("en-us", { day: "2-digit" });
    let currentDatetime = [dayName, day, month];
    return currentDatetime.join(" ");
  };

  const convertTime = (timestamp) => {
    const date = new Date(timestamp);
    let time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time;
  };

  return (
    <div className="container-center shadow my-1 d-block mb-3">
      <div className="row">
        <div className="text-center">
          {convertDate(props.timestamp)} | {convertTime(props.timestamp)}
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-2">
          <img
            src={getIcon(props.comment)}
            className="weekly-icon"
            alt="overview icon"
          />
        </div>
        <div className="col-2">
          <span className="property-icon">
            <WiThermometer size={"2rem"} />
          </span>
          <span className="value">{props.temp} °C</span>
        </div>
        <div className="col-2">
          <span className="property-icon">
            <WiSandstorm size={"2rem"} />
          </span>
          <span className="value">{props.windspeed} kmph</span>
        </div>
        <div className="col-2">
          <span className="property-icon">
            <WiHumidity size={"2rem"} />
          </span>
          <span className="value">{props.humidity} %</span>
        </div>
        <div className="col-2">
          <span className="property-icon">
            <WiCloudy size={"2rem"} />
          </span>
          <span className="value">{props.cloud} %</span>
        </div>
        <div className="col-2">
          <span className="property-icon">
            <WiSolarEclipse size={"2rem"} />
          </span>
          <span className="value">
            {props.rad1} / {props.rad2}
          </span>
        </div>
      </div>
    </div>
  );
}
