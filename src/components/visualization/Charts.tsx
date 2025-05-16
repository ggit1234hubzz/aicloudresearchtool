import React from 'react';

// Note: In a real implementation, you would integrate with a chart library like Chart.js, Recharts, or D3
// For this example, we're creating simple placeholder visualizations

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface ChartProps {
  data: DataPoint[];
}

export const BarChart: React.FC<ChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="h-full flex flex-col justify-end">
      <div className="flex-1 flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-primary rounded-t-sm" 
              style={{ 
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || undefined
              }}
            ></div>
            <span className="text-xs mt-1 text-gray-600 truncate w-full text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LineChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative w-full h-4/5">
        <svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none">
          <polyline
            points={data.map((d, i) => `${(i / (data.length - 1)) * 100},${50 - (d.value / 100) * 50}`).join(' ')}
            fill="none"
            stroke="var(--color-primary, #0A2463)"
            strokeWidth="2"
          />
          {data.map((d, i) => (
            <circle
              key={i}
              cx={`${(i / (data.length - 1)) * 100}`}
              cy={`${50 - (d.value / 100) * 50}`}
              r="1.5"
              fill="var(--color-primary, #0A2463)"
            />
          ))}
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between">
          {data.map((item, index) => (
            <div key={index} className="text-xs text-gray-500">{item.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PieChart: React.FC<ChartProps> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;
  
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="relative w-32 h-32">
        <svg width="100%" height="100%" viewBox="0 0 20 20">
          {data.map((item, index) => {
            const percent = (item.value / total) * 100;
            const startAngle = (cumulativePercent / 100) * 360;
            const endAngle = ((cumulativePercent + percent) / 100) * 360;
            
            // Calculate the path for the pie slice
            const startX = 10 + 9 * Math.cos((startAngle * Math.PI) / 180);
            const startY = 10 + 9 * Math.sin((startAngle * Math.PI) / 180);
            const endX = 10 + 9 * Math.cos((endAngle * Math.PI) / 180);
            const endY = 10 + 9 * Math.sin((endAngle * Math.PI) / 180);
            
            const largeArcFlag = percent > 50 ? 1 : 0;
            
            const pathData = [
              `M 10 10`,
              `L ${startX} ${startY}`,
              `A 9 9 0 ${largeArcFlag} 1 ${endX} ${endY}`,
              `Z`
            ].join(' ');
            
            cumulativePercent += percent;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={item.color || `hsl(${index * 60}, 70%, 60%)`}
              />
            );
          })}
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center text-xs">
            <div 
              className="w-3 h-3 rounded-sm mr-1" 
              style={{ backgroundColor: item.color || `hsl(${index * 60}, 70%, 60%)` }}
            ></div>
            <span className="mr-1">{item.label}</span>
            <span className="text-gray-500">({Math.round((item.value / total) * 100)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
};