// src/components/WeatherBox.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { getWeather } from '../services/WeatherService';

interface WeatherBoxProps {
    country: string | null | undefined ;
    date: string | Date | null | undefined;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const WeatherBox: React.FC<WeatherBoxProps> = ({ country, date }) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (country && date) { // Vérifiez si country et date sont définis
                    const data = await getWeather({ country, date });
                    setWeatherData(data);

                }
            } catch (error) {
                setError('Erreur lors de la récupération des données météo.');
            }
        };

        fetchWeather();
    }, [country, date]);

    const getWeatherForDate = (date: string | Date | null | undefined) => {
        if (!weatherData || !date) return null;

        const dateString = new Date(date).toISOString().split('T')[0]; // Supprimez les millisecondes
        const index = weatherData.daily.time.findIndex((d: string) => {
            return d === dateString;
        });

        if (index === -1) return null;




        return {
            date: new Date(weatherData.daily.time[index]),
            maxTemp: weatherData.daily.temperature_2m_max[index],
            minTemp: weatherData.daily.temperature_2m_min[index],
            sunrise: new Date(weatherData.daily.sunrise[index]),
            sunset: new Date(weatherData.daily.sunset[index]),
            precipitation: weatherData.daily.precipitation_sum[index],
            windSpeed: weatherData.daily.wind_speed_10m_max[index],
        };
    };


    const tripWeather = getWeatherForDate(date);

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6">
                Météo pour {country} le {date ? new Date(date).toLocaleDateString() : ''}
            </Typography>
            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    {error}
                </Typography>
            )}
            {tripWeather && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1">
                        Date: {tripWeather.date.toDateString()}

                    </Typography>
                    <Typography variant="body1">
                        Température max: {tripWeather.maxTemp}°C
                    </Typography>
                    <Typography variant="body1">
                        Température min: {tripWeather.minTemp}°C
                    </Typography>
                    <Typography variant="body1">
                        Lever du soleil: {tripWeather.sunrise.toLocaleTimeString()}
                    </Typography>
                    <Typography variant="body1">
                        Coucher du soleil: {tripWeather.sunset.toLocaleTimeString()}
                    </Typography>
                    <Typography variant="body1">
                        Précipitations: {tripWeather.precipitation} mm
                    </Typography>
                    <Typography variant="body1">
                        Vitesse du vent: {tripWeather.windSpeed} km/h
                    </Typography>
                </Box>
            )}
        </Box>
    );
};


export default WeatherBox;


