import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 bg-card/30 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Eye" size={24} className="text-primary" />
              <span className="font-bold text-lg">БОЛЬШОЙ БРАТ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Система тотального наблюдения нового поколения
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Навигация</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/tech" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Технология
              </Link>
              <Link to="/features" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Возможности
              </Link>
              <Link to="/integration" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Интеграция
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@bigbrother.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-primary">Социальные сети</h4>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-all">
                <Icon name="Twitter" size={18} className="text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-all">
                <Icon name="Github" size={18} className="text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-all">
                <Icon name="Linkedin" size={18} className="text-primary" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          © 2025 Большой Брат. Всё под наблюдением.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
