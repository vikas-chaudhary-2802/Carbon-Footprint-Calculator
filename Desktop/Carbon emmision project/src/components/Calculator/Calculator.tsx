import React, { useState } from 'react';
import { TransportationForm } from './TransportationForm';
import { EnergyForm } from './EnergyForm';
import { DietForm } from './DietForm';
import { WasteForm } from './WasteForm';
import { Results } from './Results';
import { Leaf } from 'lucide-react';
import { calculateFootprint } from '../../utils/calculations';
import { FootprintData } from '../../types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type StepComponent = React.ComponentType<{
  data: FootprintData;
  onChange: (data: Partial<FootprintData>) => void;
}>;

interface Step {
  title: string;
  component: StepComponent;
}

export function Calculator() {
  const [activeStep, setActiveStep] = useState(0);
  const [footprintHistory, setFootprintHistory] = useLocalStorage<FootprintData[]>('footprint-history', []);
  const [formData, setFormData] = useState<FootprintData>({
    transportation: { car: 0, transit: 0, bike: 0, plane: 0 },
    energy: { electricity: 0, gas: 0 },
    diet: { meat: 0, vegetarian: 0, vegan: 0 },
    waste: { recycling: 0, nonRecyclable: 0 }
  });

  const steps: Step[] = [
    { title: 'Transportation', component: TransportationForm },
    { title: 'Energy Usage', component: EnergyForm },
    { title: 'Diet Choices', component: DietForm },
    { title: 'Waste Habits', component: WasteForm },
  ];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      const result = calculateFootprint(formData);
      setFootprintHistory(prev => [...prev, { ...formData, timestamp: new Date().toISOString() }]);
    }
    setActiveStep(prev => Math.min(prev + 1, steps.length));
  };

  const handlePrevious = () => {
    setActiveStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Leaf className="w-8 h-8 text-green-500 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">Eco-Footprint Calculator</h1>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex-1 ${
                    index !== steps.length - 1 ? 'border-b-2' : ''
                  } ${
                    index <= activeStep ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center -mb-[2px] transition-colors ${
                      index <= activeStep ? 'text-green-500' : 'text-gray-400'
                    }`}
                  >
                    <span className="bg-white px-2">{step.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            {activeStep < steps.length ? (
              React.createElement(steps[activeStep].component, {
                data: formData,
                onChange: (newData) => setFormData({ ...formData, ...newData })
              })
            ) : (
              <Results footprint={calculateFootprint(formData)} history={footprintHistory} />
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={activeStep === 0}
              className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {activeStep < steps.length && (
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
              >
                {activeStep === steps.length - 1 ? 'Calculate' : 'Next'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}