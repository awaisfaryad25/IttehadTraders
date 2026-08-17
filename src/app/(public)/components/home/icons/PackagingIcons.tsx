export function ContainerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <rect x="10" y="20" width="44" height="34" rx="4" fill="#fff" stroke="#1C1E21" strokeWidth="2.5" />
      <path d="M8 20h48l-4-8H12l-4 8Z" fill="#C9973D" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="16" y1="30" x2="48" y2="30" stroke="#1C1E21" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

export function GlassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M18 10h28l-4 44a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4L18 10Z" fill="#fff" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="20" y1="20" x2="44" y2="20" stroke="#1C1E21" strokeWidth="1.5" opacity="0.3" />
      <path d="M22 44c4 3 16 3 20 0" stroke="#C9973D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CupIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M14 16h36l-5 38a4 4 0 0 1-4 3.5H23a4 4 0 0 1-4-3.5L14 16Z" fill="#C9973D" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="32" cy="16" rx="18" ry="4" fill="#fff" stroke="#1C1E21" strokeWidth="2.5" />
      <path d="M46 24c6 2 8 8 3 12" stroke="#1C1E21" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function BagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M14 22h36l-3 34a4 4 0 0 1-4 4H21a4 4 0 0 1-4-4L14 22Z" fill="#fff" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M22 22v-6a10 10 0 0 1 20 0v6" stroke="#1C1E21" strokeWidth="2.5" fill="none" />
      <line x1="18" y1="30" x2="46" y2="30" stroke="#C9973D" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

export function BoxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <path d="M8 20 32 8l24 12-24 12L8 20Z" fill="#fff" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M8 20v24l24 12V32L8 20Z" fill="#F1EAD9" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M56 20v24L32 56V32l24-12Z" fill="#C9973D" stroke="#1C1E21" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}