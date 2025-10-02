import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Eye" size={32} className="text-primary" />
              <span className="text-2xl font-bold tracking-wider">БОЛЬШОЙ БРАТ</span>
            </div>
            <div className="hidden md:flex gap-8">
              {['home', 'tech', 'features', 'integration'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'tech' && 'Технология'}
                  {section === 'features' && 'Возможности'}
                  {section === 'integration' && 'Интеграция'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/fbaf5f87-4854-4e70-81f3-fe4ff638af12.jpg" 
            alt="Surveillance Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Icon name="Eye" size={120} className="text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-3xl"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              БОЛЬШОЙ БРАТ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Система тотального наблюдения нового поколения.<br />
              Всевидящий контроль городской инфраструктуры в режиме реального времени.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('tech')}
              >
                Узнать больше
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
                onClick={() => scrollToSection('integration')}
              >
                Подключиться
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="tech" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Icon name="Cpu" size={48} className="text-primary" />
              Технология
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Нейросетевой анализ на базе квантовых вычислений
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
              <img 
                src="/img/102994d4-c0c2-472a-bbb3-18da175bb4a1.jpg" 
                alt="Neural Network" 
                className="w-full h-96 object-cover rounded-lg border border-primary/30 relative z-10"
              />
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="border border-primary/30 bg-card p-6 rounded-lg hover:border-primary/60 transition-all">
                <div className="flex items-start gap-4">
                  <Icon name="Brain" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Глубинное обучение</h3>
                    <p className="text-muted-foreground">
                      Многослойные нейронные сети распознают объекты, лица, поведенческие паттерны с точностью 99.7%
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-primary/30 bg-card p-6 rounded-lg hover:border-primary/60 transition-all">
                <div className="flex items-start gap-4">
                  <Icon name="Zap" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Квантовая обработка</h3>
                    <p className="text-muted-foreground">
                      Анализ терабайтов видеопотоков в реальном времени с использованием квантовых процессоров
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-primary/30 bg-card p-6 rounded-lg hover:border-primary/60 transition-all">
                <div className="flex items-start gap-4">
                  <Icon name="Database" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Хранилище данных</h3>
                    <p className="text-muted-foreground">
                      Распределенная система хранения с автоматической индексацией и мгновенным поиском
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-primary/20 bg-card/50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Камер в сети</div>
            </div>
            <div className="border border-primary/20 bg-card/50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Непрерывный мониторинг</div>
            </div>
            <div className="border border-primary/20 bg-card/50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Время работы системы</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/img/8d3668db-1972-40d5-b52e-0497a5811693.jpg" 
            alt="City Surveillance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Icon name="Radio" size={48} className="text-secondary" />
              Возможности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр инструментов контроля и наблюдения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="ScanFace" size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Распознавание лиц</h3>
              <p className="text-muted-foreground">
                Идентификация личности по биометрическим данным в толпе за миллисекунды
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="MapPin" size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Геолокация</h3>
              <p className="text-muted-foreground">
                Отслеживание перемещений объектов наблюдения по всей городской территории
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="Activity" size={40} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Анализ поведения</h3>
              <p className="text-muted-foreground">
                Выявление аномального поведения и потенциальных угроз на основе паттернов
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="Car" size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Распознавание транспорта</h3>
              <p className="text-muted-foreground">
                Автоматическое считывание номеров и идентификация транспортных средств
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="Mic" size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Аудиомониторинг</h3>
              <p className="text-muted-foreground">
                Распознавание речи и анализ звуковой обстановки в общественных местах
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6 rounded-lg hover:bg-card/80 transition-all group">
              <Icon name="Bell" size={40} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Система оповещений</h3>
              <p className="text-muted-foreground">
                Мгновенное уведомление служб при обнаружении критических событий
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="integration" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Icon name="Network" size={48} className="text-primary" />
              Интеграция
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Подключение к единой системе наблюдения
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-primary/30 bg-card p-8 rounded-lg">
                <Icon name="Building2" size={48} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Для муниципалитетов</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Интеграция с городской инфраструктурой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Единый центр мониторинга</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Масштабируемая архитектура</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Запросить демо
                </Button>
              </div>

              <div className="border border-primary/30 bg-card p-8 rounded-lg">
                <Icon name="Shield" size={48} className="text-secondary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Для служб безопасности</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>API для оперативных служб</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Приоритетный доступ к данным</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span>Аналитические отчеты</span>
                  </li>
                </ul>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Связаться с нами
                </Button>
              </div>
            </div>

            <div className="border border-primary/30 bg-card/50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Техническая поддержка 24/7</h3>
              <p className="text-muted-foreground mb-6">
                Наша команда готова помочь с внедрением и настройкой системы в любое время
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Email
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Телефон
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Онлайн-чат
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Eye" size={24} className="text-primary" />
              <span className="font-bold">БОЛЬШОЙ БРАТ</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2025 Система тотального контроля. Всё под наблюдением.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
