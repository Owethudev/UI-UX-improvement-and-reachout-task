import appleLogo from "../../assets/images/brands/apple.svg";
import dellLogo from "../../assets/images/brands/dell.svg";
import hpLogo from "../../assets/images/brands/hp.svg";
import lgLogo from "../../assets/images/brands/lg.svg";
import samsungLogo from "../../assets/images/brands/samsung.svg";
import sonyLogo from "../../assets/images/brands/sony.svg";

import PageContainer from "../layout/PageContainer";
import OptimizedImage from "../ui/OptimizedImage";

const brands = [
  { name: "Apple", logo: appleLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "LG", logo: lgLogo },
  { name: "Sony", logo: sonyLogo },
  { name: "Dell", logo: dellLogo },
  { name: "HP", logo: hpLogo },
];

export default function Brands() {
  return (
    <section className="border-b border-black/10 bg-[#f7f7f2] py-6 sm:py-8">
      <PageContainer>
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 py-4 shadow-[0_12px_32px_rgba(17,17,17,0.04)]">
          <div className="flex w-max animate-marquee items-center gap-4 sm:gap-5">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex min-w-[150px] flex-shrink-0 items-center justify-center rounded-[1.25rem] border border-black/10 bg-[#f7f7f2] px-6 py-4 sm:min-w-[180px]"
              >
                <OptimizedImage src={brand.logo} alt={brand.name} width={180} height={48} loading="lazy" className="h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
