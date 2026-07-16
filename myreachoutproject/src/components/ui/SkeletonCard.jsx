export default function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_12px_35px_rgba(17,17,17,0.04)]">
      <div className="h-48 bg-[#eceae1]" />
      <div className="space-y-3 p-6">
        <div className="h-4 w-3/4 rounded-full bg-[#eceae1]" />
        <div className="h-4 w-1/2 rounded-full bg-[#eceae1]" />
        <div className="h-4 w-full rounded-full bg-[#eceae1]" />
      </div>
    </div>
  );
}
