import Image from 'next/image';
import { siteConfig } from '@/lib/data';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/brand/logo-ada.png"
        alt={siteConfig.fullName}
        width={52}
        height={43}
        className="h-11 w-auto object-contain"
        priority
      />
      <span className="flex flex-col">
        <span
          className={`font-poppins text-lg font-bold leading-tight sm:text-xl ${
            light ? 'text-white' : 'text-brand-navy'
          }`}
        >
          ADA
        </span>
        <span
          className={`font-lexend text-[10px] font-medium uppercase tracking-wider ${
            light ? 'text-white/70' : 'text-gray-500'
          }`}
        >
          Agongo · Sèmè-Podji
        </span>
      </span>
    </span>
  );
}
