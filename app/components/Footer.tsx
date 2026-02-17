export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-700 flex items-center justify-center text-xs font-bold">
            af
          </div>
          <span className="text-sm">Afework Indonesia</span>
        </div>
        <div className="text-sm text-gray-400 text-center md:text-right">
          © Syammilah Reserved
        </div>
      </div>
    </footer>
  );
}
