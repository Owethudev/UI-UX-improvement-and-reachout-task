export default function LoadingSpinner({ label = "Loading" }) {
  return (
    <div className="flex items-center justify-center gap-3 py-6 text-sm font-medium text-[#4b5563]" role="status" aria-live="polite">
      <span className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
