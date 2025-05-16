import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileUp, X, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface FileUploadAreaProps {
  onFilesUploaded: (files: File[]) => void;
  files: File[];
  onClearFiles: () => void;
  onProceed: () => void;
  canProceed: boolean;
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  onFilesUploaded,
  files,
  onClearFiles,
  onProceed,
  canProceed
}) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesUploaded(acceptedFiles);
  }, [onFilesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    onFilesUploaded(newFiles);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="flex flex-col space-y-6">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200
          ${isDragActive || isDragging 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-300 hover:border-primary/50 hover:bg-gray-50'
          }
        `}
      >
        <input {...getInputProps()} />
        <FileUp className="h-12 w-12 mx-auto text-primary mb-4" />
        <h3 className="text-lg font-semibold mb-2">Drag and drop your files here</h3>
        <p className="text-gray-500 mb-4">or click to select files</p>
        <p className="text-xs text-gray-400">
          Supported formats: PDF, DOCX, JPG, PNG, CSV, JSON, and more
        </p>
      </div>

      {files.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-medium">Uploaded Files ({files.length})</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClearFiles}
            >
              Clear All
            </Button>
          </div>
          <ul className="divide-y divide-gray-100 max-h-64 overflow-y-auto">
            {files.map((file, index) => (
              <li key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-100 rounded p-2 mr-3">
                    <FileUp className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end">
        <Button 
          variant="primary" 
          disabled={!canProceed}
          onClick={onProceed}
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Proceed to Model Selection
        </Button>
      </div>
    </div>
  );
};

export default FileUploadArea;