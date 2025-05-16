import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import FileUploadArea from '../components/upload/FileUploadArea';
import ModelsSelection from '../components/models/ModelsSelection';
import VisualizationDashboard from '../components/visualization/VisualizationDashboard';
import ProcessingHistory from '../components/history/ProcessingHistory';
import { DemoResult } from '../types/results';
import { demoResults } from '../data/demoData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [files, setFiles] = useState<File[]>([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState<DemoResult[]>([]);

  const handleFileUpload = (newFiles: File[]) => {
    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
  };

  const handleProcessing = () => {
    if (files.length === 0 || !selectedModel) return;
    
    setProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setResults(demoResults);
      setProcessing(false);
      setActiveTab('results');
    }, 3000);
  };

  const clearFiles = () => {
    setFiles([]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">AI Research Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="h-full">
          <FileUploadArea 
            onFilesUploaded={handleFileUpload} 
            files={files}
            onClearFiles={clearFiles}
            onProceed={() => setActiveTab('models')}
            canProceed={files.length > 0}
          />
        </TabsContent>
        
        <TabsContent value="models" className="h-full">
          <ModelsSelection 
            onModelSelect={handleModelSelect}
            selectedModel={selectedModel}
            onProcessing={handleProcessing}
            isProcessing={processing}
            files={files}
            canProcess={files.length > 0 && !!selectedModel}
          />
        </TabsContent>
        
        <TabsContent value="results" className="h-full">
          <VisualizationDashboard 
            results={results}
            isLoading={processing}
          />
        </TabsContent>
        
        <TabsContent value="history" className="h-full">
          <ProcessingHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;