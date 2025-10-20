import {Facebook} from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Brand - Centered */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-amber-900 font-bold text-lg">PG</span>
            </div>
            <h3 className="text-2xl font-bold">Pizza Gioco</h3>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.facebook.com/giocopizza"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-800 px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800 text-center">
          <p className="text-amber-300 text-sm md:text-base">© 2025 Pizza Gioco. Toate drepturile rezervate.</p>
          <p className="text-amber-200 text-xs md:text-sm mt-2">Designed by Stoica Serena</p>
        </div>
      </div>
    </footer>
  );
}
