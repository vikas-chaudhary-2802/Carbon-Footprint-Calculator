import React from 'react';
import { Car, Bus, Bike, Plane } from 'lucide-react';
import { InputField } from '../ui/InputField';
import { FootprintData } from '../../types';

interface TransportationFormProps {
  data: FootprintData;
  onChange: (data: Partial<FootprintData>) => void;
}

export function TransportationForm({ data, onChange }: TransportationFormProps) {
  const handleInputChange = (field: keyof FootprintData['transportation'], value: string) => {
    onChange({
      transportation: {
        ...data.transportation,
        [field]: Number(value)
      }
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transportation Details</h2>
      
      <InputField
        icon={<Car className="w-5 h-5" />}
        label="Car miles per week"
        value={data.transportation.car}
        onChange={(e) => handleInputChange('car', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Bus className="w-5 h-5" />}
        label="Public transit miles per week"
        value={data.transportation.transit}
        onChange={(e) => handleInputChange('transit', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Bike className="w-5 h-5" />}
        label="Bike miles per week"
        value={data.transportation.bike}
        onChange={(e) => handleInputChange('bike', e.target.value)}
        type="number"
      />

      <InputField
        icon={<Plane className="w-5 h-5" />}
        label="Flight miles per month"
        value={data.transportation.plane}
        onChange={(e) => handleInputChange('plane', e.target.value)}
        type="number"
      />
    </div>
  );
}