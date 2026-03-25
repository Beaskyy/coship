import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-[40px] font-semibold text-[#0A0A0A] text-center mb-16 tracking-[-1px]">
          Ready to setup your<br className="hidden md:block" /> courier company?
        </h2>
        
        <div className="relative bg-[#D97706] rounded-[23px] overflow-hidden flex flex-col lg:flex-row shadow-sm min-h-[480px]">
          {/* Left Column */}
          <div className="relative z-10 lg:w-[55%] p-5 pt-8 lg:p-20 flex flex-col justify-center">
            <h3 className="text-white text-3xl lg:text-[44px] font-bold leading-[1.1] tracking-[-1px] mb-12">
              Run your courier<br /> business on one<br /> platform
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="inline-flex justify-center items-center text-sm h-11 p-3 text-[18px] font-semibold text-[#D97706] bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center text-sm h-11 p-3 text-[18px] font-semibold text-[#D97706] bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Right Column / Image container */}
        <div className="absolute right-0 bottom-0"> 
          <Image 
            src="/images/dashboard.png" 
            alt="Coship Dashboard"
            width={719}
            height={465}
            className="object-cover object-left-top"
          /></div>
        </div>
      </div>
    </section>
  );
}
