'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  // Explicitly type currentTime as Date | null
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Establecer currentTime al montar el componente
    setCurrentTime(new Date());

    // Actualizar la hora cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  // Función para capitalizar la primera letra
  const capitalizeFirstLetter = (string: string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Función para formatear la fecha
  const formatDate = (date: Date | null) => {
    if (!date) return '...'; // Marcador de posición

    const weekday = date.toLocaleDateString('pl-PL', { weekday: 'long' });
    const day = date.getDate();
    const month = date.toLocaleDateString('pl-PL', { month: 'long' });
    const year = date.getFullYear();

    const capitalizedWeekday = capitalizeFirstLetter(weekday);
    const capitalizedMonth = capitalizeFirstLetter(month);

    return `${capitalizedWeekday} ${day} ${capitalizedMonth} ${year}`;
  };

  // Función para formatear la hora
  const formatTime = (date: Date | null) => {
    if (!date) return '...'; // Marcador de posición

    return date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Formato 24 horas
    });
  };

  return (
    <nav className="flex items-center justify-between bg-ral6001 text-white px-4 py-3 h-1/6">
      {/* Izquierda: Logo */}
      <div className="flex items-center w-1/3">
        <Image
          src="/inno-plast.png" // Asegúrate de que esta ruta sea correcta
          alt="Inno-Plast logo"
          width={80}
          height={70}
          className="filter invert brightness-200"
        />
      </div>

      {/* Centro: Fecha y Hora */}
      <div className="flex flex-col items-center w-1/2">
        <div className="text-sm">{formatDate(currentTime)}</div>
        <div className="text-2xl font-semibold">{formatTime(currentTime)}</div>
      </div>

      {/* Derecha: Nombre ATV */}
      <div className="flex items-center justify-end w-1/3">
        <span className="text-2xl font-bold">ATV</span>
      </div>
    </nav>
  );
};