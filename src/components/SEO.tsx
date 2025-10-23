import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ 
  title = "BT Serrurerie - Serrurier 24h/24 - Intervention Rapide Paris",
  description = "BT Serrurerie : Serrurier professionnel disponible 24h/24 et 7j/7. Dépannage urgent, installation de serrures, blindage de porte. Intervention en moins de 30 minutes. Note 5★ sur 88 avis. Appelez le 06 78 06 86 90",
  keywords = "serrurier, serrurerie, dépannage serrure, ouverture porte, serrurier 24h, serrurier urgence, installation serrure, blindage porte, reproduction clés, serrurier Paris, BT Serrurerie"
}: SEOProps) {
  
  useEffect(() => {
    // Mise à jour du titre
    document.title = title;
    
    // Mise à jour ou création des balises meta
    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Meta tags standards
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);
    updateOrCreateMeta('author', 'BT Serrurerie');
    updateOrCreateMeta('robots', 'index, follow');
    
    // Open Graph pour réseaux sociaux
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:type', 'website', true);
    updateOrCreateMeta('og:locale', 'fr_FR', true);
    
    // Twitter Card
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    
    // Données structurées JSON-LD pour Google
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Locksmith",
      "name": "BT Serrurerie",
      "image": "https://images.unsplash.com/photo-1737046315119-0119468805ab",
      "telephone": "+33678068690",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.8566",
        "longitude": "2.3522"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "88",
        "bestRating": "5",
        "worstRating": "1"
      },
      "url": window.location.origin,
      "sameAs": [
        "https://www.facebook.com/btserrurerie",
        "https://www.instagram.com/btserrurerie"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Paris"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de Serrurerie",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dépannage d'urgence 24h/24",
              "description": "Intervention rapide en moins de 30 minutes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Installation de serrures",
              "description": "Installation de serrures multipoints et systèmes de sécurité"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Blindage de porte",
              "description": "Renforcement de la sécurité de votre habitation"
            }
          }
        ]
      }
    });
    
    document.head.appendChild(script);
    
  }, [title, description, keywords]);
  
  return null;
}
