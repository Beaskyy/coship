import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Simple",
    price: "N40,000",
    description: "Perfect for small courier companies starting out.",
    features: [
      "Up to 5 drivers",
      "Real-time tracking",
      "Basic reporting",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "N120,000",
    description: "Advanced features for growing courier businesses.",
    features: [
      "Unlimited drivers",
      "Advanced route optimization",
      "Custom billing & invoicing",
      "API access & integrations",
      "Priority phone support",
    ],
    cta: "Get Started",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand uppercase tracking-wider">Pricing</h2>
          <p className="mt-3 text-[32px] sm:text-[40px] font-bold text-gray-900 leading-tight">
             Simple, transparent pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl border ${
                plan.popular
                  ? "border-[#F26522] bg-white shadow-xl"
                  : "border-gray-100 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F26522] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-[#F26522] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`mt-10 block w-full py-3.5 text-center text-sm font-semibold rounded-xl transition-all ${
                  plan.popular
                    ? "bg-[#F26522] text-white hover:bg-[#D4510F]"
                    : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
