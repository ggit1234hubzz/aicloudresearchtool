import React from 'react';
import { Brain, ArrowRight, Check, Info } from 'lucide-react';
import Button from '../ui/Button';
import { aiModels } from '../../data/modelsData';

interface ModelsSelectionProps {
  onModelSelect: (modelId: string) => void;
  selectedModel: string;
  onProcessing: () => void;
  isProcessing: boolean;
  files: File[];
  canProcess: boolean;
}

const ModelsSelection: React.FC<ModelsSelectionProps> = ({
  onModelSelect,
  selectedModel,
  onProcessing,
  isProcessing,
  files,
  canProcess
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
        <Info className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <p className="text-sm text-gray-700">
            <strong>Select an AI model</strong> to process your {files.length} file(s). Each model is optimized for different types of analysis.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiModels.map((model) => (
          <div 
            key={model.id}
            className={`
              border rounded-xl p-5 cursor-pointer transition-all duration-200
              ${selectedModel === model.id 
                ? 'border-primary bg-primary/5 shadow-sm' 
                : 'border-gray-200 hover:border-primary/30 hover:bg-gray-50'
              }
            `}
            onClick={() => onModelSelect(model.id)}
          >
            <div className="flex justify-between items-start mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              {selectedModel === model.id && (
                <div className="bg-primary text-white p-1 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
              )}
            </div>
            <h3 className="font-semibold mb-1">{model.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{model.description}</p>
            <div className="flex flex-wrap gap-2">
              {model.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button 
          variant="primary" 
          disabled={!canProcess}
          onClick={onProcessing}
          isLoading={isProcessing}
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Process Files
        </Button>
      </div>
    </div>
  );
};

export default ModelsSelection;