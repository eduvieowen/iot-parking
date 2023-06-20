"use client";

import { useEffect, useState } from 'react';
import "../styles/styles.css";

export default function Home() {
  const [sensorValues, setSensorValues] = useState([0, 0, 0, 0]); // Sensor values states
  const [darkMode, setDarkMode] = useState(false); // Dark Mode state

  useEffect(() => {
    updateStatus();
    const interval = setInterval(updateStatus, 1000); // Update interval

    return () => {
      clearInterval(interval);
    };
  }, []);

  function updateStatus() {
    fetch('/status')
      .then((response) => response.text())
      .then((data) => {
        const values = data.split(',');
        setSensorValues(values);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  // return (
  //   <div className={`container ${darkMode ? 'dark' : ''}`}>

  //     <h1>Parking Slots</h1>

  //     <div className="parking-lot">
  //       <div className={`parking-slot slot1 ${sensorValues[0] === '1' ? 'occupied' : 'available'}`}>
  //         <div className={`${sensorValues[0] === '1' ? 'car-diagram' : ''}`}></div>
  //         <div>Slot 1</div>
  //       </div>

  //       <div className={`parking-slot slot2 ${sensorValues[1] === '1' ? 'occupied' : 'available'}`}>
  //         <div className={`${sensorValues[1] === '1' ? 'car-diagram' : ''}`}></div>
  //         <div>Slot 2</div>
  //       </div>

  //       <div className={`parking-slot slot3 ${sensorValues[2] === '1' ? 'occupied' : 'available'}`}>
  //         <div className={`${sensorValues[2] === '1' ? 'car-diagram' : ''}`}></div>
  //         <div>Slot 3</div>
  //       </div>

  //       <div className={`parking-slot slot4 ${sensorValues[3] === '1' ? 'occupied' : 'available'}`}>
  //         <div className={`${sensorValues[3] === '1' ? 'car-diagram' : ''}`}></div>
  //         <div>Slot 4</div>
  //       </div>
  //     </div>

  //     {/* Camera feed container */}
  //     <div className={`container ${darkMode ? 'dark' : ''}`}>
  //       <h1>Camera Feed</h1>
  //       <iframe src="http://192.168.15.122:5000/video_feed" width="640" height="480"></iframe>
  //     </div>

  // {/* Dark mode toggle */}
  // <a href="javascript:void(0)" onClick={toggleDarkMode} className="dark-mode-toggle">
  //   Toggle Dark Mode
  // </a>
  // <style jsx global>{`
  //   body {
  //     background-color: ${darkMode ? '#011627' : '#fdfffc'};
  //     color: ${darkMode ? '#fff' : '#000'};
  //   }

  //   .dark-mode-toggle {
  //     position: absolute;
  //     top: 10px;
  //     right: 10px;
  //     color: ${darkMode ? '#fff' : '#000'};
  //     text-decoration: none;
  //     background-color: ${darkMode ? '#011627' : '#fff'};
  //     padding: 8px 16px;
  //     border-radius: 4px;
  //     transition: background-color 0.3s;
  //   }

  //   .dark-mode-toggle:hover {
  //     background-color: ${darkMode ? '#fff' : '#011627'};
  //     color: ${darkMode ? '#000' : '#fff'};
  //   }
  // `}</style>
  //   </div>
  // );

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>

      <div id="parking-lot">

        <div className="lane">

          <div className="curb"></div>
          <div className={`parking-space ${sensorValues[0] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">A1</span>
          </div>

          <div className={`parking-space ${sensorValues[1] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">A2</span>
          </div>

          <div className={`parking-space ${sensorValues[2] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">A3</span>
          </div>

          <div className="curb"></div>

        </div>

        <div className="lane">
          
          <div className="curb"></div>
          <div className={`parking-space ${sensorValues[3] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">B1</span>
          </div>

          <div className={`parking-space ${sensorValues[4] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">B2</span>
          </div>

          <div className={`parking-space ${sensorValues[5] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">B3</span>
          </div>

          <div className="curb"></div>

        </div>

        <div className="lane">

          <div className="curb"></div>
          <div className={`parking-space ${sensorValues[6] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">C1</span>
          </div>

          <div className={`parking-space ${sensorValues[7] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">C2</span>
          </div>

          <div className={`parking-space ${sensorValues[8] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">C3</span>
          </div>

          <div className="curb"></div>

        </div>

        <div className="lane">

          <div className="curb"></div>
          <div className={`parking-space ${sensorValues[9] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">D1</span>
          </div>

          <div className={`parking-space ${sensorValues[10] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">D2</span>
          </div>

          <div className={`parking-space ${sensorValues[11] === '1' ? 'occupied' : 'available'}`}>
            <span className="parking-slot">D3</span>
          </div>

          <div className="curb"></div>

        </div>

        <div className="trees">
          <img src="../media/electric lamp.png" className="tree" alt="" />
          <img src="electric lamp.png" className="tree" alt="" />
          <img src="electric lamp.png" className="tree" alt="" />
        </div>
        
      </div>

      <div className={`container ${darkMode ? 'dark' : ''}`}>
        <h1>Camera Feed</h1>
        <iframe src="http://192.168.15.122:5000/video_feed" width="640" height="480"></iframe>
      </div>

      {/* Dark mode toggle */}
      <a href="javascript:void(0)" onClick={toggleDarkMode} className="dark-mode-toggle">
        Toggle Dark Mode
      </a>

      <style jsx global>{`
        body {
          background-color: ${darkMode ? '#011627' : '#fdfffc'};
          color: ${darkMode ? '#fff' : '#000'};
        }

        .dark-mode-toggle {
          position: absolute;
          top: 10px;
          right: 10px;
          color: ${darkMode ? '#fff' : '#000'};
          text-decoration: none;
          background-color: ${darkMode ? '#011627' : '#fff'};
          padding: 8px 16px;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .dark-mode-toggle:hover {
          background-color: ${darkMode ? '#fff' : '#011627'};
          color: ${darkMode ? '#000' : '#fff'};
        }
      `}</style>

    </div>
  );

}
