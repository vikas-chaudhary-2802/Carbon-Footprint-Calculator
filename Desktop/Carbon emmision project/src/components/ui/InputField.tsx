import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function InputField({ icon, label, value, onChange, type = 'text' }: InputFieldProps) {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          min="0"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 text-gray-900"
        />
      </div>
    </div>
  );
}