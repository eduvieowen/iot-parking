// export default function handler(req, res) {
//     // Set the sensor values here based on your logic
//     const sensorValue1 = 0;
//     const sensorValue2 = 0;
//     const sensorValue3 = 0;
//     const sensorValue4 = 0;
  
//     const status = [sensorValue1, sensorValue2, sensorValue3, sensorValue4];
//     res.status(200).json(status);
//   }  

import { getSensorValues } from 'your-sensor-module'; // Replace 'your-sensor-module' with the actual module you're using to retrieve sensor values

export default function handler(req, res) {
  // Retrieve the sensor values from the ESP8266 module
  const sensorValues = getSensorValues(); // Implement the function to retrieve sensor values from your sensor module

  // Send the sensor values as the API response
  res.status(200).json(sensorValues);
}

import mysql from 'mysql';
import { env } from '../../next.config';

// Create a MySQL connection pool
const pool = mysql.createPool({
  // host: 'localhost',
  // user: 'root',
  // password: env.DB_PASSWORD,
  // database: env.DB_NAME,
  
  host: env.DB_HOST,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
});

export default function handler(req, res) {
  const { sensorValue1, sensorValue2, sensorValue3, sensorValue4 } = req.query;

  // Store the sensor values in the database
  const query = `INSERT INTO sensor_data (sensorValue1, sensorValue2, sensorValue3, sensorValue4) VALUES (?, ?, ?, ?)`;
  pool.query(query, [sensorValue1, sensorValue2, sensorValue3, sensorValue4], (error, results) => {
    if (error) {
      console.error('Error storing sensor data:', error);
      res.status(500).json({ error: 'Failed to store sensor data' });
    } else {
      console.log('Sensor data stored successfully');
      res.status(200).json({ message: 'Sensor data stored successfully' });
    }
  });
}

