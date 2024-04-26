import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';
import LiquidFillChart from '../components/LiquitProcess'; // Make sure to import the chart component

function Bebida() {
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
    <div style={{ margin: '20px' }}>
      <LiquidFillChart percentage={progress} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {progress.toFixed(2)}%
      </div>
    </div>
  );
}

export default Bebida;
