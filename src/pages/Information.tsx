import React from 'react';
import { Leaf, Droplets, TreePine, Map } from 'lucide-react';

export const Information = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Environmental Information</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-bold">Local Wildlife</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Native Species</h3>
                <p className="text-gray-600">
                  Our region is home to diverse wildlife including red-tailed hawks,
                  white-tailed deer, and various songbird species.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Conservation Status</h3>
                <p className="text-gray-600">
                  Several species are under protection, and local conservation efforts
                  are ongoing to preserve their habitats.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <TreePine className="h-6 w-6 text-emerald-600 mr-2" />
              <h2 className="text-2xl font-bold">Plant Species</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Native Flora</h3>
                <p className="text-gray-600">
                  Local plant species include oak trees, native wildflowers,
                  and various medicinal plants.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Invasive Species Alert</h3>
                <p className="text-gray-600">
                  Watch out for and report these invasive species that threaten
                  our local ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="flex items-center mb-4">
            <Map className="h-6 w-6 text-emerald-600 mr-2" />
            <h2 className="text-2xl font-bold">Local Green Spaces</h2>
          </div>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <img
              src="https://images.unsplash.com/photo-1500964757637-c85e8a162699"
              alt="Local park"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Conservation Areas</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Riverside Nature Reserve</li>
                <li>Mountain Trail System</li>
                <li>Wetland Preserve</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Community Parks</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Central Community Garden</li>
                <li>Oak Grove Park</li>
                <li>Meadowview Recreation Area</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Feedback</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Share your thoughts or suggestions..."
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};