import React from 'react';
import { Car, Lightbulb, Leaf, Recycle } from 'lucide-react';

export function getRecommendations(footprint: number) {
  return [
    {
      icon: <Car className="w-6 h-6 text-blue-500" />,
      title: 'Reduce Car Usage',
      description: 'Consider carpooling or using public transportation twice a week.',
      savings: 200,
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: 'Energy Efficiency',
      description: 'Switch to LED bulbs and energy-efficient appliances.',
      savings: 300,
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      title: 'Plant-Based Meals',
      description: 'Try having two meat-free days per week.',
      savings: 400,
    },
    {
      icon: <Recycle className="w-6 h-6 text-green-600" />,
      title: 'Improve Recycling',
      description: 'Start composting and increase recycling efforts.',
      savings: 150,
    },
  ];
}