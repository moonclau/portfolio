import "./Logo.css";
import { useState,useEffect } from "react";
function Logo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cambia el estado a visible después de 3 segundos (3000 ms)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Limpieza: borra el temporizador si el componente se desmonta antes de tiempo
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ml-12 mt-2">
      <svg
        className={`logo_illustration ${isVisible ? 'visible' : ''}`}
        width="120"
        height="60"
        viewBox="0 0 285 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="285" height="85"/>
        <g className="logo">
          <path
            className="cd"
            d="M88.3 27.7H67V30.6L73.7 31.4C73.8 37.6 73.8 43.9 73.8 50.1V52.8C73.8 54.6 73.8 56.3 73.8 58C65.5 56.5 59.9 49.2 59.9 36.7C59.9 24.2 67.7 15.1 77.5 15.1C87.3 15.1 82.4 15.6 85 17.1L86.4 25.4H90.8L90.5 15C85.6 12.2 80.5 11.5 76.6 11.5C62.6 11.5 52.3 22.3 52.3 36.7C52.3 51.1 60.8 60.5 73.8 61.8C73.8 65.4 73.8 68.9 73.7 72.4L67 73.2V76.1H86.9C100.9 76.1 111.6 67.6 111.6 52.1C111.6 36.6 102.1 27.9 88.4 27.9L88.3 27.7ZM86.5 72.6H80.6C80.6 69 80.5 65.4 80.5 61.7C84.3 61.3 88 60.3 91.4 58.4L91.7 48H87.3L85.9 56.3C84.1 57.2 82.3 57.7 80.5 58C80.5 56.3 80.5 54.5 80.5 52.8V50.1C80.5 43.7 80.5 37.3 80.6 31.1H87.2C97.9 31.1 104.1 38.4 104.1 52C104.1 65.6 97.9 72.7 86.6 72.7L86.5 72.6Z"
            fill="#1D1D1B"
          />
          <path
            className="e"
            d="M148.2 54.6C148.2 56.3 148 57.7 147.7 58.6H121.1V55.6H138.3C141.8 55.6 142.6 53.9 142.6 51.9C142.6 47.8 139.1 44.1 134.6 44.1C130.1 44.1 124.6 48 124.6 58.3C124.6 68.6 129.2 72.3 136.4 72.3C143.6 72.3 143.9 70.2 146.5 67.2L148.2 68.5C145.6 73.6 141 76.9 134.4 76.9C124.7 76.9 118.4 70.2 118.4 59.3C118.4 48.4 125.9 40.9 134.9 40.9C143.9 40.9 148.3 45.9 148.3 54.7L148.2 54.6Z"
            fill="#1D1D1B"
          />
          <path
            className="v"
            d="M158.2 45.8L151.1 44.6V41.9H168.4V44.6L159.6 45.8H158.2ZM160.5 41.8L171.8 71.1L168.8 74.8L180.4 41.7H184.3L171.2 76.3H168.2L153.6 41.7H160.5V41.8ZM180.3 45.8L173.1 44.6V41.9H186.8V44.6L181.7 45.8H180.3Z"
            fill="#1D1D1B"
          />
          <path
            className="Vector_right"
            d="M274.1 43.5L227.9 70.5L224.4 64.3L267.1 40.2V41.4L224.4 17.3L227.9 11.1L274.1 38.1V43.6V43.5Z"
            fill="#1D1D1B"
          />
          <path
            className="Vector_left"
            d="M0 38L46.2 11L49.7 17.2L7 41.3V40.1L49.7 64.2L46.2 70.4L0 43.4V37.9V38Z"
            fill="#1D1D1B"
          />
          <path
            className="slash"
            d="M216.5 2.2H221.1L198.9 74.4H194.3L216.5 2.2Z"
            fill="#1D1D1B"
          />
        </g>
        <g className="Capa_2">
          <path className="cursor cursor_move" d="M280.1 0H284.9V85H280.1V0Z" fill="#1D1D1B" />
        </g>
      </svg>
    </div>
  );
}
export default Logo;
