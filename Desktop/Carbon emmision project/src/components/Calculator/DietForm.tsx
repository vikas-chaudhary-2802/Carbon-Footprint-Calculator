import React from 'react';
import { Beef, Salad, Carrot } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { FootprintData } from '../../types';

interface DietFormProps {
  data: FootprintData;
  onChange: (data: Partial<FootprintData>) => void;
}

export function DietForm({ data, onChange }: DietFormProps) {
  const handleInputChange = (field: keyof FootprintData['diet'], value: string) => {
    onChange({
      diet: {
        ...data.diet,
        [field]: Number(value)
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Diet Choices</h2>

      <InputField
        icon={<Beef className="w-5 h-5" />}
        label="Meat meals per week"
        value={data.diet.meat}
        onChange={(e) => handleInputChange('meat', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Salad className="w-5 h-5" />}
        label="Vegetarian meals per week"
        value={data.diet.vegetarian}
        onChange={(e) => handleInputChange('vegetarian', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Carrot className="w-5 h-5" />}
        label="Vegan meals per week"
        value={data.diet.vegan}
        onChange={(e) => handleInputChange('vegan', e.target.value)}
        type="number"
      />
    </div>
  );
}