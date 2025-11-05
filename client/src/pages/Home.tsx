import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Home() {
  const { t } = useLanguage();
  const whatsappLink = "https://wa.me/5511977377841?text=Olá%20Wagner,%20gostaria%20de%20solicitar%20um%20transfer%20executivo.";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { name: t('services.service1'), desc: t('services.service1Desc') },
    { name: t('services.service2'), desc: t('services.service2Desc') },
    { name: t('services.service3'), desc: t('services.service3Desc') },
    { name: t('services.service4'), desc: t('services.service4Desc') },
    { name: t('services.service5'), desc: t('services.service5Desc') },
    { name: t('services.service6'), desc: t('services.service6Desc') },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-to-t from-primary via-primary to-primary/90 p-4 shadow-2xl">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
          <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14">
            <Phone className="w-6 h-6 mr-2" />
            {t('hero.cta1')}
          </Button>
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-lg">
              W
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm text-foreground">Wagner</p>
              <p className="text-xs text-primary font-semibold">{t('hero.badge')}</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition">
              {t('nav.destinations')}
            </a>
            <a href="#veiculo" className="text-sm font-medium hover:text-primary transition">
              {t('nav.vehicle')}
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition">
              {t('nav.contact')}
            </a>
            <div className="border-l border-gray-200 pl-6">
              <LanguageSelector />
            </div>
          </div>
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen md:h-[90vh] flex items-center justify-center pt-16 md:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_car_blurred.png" 
            alt="Wagner Transporte Executivo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-0">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
              {t('hero.title')} <span className="text-primary">{t('hero.titleHighlight1')}</span> e <span className="text-primary">{t('hero.titleHighlight2')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8">
                  <Phone className="w-6 h-6 mr-2" />
                  {t('hero.cta1')}
                </Button>
              </a>
              <a href="#servicos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  {t('hero.cta2')}
                  <ChevronDown className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div>
                <p className="text-primary font-bold text-2xl">24h</p>
                <p className="text-gray-300 text-sm">{t('hero.stat1Label')}</p>
              </div>
              <div>
                <p className="text-primary font-bold text-2xl">100%</p>
                <p className="text-gray-300 text-sm">{t('hero.stat2Label')}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-primary font-bold text-2xl">5⭐</p>
                <p className="text-gray-300 text-sm">{t('hero.stat3Label')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim - Motorista */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/PHOTO-2025-10-27-19-01-33.jpg" 
                alt="Wagner, motorista profissional" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('about.feature1Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.feature1Desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('about.feature2Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.feature2Desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t('about.feature3Title')}</h3>
                    <p className="text-gray-600 text-sm">{t('about.feature3Desc')}</p>
                  </div>
                </div>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  {t('about.cta')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços - Destinos */}
      <section id="servicos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{service.name}</h3>
                </div>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{t('services.customQuestion')}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Phone className="w-4 h-4 mr-2" />
                {t('services.customCta')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Veículo */}
      <section id="veiculo" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
              {t('vehicle.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('vehicle.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div>
              <img 
                src="/images/car_sunset_blurred.png" 
                alt="Toyota Corolla Cross ao pôr do sol" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-foreground">
                {t('vehicle.sectionTitle')}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t('vehicle.feature1Title')}</h4>
                    <p className="text-gray-600">{t('vehicle.feature1Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t('vehicle.feature2Title')}</h4>
                    <p className="text-gray-600">{t('vehicle.feature2Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t('vehicle.feature3Title')}</h4>
                    <p className="text-gray-600">{t('vehicle.feature3Desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{t('vehicle.feature4Title')}</h4>
                    <p className="text-gray-600">{t('vehicle.feature4Desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="/images/car_rio_blurred.png" 
              alt="Corolla Cross em vista lateral" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <img 
              src="/images/car_side_blurred.png" 
              alt="Corolla Cross com Cristo Redentor" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-8">
                  <Phone className="w-6 h-6 mr-2" />
                  {t('cta.whatsapp')}
                </Button>
              </a>
              <a href="mailto:wdstaxi@gmail.com">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  {t('cta.email')}
                </Button>
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto">
              <p className="text-sm text-white/80 mb-2">{t('cta.hoursTitle')}</p>
              <p className="text-white font-bold text-lg">{t('cta.hoursDays')}</p>
              <p className="text-white/80">{t('cta.hoursAvailability')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/95 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">{t('footer.copyright')}</p>
          <p className="text-sm">{t('footer.tagline')}</p>
        </div>
      </footer>

      {/* Mobile bottom spacing for sticky CTA */}
      <div className="h-20 md:h-0"></div>
    </div>
  );
}
