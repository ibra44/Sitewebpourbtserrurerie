import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">BT</span>
              </div>
              <h3 className="text-xl">BT Serrurerie</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Votre expert en serrurerie disponible 24h/24 et 7j/7 pour tous vos besoins en sécurité et dépannage.
            </p>
            <div className="flex items-center gap-2 text-yellow-500">
              <span>★★★★★</span>
              <span className="text-gray-400 text-sm">(88 avis)</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Dépannage d'urgence</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Installation de serrures</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Blindage de porte</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Reproduction de clés</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Réparation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:0678068690" className="hover:text-white transition-colors">06 78 06 86 90</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@bt-serrurerie.fr" className="hover:text-white transition-colors">contact@bt-serrurerie.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Paris et Île-de-France</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Suivez-nous</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Ouvert 24h/24 - 7j/7<br />
              Service d'urgence disponible
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} BT Serrurerie. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
