import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-500 p-4 rounded-lg mb-8 text-center">
      {message}
    </div>
  );
}