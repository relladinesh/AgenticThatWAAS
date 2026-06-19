import React, { useCallback, useState } from 'react';
import { UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from './StatusBadge';

interface CsvUploaderProps {
  onFileSelect: (file: File) => void;
  isLoading: boolean;
}

export function CsvUploader({ onFileSelect, isLoading }: CsvUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFile = (file: File) => {
    setError(null);
    setSuccess(null);

    const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!validTypes.includes(file.type) && !file.name.endsWith('.csv')) {
      setError('Please upload a valid CSV or Excel file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB.');
      return;
    }

    setSuccess(`Successfully loaded ${file.name}`);
    onFileSelect(file);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [onFileSelect]);

  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div 
        className={cn(
          "relative border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center transition-all bg-white",
          isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400"
        )}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <UploadCloud className="w-8 h-8 text-slate-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Upload CSV File</h3>
        <p className="text-slate-500 text-sm mb-6 text-center">
          Drag and drop your .csv or .xlsx file here, or click to browse.
        </p>
        
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors disabled:opacity-50">
          {isLoading ? 'Processing...' : 'Browse File'}
          <input 
            type="file" 
            className="hidden" 
            accept=".csv, .xlsx" 
            onChange={onFileInput}
            disabled={isLoading}
          />
        </label>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium text-sm">{error}</span>
        </div>
      )}

      {success && (
        <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium text-sm">{success}</span>
        </div>
      )}
    </div>
  );
}
