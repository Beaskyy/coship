import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section id="product" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="md:text-[38px] text-xl tracking-[-1px] font-semibold text-black mb-8">Simplify courier operations</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <Image src="/images/image.png" alt="image" width={570} height={540} />

          {/* Right Content */}
          <div className="flex flex-col gap-[90px]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">

<h3 className="md:text-[40px] tracking-[-1px] text-2xl font-semibold text-black max-w-[400px]">
              Built for faster courier operations
            </h3>
            <p className="md:text-[15px] text-sm text-[#959595] max-w-[444px]">
              Coship helps courier companies manage their entire operations from one dashboard. 
              Track deliveries, manage drivers, handle billing, and grow your business.
            </p>
              </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="#"
                className="flex justify-center items-center text-[15px] min-w-[140px] w-[127px] h-11 font-semibold text-white rounded-[10px] h-10 transition-colors"
                style={{ background: 'linear-gradient(0deg, #E87000 0.04%, #EA7100 100.17%)' }}
              >
                Get Started
              </Link>
          <Link
            href="#"
            className="px-8 py-3.5 text-[15px] w-[146px] h-11 text-sm whitespace-nowrap flex justify-center items-center font-bold text-[#D97706] rounded-xl bg-white rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-transparent"
          >
           Contact Support
          </Link>
            </div>
            
            </div>

            {/* Integration part */}
            <div className="mt-12 flex items-center gap-8">
               <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">P</div>
                  <span className="text-sm font-bold text-gray-900 tracking-tight">paystack</span>
               </div>
               <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white text-[10px] font-bold">F</div>
                  <span className="text-sm font-bold text-gray-900 tracking-tight">flutterwave</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
