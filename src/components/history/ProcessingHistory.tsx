import React from 'react';
import { Clock, FileText, Download, Eye } from 'lucide-react';
import Button from '../ui/Button';
import { historyData } from '../../data/historyData';

const ProcessingHistory = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Processing History</h2>
        <p className="text-sm text-gray-500">
          View and manage your previous file processing jobs.
        </p>
      </div>

      {historyData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-200 rounded-xl">
          <Clock className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">No processing history</h3>
          <p className="text-gray-500 text-center max-w-md">
            Once you process files, they'll appear here for easy access.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <ul className="divide-y divide-gray-100">
            {historyData.map((item, index) => (
              <li key={index} className="p-4 hover:bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      item.status === 'completed' ? 'bg-green-100 text-green-700' :
                      item.status === 'processing' ? 'bg-blue-100 text-blue-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>{item.model}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(item.date)}</span>
                        <span className="mx-2">•</span>
                        <span className={`capitalize ${
                          item.status === 'completed' ? 'text-green-700' :
                          item.status === 'processing' ? 'text-blue-700' : 
                          'text-gray-700'
                        }`}>{item.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-10 sm:ml-0">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      leftIcon={<Eye className="h-4 w-4" />}
                    >
                      View
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      leftIcon={<Download className="h-4 w-4" />}
                      disabled={item.status !== 'completed'}
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProcessingHistory;