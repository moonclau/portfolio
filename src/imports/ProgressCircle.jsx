import React from 'react';
import '../assets/ProgressCircle.css';

function ProgressCircle({ percentage, name, image }) {
  const strokeDasharray = `${percentage}, 100`;

  return (
    <div className="progress-circle">
      <svg className="circle" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle-progress"
          strokeDasharray={strokeDasharray}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        
        <text x="18" y="20.35" className="percentage">{percentage}%</text>
      </svg>
      <p>{name}</p>
      
    </div>
  );
}

export default ProgressCircle;
