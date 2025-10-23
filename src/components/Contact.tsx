import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé ! Nous vous recontacterons rapidement.");
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Contactez-nous</h2>
          <p className="text-xl text-gray-600">
            Une urgence ? Un devis ? Nous sommes à votre écoute 24h/24
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-gray-900">Demander un devis gratuit</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Nom complet *</label>
                      <Input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom" 
                        required 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Téléphone *</label>
                      <Input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78" 
                        required 
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Votre demande *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin : dépannage d'urgence, installation, devis..." 
                      required 
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-600 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-6">Urgence 24h/24</h3>
                <a href="tel:0678068690" className="block">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full mb-4">
                    <Phone className="w-5 h-5 mr-2" />
                    06 78 06 86 90
                  </Button>
                </a>
                <p className="text-blue-100 text-center">
                  Intervention rapide en moins de 30 minutes
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900 mb-1">Horaires</div>
                    <p className="text-gray-600">Ouvert 24h/24 - 7j/7</p>
                    <p className="text-green-600">Service d'urgence disponible</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900 mb-1">Zone d'intervention</div>
                    <p className="text-gray-600">Paris et toute l'Île-de-France</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <p className="text-gray-600">contact@bt-serrurerie.fr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
