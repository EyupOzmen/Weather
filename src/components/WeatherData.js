import React from "react";

const WeatherData = ({ city_name, ob_time, temp, description, url }) => {
  return (
    <div className="weather-data">
      <div className="weather_header">
        <p className="weather_city">
          {" "}
          <span>{city_name}</span>
        </p>
        <p className="weather_time">{ob_time}</p>
      </div>

      <div className="weather-data_property">
        <p className="weather-data_value">{Math.round(temp)} &deg;C </p>
        <div className="weather_image">
          <img
            className="image"
            src={url}
            alt="weatherIcon"
            height={150}
            width={170}
          />
        </div>

        <div className="weather_label">
          <p className="weather-data__value">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;

// app_temp: 25.8
// aqi: 55
// city_name: "İstanbul"
// clouds: 1
// country_code: "TR"
// datetime: "2020-09-28:13"
// dewpt: 12.8
// dhi: 93.26
// dni: 776.15
// elev_angle: 29.71
// ghi: 471.47
// h_angle: 60
// lat: 41.01384
// lon: 28.94966
// ob_time: "2020-09-28 13:20"
// pod: "d"
// precip: 0
// pres: 1012.7
// rh: 44
// slp: 1017
// snow: 0
// solar_rad: 471.5
// state_code: "34"
// station: "LTBA"
// sunrise: "03:59"
// sunset: "15:51"
// temp: 26
// timezone: "Europe/Istanbul"
// ts: 1601299200
// uv: 5.25085
// vis: 5
// weather: {icon: "c01d", code: 800, description: "Açık gökyüzü"}
// wind_cdir: "BGB"
// wind_cdir_full: "batı-güney batı"
// wind_dir: 250
// wind_spd: 2.6
