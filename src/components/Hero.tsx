import { Phone, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1737046315119-0119468805ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Nrc21pdGglMjBkb29yJTIwbG9ja3xlbnwxfHx8fDE3NjExNzg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Serrurerie"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span>Service d'urgence 24h/24 - 7j/7</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6">
            Votre Expert en Serrurerie
          </h1>
          
          <p className="text-xl mb-8 text-blue-100">
            Dépannage rapide, installation et sécurisation. Intervention en moins de 30 minutes partout dans la région.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:0678068690">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto" onClick={scrollToContact}>
              Demander un devis
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="mb-1">Intervention rapide</div>
                <p className="text-blue-200 text-sm">En moins de 30 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="mb-1">Prix transparents</div>
                <p className="text-blue-200 text-sm">Devis gratuit sans engagement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <div className="mb-1">Artisan qualifié</div>
                <p className="text-blue-200 text-sm">5★ sur 88 avis clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
