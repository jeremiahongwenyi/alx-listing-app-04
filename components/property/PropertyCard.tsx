import React from 'react'

interface PropertyCardProps {
    property: { id: number; title: string; description: string; price: number } 
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-bold">{property.title}</h2>
      <p className="text-gray-700">{property.description}</p>
      <p className="text-gray-600">${property.price}</p>
    </div>
  )
}

export default PropertyCard