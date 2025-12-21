import Image from "next/image";
import { PROPERTYLISTINGSAMPLE, HERO_BG } from "@/constants";

export default function Home() {
  return (
    <div>

      {/* ---------- Hero Section ---------- */}
      <section className="relative h-[450px] w-full">
        <Image
          src={HERO_BG}
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 text-white max-w-lg">
          <h1 className="text-4xl font-extrabold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* ---------- Listing Section ---------- */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Listings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
            >
              {/* Property Image */}
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{property.name}</h3>
                <p className="text-sm text-gray-500">
                  ⭐ {property.rating} · {property.address.city}, {property.address.country}
                </p>
                <p className="font-bold mt-2">${property.price}/night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
