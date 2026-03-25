import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pb-10">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-10">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <span 
                className="text-[44px] font-semibold text-[#E87000] tracking-tight leading-none"
                style={{ fontFamily: "'Gooper Trial SemiCondensed', serif" }}
              >
                coship
              </span>
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:gap-64">
            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] font-semibold text-[#232323]">
                Quick links
              </h4>
              <div className="flex flex-col gap-4">
                <Link href="#" className="text-sm md:text-base text-[#667185] hover:text-[#292828] transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="text-sm md:text-base text-[#667185] hover:text-[#292828] transition-colors">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[15px] font-semibold text-[#232323]">
                Contact
              </h4>
             <div className="flex flex-col gap-4">
                <a href="mailto:support@coship.com" className="text-sm md:text-base text-[#667185] hover:text-[#292828] transition-colors">
                  support@coship.com
                </a>
                <a href="tel:+2348074141143" className="text-sm md:text-base text-[#667185] hover:text-[#292828] transition-colors">
                  +234 8074141143
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 lg:ml-auto">
            <a href="#" className="size-7 size-7 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#8C8C8C] hover:bg-[#E5E7EB] hover:text-[#111827] transition-all">
              <span className="sr-only">Facebook</span>
              <svg className="size-3" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
            </a>
            <a href="#" className="size-7 size-7 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#8C8C8C] hover:bg-[#E5E7EB] hover:text-[#111827] transition-all">
              <span className="sr-only">Instagram</span>
              <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="size-7 size-7 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#8C8C8C] hover:bg-[#E5E7EB] hover:text-[#111827] transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="size-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="size-7 size-7 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#8C8C8C] hover:bg-[#E5E7EB] hover:text-[#111827] transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="size-3" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
