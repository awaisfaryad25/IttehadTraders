// components/SizeStamp.tsx
export default function SizeStamp({ size }: { size: string }) {
  return (
    <span className="rounded-full border border-hairline bg-ivory px-2.5 py-1 font-text text-[11px] font-semibold uppercase tracking-wide text-charcoal">
      {size}
    </span>
  );
}