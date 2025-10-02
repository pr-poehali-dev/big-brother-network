import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/tech', label: 'Технология', icon: 'Cpu' },
    { path: '/features', label: 'Возможности', icon: 'Radio' },
    { path: '/integration', label: 'Интеграция', icon: 'Network' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Icon name="Eye" size={32} className="text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold tracking-wider">БОЛЬШОЙ БРАТ</span>
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-all ${
                  location.pathname === item.path
                    ? 'text-primary scale-105'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
