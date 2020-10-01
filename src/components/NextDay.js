import React from "react";

const NextDay = ({datetime,temperature, url}) => {
  return (
    <div className="nextday-data">
      <div className="nextday_header">
        <p className="nextday_time">{datetime}</p>
        {temperature && <p className="nextday_temp">{Math.round(temperature)} &deg;C </p>}
        {url && <img
            className="nextday_image"
            src={url}
            alt="nextDayIcon"
            height={40}
            width={60}
          />}
      </div>
    </div>
  );
};

export default NextDay;

