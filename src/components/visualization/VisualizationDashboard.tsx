import React, { useState } from 'react';
import { BarChart2, PieChart, LineChart, Download, Share2, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import { DemoResult } from '../../types/results';
import ChartContainer from './ChartContainer';

interface VisualizationDashboardProps {
  results: DemoResult[];
  isLoading: boolean;
}

const VisualizationDashboard: React.FC<VisualizationDashboardProps> = ({
  results,
  isLoading
}) => {
  const [viewMode, setViewMode] = useState<'charts' | 'details'>('charts');

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin mb-4">
          <RefreshCw className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Processing your files</h3>
        <p className="text-gray-500 text-center max-w-md">
          Our AI models are analyzing your data. This might take a few moments depending on the file size and complexity.
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <BarChart2 className="h-16 w-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">No results yet</h3>
        <p className="text-gray-500 text-center max-w-md">
          Upload files and run an AI model to see visualization results here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
          <p className="text-sm text-gray-500">
            Visualizations based on the AI model's analysis of your files.
          </p>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Download className="h-4 w-4" />}
          >
            Export
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            leftIcon={<Share2 className="h-4 w-4" />}
          >
            Share
          </Button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="border-b border-gray-200 p-4">
          <div className="flex space-x-4">
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                viewMode === 'charts' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('charts')}
            >
              Charts
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                viewMode === 'details' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setViewMode('details')}
            >
              Details
            </button>
          </div>
        </div>

        <div className="p-6">
          {viewMode === 'charts' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartContainer 
                title="Sentiment Analysis"
                icon={<PieChart className="h-5 w-5" />}
                description="Breakdown of sentiment detected in your content."
                chartType="pie"
                data={results[0].sentiment}
              />
              <ChartContainer 
                title="Key Topics"
                icon={<BarChart2 className="h-5 w-5" />}
                description="The most significant topics identified in your content."
                chartType="bar"
                data={results[0].topics}
              />
              <ChartContainer 
                title="Trend Analysis"
                icon={<LineChart className="h-5 w-5" />}
                description="Trends and patterns identified over time."
                chartType="line"
                data={results[0].trends}
                className="md:col-span-2"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Analysis Summary</h3>
                <p className="text-sm text-gray-700">
                  The analysis of your documents shows predominantly positive sentiment (68%), with key topics focused on technology, healthcare, and education. Major entities recognized include Microsoft, WHO, and UNESCO. The overall content quality score is 87/100, indicating high-quality information with good structure.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Detected Entities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {results[0].entities.map((entity, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3">
                      <p className="font-medium text-sm">{entity.name}</p>
                      <p className="text-xs text-gray-500">{entity.type} • Confidence: {entity.confidence}%</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Recommendations</h3>
                <ul className="space-y-2">
                  {results[0].recommendations.map((rec, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualizationDashboard;