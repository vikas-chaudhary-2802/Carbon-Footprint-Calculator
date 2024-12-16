import React from 'react';
import { Zap, Flame } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { FootprintData } from '../../types';

interface EnergyFormProps {
  data: FootprintData;
  onChange: (data: Partial<FootprintData>) => void;
}

export function EnergyForm({ data, onChange }: EnergyFormProps) {
  const handleInputChange = (field: keyof FootprintData['energy'], value: string) => {
    onChange({
      energy: {
        ...data.energy,
        [field]: Number(value)
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Energy Usage</h2>

      <InputField
        icon={<Zap className="w-5 h-5" />}
        label="Monthly electricity usage (kWh)"
        value={data.energy.electricity}
        onChange={(e) => handleInputChange('electricity', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Flame className="w-5 h-5" />}
        label="Monthly gas usage (therms)"
        value={data.energy.gas}
        onChange={(e) => handleInputChange('gas', e.target.value)}
        type="number"
      />
    </div>
  );
}