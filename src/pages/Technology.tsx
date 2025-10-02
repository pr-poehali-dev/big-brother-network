import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const Technology = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/102994d4-c0c2-472a-bbb3-18da175bb4a1.jpg" 
            alt="Neural Network" 
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <Icon name="Cpu" size={80} className="text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Технология
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Нейросетевой анализ на базе квантовых вычислений
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all"></div>
                <img 
                  src="/img/102994d4-c0c2-472a-bbb3-18da175bb4a1.jpg" 
                  alt="Neural Network" 
                  className="w-full h-[500px] object-cover rounded-xl border-2 border-primary/30 relative z-10 group-hover:border-primary/60 transition-all"
                />
              </div>

              <div className="flex flex-col justify-center gap-8">
                <div className="border-l-4 border-primary pl-6">
                  <h2 className="text-3xl font-bold mb-4">Архитектура системы</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Многоуровневая нейросетевая архитектура, объединяющая сверточные сети для распознавания изображений, 
                    рекуррентные сети для анализа последовательностей и трансформеры для контекстного понимания.
                  </p>
                </div>

                <div className="border-l-4 border-secondary pl-6">
                  <h2 className="text-3xl font-bold mb-4">Квантовое ускорение</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Использование квантовых процессоров для экспоненциального ускорения обработки больших объемов данных 
                    и решения задач оптимизации в реальном времени.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="border border-primary/30 bg-card p-8 rounded-xl hover:border-primary/60 transition-all hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="relative mb-6">
                  <Icon name="Brain" size={56} className="text-primary group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Глубинное обучение</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Многослойные нейронные сети с миллиардами параметров для точного распознавания объектов
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-3xl font-bold">99.7%</span>
                  <span className="text-sm">точность</span>
                </div>
              </div>

              <div className="border border-primary/30 bg-card p-8 rounded-xl hover:border-primary/60 transition-all hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="relative mb-6">
                  <Icon name="Zap" size={56} className="text-secondary group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Квантовая обработка</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Обработка терабайтов видеопотоков параллельно на квантовых процессорах
                </p>
                <div className="flex items-center gap-2 text-secondary">
                  <span className="text-3xl font-bold">&lt;10ms</span>
                  <span className="text-sm">задержка</span>
                </div>
              </div>

              <div className="border border-primary/30 bg-card p-8 rounded-xl hover:border-primary/60 transition-all hover:shadow-2xl hover:shadow-primary/10 group">
                <div className="relative mb-6">
                  <Icon name="Database" size={56} className="text-primary group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Хранилище данных</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Распределенная система с автоматической индексацией и мгновенным поиском
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-3xl font-bold">50PB</span>
                  <span className="text-sm">хранилище</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card/50 to-background border border-primary/30 rounded-2xl p-12 mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">Технические характеристики</h2>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Распознавание лиц</h4>
                    <p className="text-muted-foreground">Идентификация в толпе до 1000 человек одновременно</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Анализ поведения</h4>
                    <p className="text-muted-foreground">Выявление аномальных паттернов в режиме реального времени</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Распознавание объектов</h4>
                    <p className="text-muted-foreground">Классификация 10,000+ категорий объектов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Трекинг перемещений</h4>
                    <p className="text-muted-foreground">Отслеживание объектов через всю камерную сеть</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Прогнозирование</h4>
                    <p className="text-muted-foreground">ИИ-прогнозы событий на основе исторических данных</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Масштабируемость</h4>
                    <p className="text-muted-foreground">От 100 до 100,000 камер без потери производительности</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/20">
                <Icon name="Camera" size={40} className="text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Камер в сети</div>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/20">
                <Icon name="Users" size={40} className="text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Распознаваний/сутки</div>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/20">
                <Icon name="Clock" size={40} className="text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Непрерывная работа</div>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-card to-card/50 border border-primary/20">
                <Icon name="TrendingUp" size={40} className="text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;
