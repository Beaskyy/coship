import Image from "next/image";

const roles = [
  {
    name: "Dispatch",
    image: "/images/dispatch-blue.png",
  },
  {
    name: "Staff",
    image: "/images/staff.png",
  },
  {
    name: "Administrator",
    image: "/images/administrator.png",
  },
  {
    name: "Super Administrator",
    image: "/images/super-administrator.png",
  },
  {
    name: "Dispatch",
    image: "/images/dispatch-yellow.png",
  },
];

export default function Platform() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-[40px] font-semibold text-[#0A0A0A] text-center mb-[54px] tracking-tight">
          Manage your logistics<br className="hidden md:block" /> with one platform
        </h2>

        <div className="relative mt-8 py-4 overflow-hidden group flex w-full">
          <div className="flex animate-marquee shrink-0 px-3 gap-4 w-max group-hover:[animation-play-state:paused]">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className="w-[280px] h-[317px] shrink-0 bg-[#E8710B] rounded-b-[24px] rounded-t-[20px] p-1 border-4 border-[#E8710B] flex flex-col gap-1 shadow-sm"
              >
                <div className="pr-4">
                  <span className="text-white font-semibold text-[19px]">{role.name}</span>
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]">
                  <Image 
                    src={role.image} 
                    alt={role.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee shrink-0 px-3 gap-6 w-max group-hover:[animation-play-state:paused]">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className="w-[280px] h-[317px] shrink-0 bg-[#E8710B] rounded-b-[24px] rounded-t-[24px] p-1 border-4 border-[#E8710B] flex flex-col gap-1 shadow-sm"
              >
                <div className="">
                  <span className="text-white font-semibold text-[19px]">{role.name}</span>
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px]">
                  <Image 
                    src={role.image} 
                    alt={role.name} 
                    fill 
                    className="object-cover"
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
