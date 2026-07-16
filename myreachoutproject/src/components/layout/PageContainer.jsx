// This wrapper keeps page spacing consistent across the entire experience.
// Another developer can reuse it anywhere without redefining padding or width.

export default function PageContainer({ children }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
}