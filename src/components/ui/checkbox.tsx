import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  className?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onCheckedChange,
  id,
  className = '',
  label
}) => {
  const handleChange = () => {
    onCheckedChange(!checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
      />
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
    </div>
  );
};