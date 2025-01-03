import { Hotel, Plane, Train, Bus, Car, Calendar } from 'lucide-react'

export function CategoryNav() {
  const categories = [
    { name: "Hotels", icon: Hotel, active: true },
    { name: "Flights", icon: Plane },
    { name: "Trains", icon: Train },
    { name: "Bus & Travel", icon: Bus },
    { name: "Car Rental", icon: Car },
    { name: "Event", icon: Calendar },
  ]

  return (
    <div className="flex justify-center space-x-8 py-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
            category.active
              ? "bg-black text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <category.icon className="w-5 h-5" />
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

