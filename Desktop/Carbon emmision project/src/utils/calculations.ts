import { FootprintData } from '../types';

const EMISSION_FACTORS = {
  transportation: {
    car: 0.404, // kg CO2 per mile
    transit: 0.14, // kg CO2 per mile
    bike: 0, // kg CO2 per mile
    plane: 0.24, // kg CO2 per mile
  },
  energy: {
    electricity: 0.92, // kg CO2 per kWh
    gas: 5.3, // kg CO2 per therm
  },
  diet: {
    meat: 4.67, // kg CO2 per meal
    vegetarian: 2.89, // kg CO2 per meal
    vegan: 2.14, // kg CO2 per meal
  },
  waste: {
    recycling: 0.1, // kg CO2 per lb
    nonRecyclable: 0.5, // kg CO2 per lb
  },
};

export function calculateFootprint(data: FootprintData): number {
  const transportationEmissions =
    (data.transportation.car * EMISSION_FACTORS.transportation.car +
    data.transportation.transit * EMISSION_FACTORS.transportation.transit +
    data.transportation.plane * EMISSION_FACTORS.transportation.plane) * 52;

  const energyEmissions =
    data.energy.electricity * EMISSION_FACTORS.energy.electricity * 12 +
    data.energy.gas * EMISSION_FACTORS.energy.gas * 12;

  const dietEmissions =
    (data.diet.meat * EMISSION_FACTORS.diet.meat +
    data.diet.vegetarian * EMISSION_FACTORS.diet.vegetarian +
    data.diet.vegan * EMISSION_FACTORS.diet.vegan) * 52;

  const wasteEmissions =
    (data.waste.recycling * EMISSION_FACTORS.waste.recycling +
    data.waste.nonRecyclable * EMISSION_FACTORS.waste.nonRecyclable) * 52;

  return transportationEmissions + energyEmissions + dietEmissions + wasteEmissions;
}