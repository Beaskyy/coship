import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-brand relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to setup your courier company?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Join hundreds of courier companies that trust Coship to manage their operations. 
          Get started for free today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-brand bg-white rounded-full hover:bg-gray-50 transition-all hover:shadow-lg"
          >
            Create free account
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
