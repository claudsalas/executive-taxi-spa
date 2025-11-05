import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Star, Shield, Zap } from "lucide-react";

export default function Home() {
  const whatsappLink = "https://wa.me/5511977377841?text=Olá%20Wagner,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20transfer%20executivo.";
  const emailLink = "mailto:wdstaxi@gmail.com";

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              W
            </div>
            <span className="font-bold text-lg text-foreground">Wagner Transporte</span>
          </div>
          <div className="flex gap-4">
            <a href="#servicos" className="text-sm hover:text-primary transition">
              Serviços
            </a>
            <a href="#frota" className="text-sm hover:text-primary transition">
              Frota
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Wagner Transporte Executivo
              </h1>
              <p className="text-xl text-gray-300 mb-2">Conforto e Segurança em Suas Viagens</p>
              <p className="text-gray-400 mb-8 max-w-md">
                Transfers executivos e viagens intermunicipais com pontualidade, discrição e profissionalismo. 
                Seu motorista de confiança para destinos premium em São Paulo e região.
              </p>
              <div className="flex gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="w-5 h-5 mr-2" />
                    Agende Agora
                  </Button>
                </a>
                <a href={emailLink}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Mail className="w-5 h-5 mr-2" />
                    E-mail
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/PHOTO-2025-10-27-19-01-32.jpg" 
                alt="Toyota Corolla Cross com vista do Rio de Janeiro" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/PHOTO-2025-10-27-19-01-33.jpg" 
                alt="Wagner, motorista profissional" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Seu Motorista de Confiança</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Sou Wagner, profissional experiente em transporte executivo com anos de dedicação ao serviço de qualidade. 
                Meu compromisso é oferecer a você uma experiência de viagem segura, confortável e discreta.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Segurança Garantida</h3>
                    <p className="text-gray-600 text-sm">Motorista profissional e responsável</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Profissionalismo</h3>
                    <p className="text-gray-600 text-sm">Vestimenta social e atitude executiva</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Pontualidade</h3>
                    <p className="text-gray-600 text-sm">Sempre no horário, sem exceções</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Rotas e Destinos Principais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Transfer Ubatuba", desc: "Viagens para a costa norte de São Paulo" },
              { name: "Transfer Paraty", desc: "Destino histórico e paradisíaco" },
              { name: "Transfer Angra dos Reis", desc: "Praias e ilhas paradisíacas" },
              { name: "Transfer Rio de Janeiro", desc: "Viagens para a cidade maravilhosa" },
              { name: "Transfer Porto Marítimo", desc: "Acesso aos portos da região" },
              { name: "Viagens Intermunicipais", desc: "Rotas personalizadas conforme sua necessidade" }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
                </div>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frota */}
      <section id="frota" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Nossa Frota: Toyota Corolla Cross Híbrido</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="/images/PHOTO-2025-10-27-19-01-324.jpg" 
                alt="Toyota Corolla Cross ao pôr do sol" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Conforto Premium</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Tecnologia Híbrida</h4>
                    <p className="text-gray-600">Motor híbrido para sustentabilidade e silêncio absoluto</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Espaço e Conforto</h4>
                    <p className="text-gray-600">Interior espaçoso com assentos premium e climatização</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Bagagem Ampla</h4>
                    <p className="text-gray-600">Porta-malas generoso para suas malas e pertences</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-foreground">Segurança Avançada</h4>
                    <p className="text-gray-600">Sistemas de segurança de última geração</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="/images/PHOTO-2025-10-27-19-01-323.jpg" 
              alt="Corolla Cross em vista lateral" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img 
              src="/images/PHOTO-2025-10-27-19-01-31.jpg" 
              alt="Corolla Cross com Cristo Redentor" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Solicite Seu Orçamento</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Entre em contato conosco para conhecer mais sobre nossos serviços e solicitar um orçamento personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: (11) 97737-7841
              </Button>
            </a>
            <a href={emailLink}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                wdstaxi@gmail.com
              </Button>
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <p className="text-sm text-gray-300 mb-2">Horário de Atendimento</p>
            <p className="text-white font-semibold">Segunda a Domingo</p>
            <p className="text-gray-300">Disponível 24 horas para seus transfers</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Wagner Transporte Executivo. Todos os direitos reservados.</p>
          <p className="text-sm">Conforto e Segurança em Suas Viagens</p>
        </div>
      </footer>
    </div>
  );
}
