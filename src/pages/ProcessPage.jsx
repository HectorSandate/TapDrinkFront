import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import LiquidFillChart from '../components/LiquitProcess'; // Make sure to import the chart component
import { SparklesCore } from "../components/cartaPrueba/ui/sparkles.tsx";

function Bebida({ onClose }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mqttClient = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

    mqttClient.on('connect', () => {
      mqttClient.subscribe('/progreso/bebida');
    });

    mqttClient.on('message', (topic, message) => {
      if (topic === '/progreso/bebida') {
        const receivedProgress = parseFloat(message.toString());
        setProgress(prev => Math.min(prev + receivedProgress, 100));
      }
    });

    return () => {
      mqttClient.unsubscribe('/progreso/bebida');
      mqttClient.end();
    };
  }, []);

  return (

    <div style={{ margin: "20px" }}>
      <div>
        <h2 className='text-black'>Su bebida esta en proceso </h2>
      </div>
    <LiquidFillChart percentage={progress} />
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      {progress.toFixed(2)}%
    </div>
    <button className='text-black' onClick={onClose}>Cerrar</button>
  </div>
  );
}

export default Bebida;
