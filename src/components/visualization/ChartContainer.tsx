import React from 'react';
import { BarChart, LineChart, PieChart } from './Charts';

interface ChartContainerProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  chartType: 'bar' | 'line' | 'pie';
  data: any;
  className?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  icon,
  description,
  chartType,
  data,
  className = ''
}) => {
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <BarChart data={data} />;
      case 'line':
        return <LineChart data={data} />;
      case 'pie':
        return <PieChart data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${className}`}>
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="mr-3 text-primary">{icon}</div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-4 h-64">
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartContainer;