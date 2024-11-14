import React from 'react';

export const Awareness = () => {
  const pollutionData = {
    air: [
      {
        title: "Industrial Air Pollution",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
        video: "https://www.youtube.com/embed/e6rglsLy1Ys",
        description: "Industrial emissions contribute significantly to air pollution, affecting both urban and rural areas."
      },
      {
        title: "Vehicle Emissions",
        image: "https://images.unsplash.com/photo-1575789473825-d2ec5e9b1b9b",
        video: "https://www.youtube.com/embed/CrZYqJSfF_Y",
        description: "Transportation is a major source of air pollution in cities worldwide."
      }
    ],
    water: [
      {
        title: "Ocean Plastic Pollution",
        image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
        video: "https://www.youtube.com/embed/HQTUWK7CM-Y",
        description: "Plastic waste is severely impacting marine ecosystems and water quality."
      },
      {
        title: "Industrial Water Pollution",
        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f",
        video: "https://www.youtube.com/embed/Om42Lppkd9w",
        description: "Industrial discharge continues to threaten water bodies and aquatic life."
      }
    ],
    land: [
      {
        title: "Deforestation Impact",
        image: "https://images.unsplash.com/photo-1615411640812-5c2c5ea03f9c",
        video: "https://www.youtube.com/embed/Ic-J6hcSKa8",
        description: "Massive deforestation leads to soil erosion and loss of biodiversity."
      },
      {
        title: "Waste Management Crisis",
        image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807",
        video: "https://www.youtube.com/embed/qq8Y_fIM3qk",
        description: "Improper waste disposal creates lasting environmental damage."
      }
    ]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Environmental Awareness</h1>

        {Object.entries(pollutionData).map(([type, items]) => (
          <div key={type} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 capitalize">{type} Pollution</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.title} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={item.video}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-64 rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};