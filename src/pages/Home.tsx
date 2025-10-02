import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/fbaf5f87-4854-4e70-81f3-fe4ff638af12.jpg" 
            alt="Surveillance Center" 
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <Icon name="Eye" size={140} className="text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse"></div>
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              БОЛЬШОЙ БРАТ
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 leading-relaxed">
              Система тотального наблюдения нового поколения
            </p>

            <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
              Всевидящий контроль городской инфраструктуры в режиме реального времени.<br />
              Искусственный интеллект, который никогда не спит.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link to="/tech">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={22} className="ml-2" />
                </Button>
              </Link>
              <Link to="/integration">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-7 border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Подключиться
                </Button>
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-lg bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Камер</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Мониторинг</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/30 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={36} className="text-primary" />
        </div>
      </section>

      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-muted-foreground">
                Передовые технологии на страже безопасности
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link to="/tech" className="group">
                <div className="border border-primary/30 bg-card p-8 rounded-lg hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10 h-full">
                  <div className="mb-6 relative">
                    <Icon name="Brain" size={56} className="text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ИИ-анализ</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Глубокое обучение и нейросети для точного распознавания объектов и прогнозирования событий
                  </p>
                </div>
              </Link>

              <Link to="/features" className="group">
                <div className="border border-primary/30 bg-card p-8 rounded-lg hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10 h-full">
                  <div className="mb-6 relative">
                    <Icon name="Zap" size={56} className="text-secondary group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Обработка данных в режиме реального времени без задержек и потери качества
                  </p>
                </div>
              </Link>

              <Link to="/integration" className="group">
                <div className="border border-primary/30 bg-card p-8 rounded-lg hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10 h-full">
                  <div className="mb-6 relative">
                    <Icon name="Shield" size={56} className="text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Защищенное хранение данных с многоуровневым шифрованием и контролем доступа
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Присоединяйтесь к сети тотального наблюдения
            </p>
            <Link to="/integration">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Подключить систему
                <Icon name="ArrowRight" size={24} className="ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
