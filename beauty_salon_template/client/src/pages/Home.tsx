import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Heart, ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, delay]);

  return (
    <div
      ref={setRef}
      className={`transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-accent">
            <span className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Beauty Salon
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            {["Služby", "Tím", "Galéria", "Recenzie", "Kontakt"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Vaša krása je naša <span className="text-accent">vášeň</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Objavte luxusný svet krásy a wellness. Naši skúsení terapeuti vám poskytnú najlepšie služby s osobným prístupom.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Objednať si <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Viac informácií
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-accent to-accent/50 rounded-3xl animate-float shadow-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="služby" className="py-20 px-4 bg-secondary/30">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Naše Služby
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ponúkame komplexný sortiment služieb pre vašu dokonalú transformáciu
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starostlivosť o tvár",
                description: "Profesionálne ošetrenia s prírodnou kozmetikou",
                icon: "✨",
              },
              {
                title: "Vlasové služby",
                description: "Strihanie, farbenie a regenerácia vlasov",
                icon: "💇",
              },
              {
                title: "Masáž & Wellness",
                description: "Relaxačné masáže a wellness procedúry",
                icon: "🧘",
              },
              {
                title: "Manikúra & Pedikúra",
                description: "Profesionálne starostlivosti o nechty",
                icon: "💅",
              },
              {
                title: "Permanentný make-up",
                description: "Mikroblading a permanentný make-up",
                icon: "👁️",
              },
              {
                title: "Depilacia",
                description: "Bezbolestná depilacia s najnovšou technológiou",
                icon: "✂️",
              },
            ].map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-accent/50">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tím" className="py-20 px-4">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Náš Tím Odborníkov
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Skúsení profesionáli s vášňou pre krásu a wellness
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Mária Kováčová", role: "Majiteľka & Vizážistka", rating: 5 },
              { name: "Anna Nováková", role: "Kaderníčka", rating: 5 },
              { name: "Petra Varga", role: "Terapeut masáže", rating: 4.9 },
              { name: "Zuzana Horváthová", role: "Kozmetička", rating: 5 },
            ].map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center group">
                  <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl mb-4 group-hover:from-accent/30 group-hover:to-accent/10 transition-all" />
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(member.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galéria" className="py-20 px-4 bg-secondary/30">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Naša Galéria
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pozrite si naše najnovšie projekty a transformácie
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="relative group overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-accent/30 to-accent/10 cursor-pointer">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="recenzie" className="py-20 px-4">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Čo hovoria naši klienti
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vaše spokojnosti je naša najväčšia vďaka
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Absolútna profesionalita a príjemná atmosféra. Vrátim sa určite!",
                author: "Katarína M.",
              },
              {
                text: "Najlepší salón v meste. Personál je veľmi milý a starostlivý.",
                author: "Miriam K.",
              },
              {
                text: "Výborné služby za rozumné ceny. Odporúčam všetkým!",
                author: "Zuzana P.",
              },
            ].map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Card className="p-8 border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-accent">{testimonial.author}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 bg-foreground text-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Kontaktujte Nás
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Budeme sa tešiť na vašu návštevu
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Telefón",
                value: "+421 2 1234 5678",
              },
              {
                icon: MapPin,
                title: "Adresa",
                value: "Hlavná 123, Bratislava",
              },
              {
                icon: Clock,
                title: "Otváracie hodiny",
                value: "Po-Pia: 9:00-19:00",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                    <h3 className="font-bold mb-2">{contact.title}</h3>
                    <p className="opacity-90">{contact.value}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="bg-background/10 rounded-2xl p-8 backdrop-blur-sm">
              <form className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Vaše meno"
                  className="bg-background/20 border border-background/30 rounded-lg px-4 py-3 text-background placeholder-background/60 focus:outline-none focus:border-accent"
                />
                <input
                  type="email"
                  placeholder="Váš email"
                  className="bg-background/20 border border-background/30 rounded-lg px-4 py-3 text-background placeholder-background/60 focus:outline-none focus:border-accent"
                />
                <textarea
                  placeholder="Vaša správa"
                  rows={4}
                  className="md:col-span-2 bg-background/20 border border-background/30 rounded-lg px-4 py-3 text-background placeholder-background/60 focus:outline-none focus:border-accent"
                />
                <Button className="md:col-span-2 bg-accent hover:bg-accent/90 text-white py-3">
                  Poslať správu
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4 text-center opacity-75">
        <div className="container">
          <p>© 2024 Beauty Salon. Všetky práva vyhradené.</p>
        </div>
      </footer>
    </div>
  );
}
