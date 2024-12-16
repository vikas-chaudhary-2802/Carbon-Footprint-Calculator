import React from 'react';
import { Recycle, Trash2 } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { FootprintData } from '../../types';

interface WasteFormProps {
  data: FootprintData;
  onChange: (data: Partial<FootprintData>) => void;
}

export function WasteForm({ data, onChange }: WasteFormProps) {
  const handleInputChange = (field: keyof FootprintData['waste'], value: string) => {
    onChange({
      waste: {
        ...data.waste,
        [field]: Number(value)
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Waste Habits</h2>

      <InputField
        icon={<Recycle className="w-5 h-5" />}
        label="Recycling (lbs/week)"
        value={data.waste.recycling}
        onChange={(e) => handleInputChange('recycling', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Trash2 className="w-5 h-5" />}
        label="Non-recyclable waste (lbs/week)"
        value={data.waste.nonRecyclable}
        onChange={(e) => handleInputChange('nonRecyclable', e.target.value)}
        type="number"
      />
    </div>
  );
}