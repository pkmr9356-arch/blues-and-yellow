export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center container mx-auto px-6 py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />
        <p className="text-sm font-medium text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
