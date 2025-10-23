import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    location: "Paris 15ème",
    rating: 5,
    comment: "Intervention ultra rapide suite à une porte claquée. Le serrurier est arrivé en 20 minutes et a ouvert la porte sans dégâts. Service impeccable et prix honnête !",
    date: "Il y a 2 semaines"
  },
  {
    name: "Jean Martin",
    location: "Boulogne-Billancourt",
    rating: 5,
    comment: "Excellent professionnel ! Installation d'une serrure multipoints réalisée avec soin. Travail propre, conseils avisés et respect des délais. Je recommande vivement.",
    date: "Il y a 1 mois"
  },
  {
    name: "Sophie Leroux",
    location: "Issy-les-Moulineaux",
    rating: 5,
    comment: "Très satisfaite du blindage de ma porte d'entrée. Travail soigné et équipe professionnelle. Le devis était clair et sans surprise. Merci BT Serrurerie !",
    date: "Il y a 3 semaines"
  },
  {
    name: "Thomas Bernard",
    location: "Paris 12ème",
    rating: 5,
    comment: "Dépannage d'urgence à 2h du matin. Malgré l'heure tardive, le serrurier est arrivé rapidement et a résolu le problème. Vraiment un service 24/7 comme annoncé !",
    date: "Il y a 1 semaine"
  },
  {
    name: "Isabelle Petit",
    location: "Vanves",
    rating: 5,
    comment: "Changement de serrure après une tentative d'effraction. Intervention le jour même, installation rapide d'une serrure haute sécurité. Je me sens enfin en sécurité.",
    date: "Il y a 2 mois"
  },
  {
    name: "Pierre Rousseau",
    location: "Montrouge",
    rating: 5,
    comment: "Serrurier compétent et de confiance. A pris le temps de m'expliquer les différentes options pour sécuriser mon domicile. Rapport qualité-prix excellent.",
    date: "Il y a 3 semaines"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Ce Que Disent Nos Clients</h2>
          <p className="text-xl text-gray-600">
            88 avis clients - Note moyenne 5.0/5
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-gray-400">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
