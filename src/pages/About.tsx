import React from 'react';
import { Users, Heart, TreePine } from 'lucide-react';

export const About = () => {
  const team = [
    {
      name: "Monish R",
      role: "Student",
      image: "https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/MONISH%20BACKGROUND.jpg?raw=true"
    },
    {
      name: "Md Junaid",
      role: "Student",
      image: "https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/junaid.jpg?raw=true"
    },
    {
      name: "Shaswat Mishra",
      role: "Student",
      image: "https://github.com/MonishRaman/Stardust_innovations/blob/main/assets/images/Shaswat%20MISHA%20NASA.jpg?raw=true"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About EcoMonitor</h1>
          <p className="text-xl text-gray-200">Empowering communities through environmental awareness</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide accurate, real-time environmental data to help communities make informed decisions
              about their environmental impact.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              We believe in transparency, accuracy, and community engagement in environmental monitoring
              and conservation efforts.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
            <TreePine className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Through data-driven insights and community engagement, we've helped reduce local carbon
              footprints and improve air quality.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};