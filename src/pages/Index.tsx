import React from "react";
import ItemCard from "@/components/ItemCard";
import AboutSection from "@/components/AboutSection";

// Hardcoded items data
const items = [
  {
    id: 1,
    title: "Router Xiaomi 4A",
    description: "-",
    price: 5.00,
    image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1602584630.78953985.png",
    status: "available" as const,
  },
  {
    id: 2,
    title: "Chromecast",
    description: "-",
    price: 15.00,
    image: "https://images.versus.io/objects/google-chromecast-2nd-gen.front.master.1635862152314.jpg",
    status: "available" as const,
  },
  {
    id: 3,
    title: "Leather Armchair",
    description: "Genuine leather armchair in cognac color. Some patina but excellent condition.",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500",
    status: "reserved" as const,
  },
  {
    id: 4,
    title: "Bookshelf",
    description: "Solid wood bookshelf, 6 feet tall. Perfect for your home library.",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500",
    status: "sold" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sarah's Garage Sale</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default Index;