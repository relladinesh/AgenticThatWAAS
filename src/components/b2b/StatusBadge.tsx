import React from 'react';
import { DeploymentStatus } from '../../types/business';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function StatusBadge({ status }: { status: DeploymentStatus }) {
  const styles = {
    Pending: 'bg-gray-100 text-gray-700',
    Generating: 'bg-blue-100 text-blue-700 animate-pulse',
    Deploying: 'bg-purple-100 text-purple-700 animate-pulse',
    Success: 'bg-green-100 text-green-700',
    Failed: 'bg-red-100 text-red-700'
  };

  return (
    <span className={cn('px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center w-fit', styles[status])}>
      {status}
    </span>
  );
}
