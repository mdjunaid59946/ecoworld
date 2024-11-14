import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '2024-01', aqi: 45 },
  { date: '2024-02', aqi: 52 },
  { date: '2024-03', aqi: 48 },
  { date: '2024-04', aqi: 58 },
  { date: '2024-05', aqi: 50 },
];

export const EnvironmentalData = ({ city }: { city: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Air Quality Index - {city}</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="aqi" stroke="#059669" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};