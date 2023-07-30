// Referencias
import React from 'react';
import PropTypes from 'prop-types';

// Inicializar
const weekday = new Array(7);
weekday[0] = 'Lun';
weekday[1] = 'Mar';
weekday[2] = 'Mie';
weekday[3] = 'Jue';
weekday[4] = 'Vie';
weekday[5] = 'Sab';
weekday[6] = 'Dom';


const getDate = (date) => {
    return `${weekday[date.getDay()]} ${date.getDate()}`;
};


const DailyWeatherForecastCard = ({ forecast }) => (
    <div className="daily-weather-card">
        <small>{getDate(forecast.date)}</small>
        <img className="icon mx-auto" src={forecast.icon} />
        <div className="font-weight-bold">
            {parseInt(forecast.temperature.maximum)}&deg;
            &nbsp;<small>{parseInt(forecast.temperature.minimum)}&deg;</small>
        </div>
        <div className="text-capitalize">
            <small>{forecast.condition}</small>
        </div>
    </div>
);


DailyWeatherForecastCard.propTypes = {
    forecast: PropTypes.object.isRequired
};


export { DailyWeatherForecastCard };