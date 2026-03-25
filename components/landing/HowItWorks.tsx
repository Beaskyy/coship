import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Create an account",
    description: "Set up your courier business on the FleetSend in less than a minutes",
    image: "/images/get-started.png",
    width: 980,
    height: 612
  },
  {
    number: "2",
    title: "Setup your team and dispatch",
    description: "Create admin accounts, tenant admins, dispatches, and staff with role based access.",
    image: "/images/new-user.png",
    width: 503,
    height: 422
  },
  {
    number: "3",
    title: "Set pricing and delivery rules",
    description: "Customize delivery pricing based on your preferred model.",
    image: "/images/set-pricing.png",
    width: 579,
    height: 300
  },
  {
    number: "4",
    title: "Start managing deliveries",
    description: "Create orders, assign drivers, track payments, and manage operations easily.",
    image: "/images/new-order.png",
    width: 443,
    height: 300
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="overflow-hidden bg-white">
      <div className="flex flex-col gap-8">
<h2 className="md:text-[38px] text-xl font-semibold text-black text-center">How to get started</h2>
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center bg-[#FAFAFA] md:rounded-[36px] rounded-[24px] md:pl-[134px] pl-4 pt-4 overflow-hidden">
               <div className="flex flex-col justify-center max-w-[275px] gap-[14px]">
                  <div className="md:size-11 size-8 md:text-[25px] text-lg rounded-full bg-[#D97706] flex items-center justify-center text-white text-sm font-bold mb-[9px]">
                     {step.number}
                  </div>
                  <h3 className="md:text-2xl text-xl font-semibold text-[#000000E0] md:text-[30px] text-xl tracking-[-0.5px]">{step.title}</h3>
                  <p className="md:text-lg text-sm text-[#4A5565]">{step.description}</p>
               </div>

               {/* Right side: large container with image placeholder */}
               <div className="col-span-2 md:pt-[67px] pt-6">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  width={step.width} 
                  height={step.height}
                  className="w-full h-auto"
                />
               </div>
            </div>
          ))}
        </div>
      </div>
</div>
      
    </section>
  );
}
