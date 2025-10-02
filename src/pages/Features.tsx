import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const Features = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: 'ScanFace',
      title: 'Распознавание лиц',
      description: 'Идентификация личности по биометрическим данным в толпе за миллисекунды',
      details: 'Технология 3D-сканирования лица с учетом возраста, эмоций и особых примет',
      color: 'primary'
    },
    {
      icon: 'MapPin',
      title: 'Геолокация',
      description: 'Отслеживание перемещений объектов наблюдения по всей городской территории',
      details: 'GPS-координаты с точностью до 1 метра, история перемещений за любой период',
      color: 'primary'
    },
    {
      icon: 'Activity',
      title: 'Анализ поведения',
      description: 'Выявление аномального поведения и потенциальных угроз на основе паттернов',
      details: 'ИИ-алгоритмы прогнозируют действия на основе миллионов образцов поведения',
      color: 'secondary'
    },
    {
      icon: 'Car',
      title: 'Распознавание транспорта',
      description: 'Автоматическое считывание номеров и идентификация транспортных средств',
      details: 'Определение марки, модели, цвета и регистрационных данных автомобиля',
      color: 'primary'
    },
    {
      icon: 'Mic',
      title: 'Аудиомониторинг',
      description: 'Распознавание речи и анализ звуковой обстановки в общественных местах',
      details: 'Детекция ключевых слов, идентификация говорящего, анализ тона голоса',
      color: 'primary'
    },
    {
      icon: 'Bell',
      title: 'Система оповещений',
      description: 'Мгновенное уведомление служб при обнаружении критических событий',
      details: 'Приоритизация инцидентов и автоматическая отправка данных операторам',
      color: 'secondary'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/img/8d3668db-1972-40d5-b52e-0497a5811693.jpg" 
            alt="City Surveillance" 
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <Icon name="Radio" size={80} className="text-secondary" />
                <div className="absolute inset-0 bg-secondary/30 blur-3xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-primary bg-clip-text text-transparent">
              Возможности
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр инструментов контроля и наблюдения
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="border border-primary/30 bg-gradient-to-br from-card to-card/50 p-8 rounded-xl hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <Icon 
                      name={feature.icon as any} 
                      size={56} 
                      className={`text-${feature.color} group-hover:scale-110 transition-transform`} 
                    />
                    <div className={`absolute inset-0 bg-${feature.color}/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="pt-4 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground/80 italic">
                      {feature.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-card via-card/50 to-background border-2 border-primary/30 rounded-2xl p-12 mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">Дополнительные возможности</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Search" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Умный поиск</h4>
                      <p className="text-muted-foreground">
                        Мгновенный поиск по описанию: одежда, цвет, рост, особые приметы
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Link" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Связи и графы</h4>
                      <p className="text-muted-foreground">
                        Автоматическое построение графов связей между объектами наблюдения
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="BarChart3" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Аналитика</h4>
                      <p className="text-muted-foreground">
                        Статистика, тепловые карты, временные графики активности
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="AlertTriangle" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Детекция инцидентов</h4>
                      <p className="text-muted-foreground">
                        Автоматическое обнаружение драк, краж, вандализма, ДТП
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Volume2" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Аудио-анализ</h4>
                      <p className="text-muted-foreground">
                        Распознавание выстрелов, криков, разбития стекла, сигнализаций
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="FileText" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Отчеты</h4>
                      <p className="text-muted-foreground">
                        Генерация детальных отчетов по всем событиям и действиям
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">∞</div>
                <div className="text-sm text-muted-foreground">Объектов распознавания</div>
              </div>

              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Время отклика системы</div>
              </div>

              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">100%</div>
                <div className="text-sm text-muted-foreground">Покрытие территории</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
