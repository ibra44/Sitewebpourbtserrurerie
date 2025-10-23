import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { icon: Users, value: "500+", label: "Clients satisfaits" },
  { icon: Clock, value: "24/7", label: "Disponibilité" },
  { icon: Award, value: "10+", label: "Ans d'expérience" },
  { icon: ThumbsUp, value: "5.0", label: "Note moyenne" }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">À Propos de BT Serrurerie</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fort de plus de 10 ans d'expérience dans le domaine de la serrurerie, BT Serrurerie est votre partenaire de confiance pour tous vos besoins en sécurité et dépannage.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Notre équipe d'artisans qualifiés intervient rapidement sur toute la région, 24h/24 et 7j/7, pour vous garantir un service de qualité et des tarifs transparents.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Que ce soit pour une urgence, une installation ou un conseil en sécurité, nous mettons notre expertise à votre service avec professionnalisme et réactivité.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl text-blue-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1679157900567-1a2f2296eddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsb2Nrc21pdGglMjB3b3JrfGVufDF8fHx8MTc2MTEzNjI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professionnel BT Serrurerie"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl mb-1">★★★★★</div>
              <div className="text-sm">88 avis clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
