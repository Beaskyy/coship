const steps = [
  {
    number: "1",
    title: "Create an account",
    description: "Coship helps courier companies manage their entire operations from one dashboard — track deliveries, manage drivers, and grow your business.",
  },
  {
    number: "2",
    title: "Setup your team and dispatch",
    description: "Coship helps courier companies manage their entire operations from one dashboard — track deliveries, manage drivers, and grow your business.",
  },
  {
    number: "3",
    title: "Set pricing and delivery rules",
    description: "Coship helps courier companies manage their entire operations from one dashboard — track deliveries, manage drivers, and grow your business.",
  },
  {
    number: "4",
    title: "Start managing deliveries",
    description: "Coship helps courier companies manage their entire operations from one dashboard — track deliveries, manage drivers, and grow your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-20">How to get started</h2>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={step.number} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               <div className="max-w-md">
                  <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center text-white text-sm font-bold mb-6">
                     {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-base text-gray-400 leading-relaxed">{step.description}</p>
               </div>

               {/* Right side: large container with image placeholder */}
               <div className="relative">
                  <div className="aspect-[1.4/1] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center">
                     <div className="text-center p-10">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#F26522]/10 rounded-2xl flex items-center justify-center">
                           <span className="text-[#F26522] font-bold text-xl">{step.number}</span>
                        </div>
                        <p className="text-gray-400 text-sm font-medium">Screenshot Placeholder</p>
                        <p className="text-gray-300 text-xs mt-1 italic">{step.title} UI</p>
                     </div>
                  </div>
                  {/* Floating element decorative */}
                  {index === 0 && (
                     <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-48 aspect-[3/4] rounded-2xl bg-gray-100 border border-white shadow-xl overflow-hidden hidden md:block">
                         <div className="h-full bg-gradient-to-br from-amber-200 to-orange-100 flex items-center justify-center">
                             <p className="text-[10px] font-bold text-orange-900 rotate-90 opacity-20 whitespace-nowrap uppercase tracking-tighter">Decorative Portrait Image</p>
                         </div>
                     </div>
                  )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
