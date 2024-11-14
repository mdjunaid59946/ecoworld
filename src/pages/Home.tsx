import React from 'react';
import { useUserStore } from '../store/userStore';
import { getGreeting } from '../utils/getGreeting';
import { EnvironmentalData } from '../components/EnvironmentalData';
import { Search, Droplets, Sun, Leaf, Wind, TreePine } from 'lucide-react';

export const Home = () => {
  const user = useUserStore((state) => state.user);
  const [searchCity, setSearchCity] = React.useState('');

  return (
    <div className="min-h-screen relative">
      {/* Floating Environment Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="leaf-float absolute top-20 left-[10%]">
          <Leaf className="h-8 w-8 text-emerald-400/60" />
        </div>
        <div className="leaf-float-reverse absolute top-40 right-[15%]">
          <TreePine className="h-10 w-10 text-emerald-500/60" />
        </div>
        <div className="leaf-float absolute bottom-[20%] left-[20%]">
          <Wind className="h-6 w-6 text-blue-400/60" />
        </div>
        <div className="leaf-float-reverse absolute bottom-[30%] right-[25%]">
          <Leaf className="h-6 w-6 text-emerald-300/60" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {getGreeting(user?.name)}
          </h1>
          {!user && (
            <p className="text-xl text-white/90 animate-pulse">
              Please login to access environmental data
            </p>
          )}
        </div>

        {user && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search city..."
                  className="flex-1 p-2 border rounded-md bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
              </div>
              
              <EnvironmentalData city={searchCity || user.city} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold">Water Quality</h3>
                </div>
                <div className="relative overflow-hidden rounded-lg h-40 bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                  <div className="wave-animation absolute bottom-0 w-full"></div>
                </div>
                <p className="mt-4 text-gray-600">
                  Track local water quality metrics and receive alerts about changes in water conditions.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <Sun className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold">UV Index</h3>
                </div>
                <div className="relative overflow-hidden rounded-lg h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sun className="h-16 w-16 text-yellow-500/50 animate-pulse" />
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  Monitor UV levels and get recommendations for outdoor activities.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Leaf className="h-5 w-5 text-emerald-500 mr-2" />
                Daily Eco-Tip
              </h3>
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-gray-700">
                  Consider using a reusable water bottle instead of single-use plastic bottles.
                  This small change can prevent hundreds of plastic bottles from entering our oceans each year.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};