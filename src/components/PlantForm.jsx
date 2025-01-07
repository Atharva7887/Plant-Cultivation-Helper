import React, { useState } from 'react';
import { FaWater, FaSeedling, FaBox, FaRuler, FaArrowLeft, FaSun, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function PlantForm() {
  const [formData, setFormData] = useState({
    plantName: '',
    category: '',
    height: '',
    sunlightIntensity: '',
    sunlightDuration: ''
  });
  const [results, setResults] = useState(null);
  const navigate = useNavigate();

  const calculatePlantCare = (data) => {
    const h = parseInt(data.height);
    const baseResults = {
      water: Math.round(h * 50) + ' ml per day',
      vermicompost: Math.round(h * 5) + ' grams per week',
      potSize: Math.round(h * 1.2) + ' inches',
      soilQuantity: Math.round(h * 0.4) + ' kg'
    };

    // Only add sunlight info if both fields are filled
    if (data.sunlightIntensity && data.sunlightDuration) {
      baseResults.sunlight = `${data.sunlightIntensity} intensity for ${data.sunlightDuration} hours per day`;
    }

    // Add category-specific care instructions
    switch (data.category) {
      case 'Fruit Plant':
        baseResults.pruning = 'Prune every 3-4 months';
        baseResults.specialCare = 'Regular fruit thinning recommended';
        break;
      case 'Flower Plant':
        baseResults.fertilizer = 'Use phosphorus-rich fertilizer';
        baseResults.specialCare = 'Deadhead spent blooms regularly';
        break;
      case 'Vegetable Plant':
        baseResults.fertilizer = 'Use balanced NPK fertilizer';
        baseResults.specialCare = 'Monitor for pests regularly';
        break;
      case 'Herb Plant':
        baseResults.harvesting = 'Harvest outer leaves first';
        baseResults.specialCare = 'Maintain moderate soil moisture';
        break;
    }

    return baseResults;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const careInfo = calculatePlantCare(formData);
    setResults(careInfo);
  };

  const handleReset = () => {
    setFormData({
      plantName: '',
      category: '',
      height: '',
      sunlightIntensity: '',
      sunlightDuration: ''
    });
    setResults(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2 text-emerald-900 hover:text-emerald-700"
      >
        <FaArrowLeft /> Back to Home
      </button>

      <form onSubmit={handleSubmit} className="bg-emerald-50 rounded-lg p-8 shadow-lg mb-8">
        <div className="space-y-6">
          <div>
            <label className="block text-emerald-900 font-lato mb-2">Plant Name</label>
            <input
              type="text"
              value={formData.plantName}
              onChange={(e) => setFormData({ ...formData, plantName: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter plant name..."
              required
            />
          </div>

          <div>
            <label className="block text-emerald-900 font-lato mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            >
              <option value="">Select category...</option>
              <option value="Flower Plant">Flower Plant</option>
              <option value="Fruit Plant">Fruit Plant</option>
              <option value="Vegetable Plant">Vegetable Plant</option>
              <option value="Herb Plant">Herb Plant</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-emerald-900 font-lato mb-2">Plant Height (cm)</label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter height in cm..."
              required
              min="1"
            />
          </div>

          <div>
            <label className="block text-emerald-900 font-lato mb-2">
              Sunlight Intensity (Optional)
            </label>
            <select
              value={formData.sunlightIntensity}
              onChange={(e) => setFormData({ ...formData, sunlightIntensity: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Select intensity...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className="block text-emerald-900 font-lato mb-2">
              Sunlight Duration (hours/day) (Optional)
            </label>
            <input
              type="number"
              value={formData.sunlightDuration}
              onChange={(e) => setFormData({ ...formData, sunlightDuration: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Hours of sunlight per day..."
              min="0"
              max="24"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-4 bg-lime-600 text-white rounded-lg font-lato hover:bg-lime-700 transition-colors"
            >
              Get Info
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-4 border-2 border-emerald-700 text-emerald-700 rounded-lg font-lato hover:bg-emerald-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </form>

      {results && (
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-playfair font-bold text-emerald-900 mb-6">
            Care Information for {formData.plantName}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <FaWater className="w-8 h-8 text-emerald-700" />
              <div>
                <p className="text-sm text-emerald-600">Daily Water Requirement</p>
                <p className="text-lg font-semibold text-emerald-900">{results.water}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaSeedling className="w-8 h-8 text-emerald-700" />
              <div>
                <p className="text-sm text-emerald-600">Vermicompost Quantity</p>
                <p className="text-lg font-semibold text-emerald-900">{results.vermicompost}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaBox className="w-8 h-8 text-emerald-700" />
              <div>
                <p className="text-sm text-emerald-600">Pot Size</p>
                <p className="text-lg font-semibold text-emerald-900">{results.potSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRuler className="w-8 h-8 text-emerald-700" />
              <div>
                <p className="text-sm text-emerald-600">Soil Quantity</p>
                <p className="text-lg font-semibold text-emerald-900">{results.soilQuantity}</p>
              </div>
            </div>
            {results.sunlight && (
              <div className="flex items-center gap-4">
                <FaSun className="w-8 h-8 text-emerald-700" />
                <div>
                  <p className="text-sm text-emerald-600">Sunlight Requirements</p>
                  <p className="text-lg font-semibold text-emerald-900">{results.sunlight}</p>
                </div>
              </div>
            )}
            {results.specialCare && (
              <div className="flex items-center gap-4">
                <FaClock className="w-8 h-8 text-emerald-700" />
                <div>
                  <p className="text-sm text-emerald-600">Special Care</p>
                  <p className="text-lg font-semibold text-emerald-900">{results.specialCare}</p>
                </div>
              </div>
            )}
            {results.pruning && (
              <div className="flex items-center gap-4">
                <FaClock className="w-8 h-8 text-emerald-700" />
                <div>
                  <p className="text-sm text-emerald-600">Pruning Schedule</p>
                  <p className="text-lg font-semibold text-emerald-900">{results.pruning}</p>
                </div>
              </div>
            )}
            {results.fertilizer && (
              <div className="flex items-center gap-4">
                <FaSeedling className="w-8 h-8 text-emerald-700" />
                <div>
                  <p className="text-sm text-emerald-600">Fertilizer</p>
                  <p className="text-lg font-semibold text-emerald-900">{results.fertilizer}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}