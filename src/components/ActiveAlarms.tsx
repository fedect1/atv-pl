"use client"
import { useState, useEffect } from 'react';

export const ActiveAlarms = () => {
  const [isPulsing, setIsPulsing] = useState(false);
  
  useEffect(() => {
    // Create a pulsing/vibrating effect with interval
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev);
    }, 700); // Toggle every 700ms
    
    return () => clearInterval(pulseInterval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full text-center bg-slate-300 p-4 mx-auto mb-6">
        <h3 className="text-xl font-semibold">Aktywne alarmy</h3>
      </div>
      <div className="flex justify-center w-full px-4">
        <div 
          className={`w-full max-w-md text-center p-12 bg-red-300 border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
            isPulsing ? 'scale-105 bg-red-400' : 'scale-100 bg-red-300'
          }`}
        >
          <h4 className="mb-3 text-3xl font-bold tracking-tight text-gray-900">M3</h4>
          <p className="text-xl font-normal text-gray-700">Brak surowca</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveAlarms;