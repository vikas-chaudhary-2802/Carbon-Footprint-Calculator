import React from 'react';
import { BarChart, TreeDeciduous, ArrowDown } from 'lucide-react';
import { getRecommendations } from '../../utils/recommendations';
import { FootprintData } from '../../types';

interface ResultsProps {
  footprint: number;
  history: FootprintData[];
}

export function Results({ footprint, history }: ResultsProps) {
  const recommendations = getRecommendations(footprint);
  const averageFootprint = 11000; // Average annual CO2 emissions in kg per person

  const getPercentageReduction = () => {
    if (history.length < 2) return 0;
    const previous = calculateFootprint(history[history.length - 2]);
    const current = calculateFootprint(history[history.length - 1]);
    return ((previous - current) / previous) * 100;
  };

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-green-50 rounded-xl p-6 border border-green-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Carbon Footprint</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Annual CO₂ Emissions</p>
                <p className="text-3xl font-bold text-gray-800">{Math.round(footprint)} kg</p>
              </div>
              <BarChart className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Compared to Average</p>
                <p className="text-3xl font-bold text-gray-800">
                  {Math.round((footprint / averageFootprint) * 100)}%
                </p>
              </div>
              <TreeDeciduous className="w-8 h-8 text-green-500" />
            </div>
          </div>
        </div>

        {history.length > 1 && (
          <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Reduction from Last Calculation</p>
                <p className="text-3xl font-bold text-green-500">
                  {Math.round(getPercentageReduction())}%
                </p>
              </div>
              <ArrowDown className="w-8 h-8 text-green-500" />
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h3>
        <div className="grid gap-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {rec.icon}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">{rec.title}</p>
                  <p className="text-sm text-gray-600">{rec.description}</p>
                  <p className="text-sm font-medium text-green-600 mt-1">
                    Potential savings: {rec.savings} kg CO₂/year
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}