import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Integration = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    type: 'municipal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <Icon name="Network" size={80} className="text-primary" />
                <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Интеграция
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Подключение к единой системе наблюдения
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="border-2 border-primary/30 bg-gradient-to-br from-card to-card/50 p-10 rounded-2xl hover:border-primary/60 transition-all hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative mb-6">
                  <Icon name="Building2" size={64} className="text-primary" />
                  <div className="absolute inset-0 bg-primary/20 blur-2xl"></div>
                </div>
                <h3 className="text-3xl font-bold mb-6">Для муниципалитетов</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Комплексное решение для городской безопасности и управления инфраструктурой
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Интеграция с городской инфраструктурой</div>
                      <div className="text-sm text-muted-foreground">Подключение к существующим системам безопасности</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Единый центр мониторинга</div>
                      <div className="text-sm text-muted-foreground">Централизованное управление всеми камерами города</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Масштабируемая архитектура</div>
                      <div className="text-sm text-muted-foreground">От районного уровня до федерального масштаба</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Аналитика и отчетность</div>
                      <div className="text-sm text-muted-foreground">Подробные отчеты для принятия решений</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                  Запросить демонстрацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>

              <div className="border-2 border-secondary/30 bg-gradient-to-br from-card to-card/50 p-10 rounded-2xl hover:border-secondary/60 transition-all hover:shadow-2xl hover:shadow-secondary/10">
                <div className="relative mb-6">
                  <Icon name="Shield" size={64} className="text-secondary" />
                  <div className="absolute inset-0 bg-secondary/20 blur-2xl"></div>
                </div>
                <h3 className="text-3xl font-bold mb-6">Для служб безопасности</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Специализированный доступ для оперативных и правоохранительных органов
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">API для оперативных служб</div>
                      <div className="text-sm text-muted-foreground">Прямой доступ к данным через защищенный API</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Приоритетный доступ к данным</div>
                      <div className="text-sm text-muted-foreground">Мгновенный доступ к архивам и real-time потокам</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Специализированные инструменты</div>
                      <div className="text-sm text-muted-foreground">Расширенный поиск и аналитика для расследований</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Система оповещений</div>
                      <div className="text-sm text-muted-foreground">Автоматические уведомления о критических событиях</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6">
                  Связаться с отделом продаж
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card/50 to-background border-2 border-primary/30 rounded-2xl p-12 mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center">Процесс интеграции</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Консультация</h4>
                  <p className="text-muted-foreground text-sm">
                    Анализ потребностей и подбор оптимального решения
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Планирование</h4>
                  <p className="text-muted-foreground text-sm">
                    Разработка технического задания и архитектуры системы
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Внедрение</h4>
                  <p className="text-muted-foreground text-sm">
                    Установка оборудования и настройка программного обеспечения
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-bold text-xl mb-3">Поддержка</h4>
                  <p className="text-muted-foreground text-sm">
                    Круглосуточная техническая поддержка и обновления
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">Техническая поддержка 24/7</h2>
                <p className="text-xl text-muted-foreground mb-12 text-center">
                  Наша команда готова помочь с внедрением и настройкой системы в любое время
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 h-auto py-6">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Mail" size={28} />
                      <span className="text-lg font-bold">Email</span>
                      <span className="text-sm text-muted-foreground">info@bigbrother.tech</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 h-auto py-6">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Phone" size={28} />
                      <span className="text-lg font-bold">Телефон</span>
                      <span className="text-sm text-muted-foreground">+7 (800) 555-35-35</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 h-auto py-6">
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="MessageCircle" size={28} />
                      <span className="text-lg font-bold">Онлайн-чат</span>
                      <span className="text-sm text-muted-foreground">Ответим за 2 минуты</span>
                    </div>
                  </Button>
                </div>

                <div className="border-t border-primary/20 pt-8">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                      <Icon name="Clock" size={40} className="text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-2">Среднее время отклика</div>
                      <div className="text-4xl font-bold text-primary">&lt; 5 мин</div>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                      <Icon name="Award" size={40} className="text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold mb-2">Удовлетворенность клиентов</div>
                      <div className="text-4xl font-bold text-primary">98.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integration;
