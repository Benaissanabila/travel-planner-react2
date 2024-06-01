// src/services/weatherService.ts
import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,wind_speed_10m_max&timezone=auto';


interface WeatherParams {
    country: string | null | undefined ;
    date:string |Date| null | undefined;
}

export const getWeather = async ({ country, date }: WeatherParams) => {
    try {
        const formattedDate = date instanceof Date ? date.toISOString().slice(0, 10) : date;
        console.log(formattedDate);
        const response = await axios.get(BASE_URL, {
            params: {
                country: country,
                date: formattedDate,
            },
        });
        console.log(date);
        return response.data;
    } catch (error) {
        throw new Error('Erreur lors de la récupération des données météo.');
    }
};
