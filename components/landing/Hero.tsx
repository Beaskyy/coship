import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative md:pt-20 pt-10 pb-0 overflow-hidden" style={{ backgroundColor: '#FDF3E8' }}>
      <div className="max-w-[746px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 
          className="md:text-[64px] text-4xl leading-[1.1] tracking-[-2px] font-semibold text-[#292828] max-w-4xl mx-auto"
        >
          Manage your courier business in one place
        </h1>
        
        {/* Subtext */}
        <p 
          className="mt-6 md:text-[20px] text-base font-medium text-[#4A4A4D] max-w-[469px] mx-auto leading-relaxed tracking-[-1px]"
        >
          Manage deliveries, dispatch, pricing, & payments with a system built for courier companies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
                href="#"
                className="flex justify-center items-center text-[15px] min-w-[140px] max-w-[287px] h-11 font-semibold text-white rounded-[10px] h-10 transition-colors"
                style={{ background: 'linear-gradient(0deg, #E87000 0.04%, #EA7100 100.17%)' }}
              >
                Get Started
              </Link>
          <Link
            href="#"
            className="px-8 py-3.5 text-[15px] w-[133px] h-11 text-sm whitespace-nowrap flex justify-center items-center font-bold text-[#D97706] rounded-xl bg-white rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-transparent"
          >
            Track Package
          </Link>
        </div>

        {/* Product Screenshot */}
        <div className="mt-20 relative flex justify-center items-center">
          <div className="">
             <Image
               src="/images/hero-dashboard.png" 
               alt="Coship Dashboard" 
               className="w-full h-full lg:min-w-[1266px]" 
               width={1266}
               height={600}
             />
          </div>
          <div className="absolute md:-left-[355px] md:top-60 animate-float">
             <Image
               src="/images/date-range-picker.svg" 
               alt="Date range picker" 
               className="w-full h-full" 
               width={506}
               height={300}
             />
          </div>
          <div className="absolute md:-right-[270px] md:top-42 animate-float [animation-delay:1.5s]">
             <Image 
               src="/images/user-roles.svg" 
               alt="User roles" 
               className="w-full h-full" 
               width={195}
               height={138}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
