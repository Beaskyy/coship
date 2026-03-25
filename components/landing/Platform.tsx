import { Truck, BarChart3, Users, MapPin, CreditCard, Bell } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Delivery Management",
    description: "Track and manage all deliveries in real-time from pickup to drop-off.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage your drivers, dispatchers and staff all in one place.",
  },
  {
    icon: MapPin,
    title: "Route Optimization",
    description: "Automatic route optimization to save time and fuel costs.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Get detailed insights into your business performance.",
  },
  {
    icon: CreditCard,
    title: "Billing & Invoicing",
    description: "Automated billing, invoicing, and payment collection.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Keep customers and drivers updated with real-time notifications.",
  },
];

const avatars = [
  { initials: "JD", color: "bg-blue-500" },
  { initials: "AK", color: "bg-green-500" },
  { initials: "SM", color: "bg-purple-500" },
  { initials: "TW", color: "bg-pink-500" },
  { initials: "RE", color: "bg-amber-500" },
];

export default function Platform() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand uppercase tracking-wider">
            Platform
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Manage your logistics with one platform
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to run a successful courier business, all in one place.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 lg:p-8 rounded-2xl border border-gray-200 bg-white hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand/15 transition-colors">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Avatar row */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex -space-x-3">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-full ${avatar.color} flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm`}
              >
                {avatar.initials}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Join <span className="font-semibold text-gray-700">200+</span> courier companies already using Coship
          </p>
        </div>
      </div>
    </section>
  );
}
