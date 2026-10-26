import { Facebook } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14.2 3h2.1c.2 1.8 1.2 3.2 2.8 3.9 1 .4 1.8.6 2.4.6v2.3c-1.1 0-2.2-.3-3.3-.9v6.6c0 3.6-2.8 6.5-6.5 6.5S5.2 19.1 5.2 15.5c0-3.5 2.7-6.3 6.2-6.5v2.5c-2 .2-3.6 1.9-3.6 4 0 2.2 1.8 4 4 4s3.9-1.8 3.9-4.1V3h-1.5z" />
    </svg>
  );
}

const items = [
  { label: 'Facebook', href: '#reseaux', icon: 'facebook' as const },
  { label: 'TikTok', href: '#reseaux', icon: 'tiktok' as const },
];

export default function SocialLinks({
  tone = 'light',
}: {
  tone?: 'light' | 'dark';
}) {
  const className =
    tone === 'light'
      ? 'bg-white text-brand-navy'
      : 'bg-brand-navy text-white';

  return (
    <>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          title={`${item.label} — page à créer`}
          className={`flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-transform hover:-translate-y-0.5 ${className}`}
        >
          {item.icon === 'facebook' ? (
            <Facebook className="h-3.5 w-3.5" />
          ) : (
            <TikTokIcon className="h-3.5 w-3.5" />
          )}
        </a>
      ))}
    </>
  );
}
