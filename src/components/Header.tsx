import { Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">BT</span>
            </div>
            <div>
              <h1 className="text-blue-900">BT Serrurerie</h1>
              <div className="flex items-center gap-1 text-yellow-500">
                <span>★★★★★</span>
                <span className="text-gray-600 text-sm">(88 avis)</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Témoignages
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-green-600">
              <Clock className="w-5 h-5" />
              <span>24h/24 - 7j/7</span>
            </div>
            <a href="tel:0678068690">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                06 78 06 86 90
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
