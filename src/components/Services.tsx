import { Lock, KeyRound, Shield, DoorOpen, AlertCircle, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: AlertCircle,
    title: "Dépannage d'urgence",
    description: "Porte claquée, clé cassée, serrure bloquée ? Nous intervenons 24h/24 et 7j/7 en moins de 30 minutes.",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Lock,
    title: "Installation de serrures",
    description: "Installation de serrures multipoints, serrures connectées et systèmes de sécurité haute performance.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: KeyRound,
    title: "Reproduction de clés",
    description: "Duplication de tous types de clés : plates, cruciformes, avec code de sécurité, clés de coffre.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Shield,
    title: "Blindage de porte",
    description: "Renforcez la sécurité de votre habitation avec nos solutions de blindage certifiées.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: DoorOpen,
    title: "Ouverture de porte",
    description: "Ouverture sans dégâts de portes claquées, fermées à clé ou bloquées. Intervention rapide garantie.",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Wrench,
    title: "Réparation & maintenance",
    description: "Réparation de serrures endommagées, remplacement de cylindres, entretien préventif de vos équipements.",
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en serrurerie, du dépannage d'urgence à l'installation de systèmes de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
