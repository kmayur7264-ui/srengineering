function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`} data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center mr-3">
                <div className="icon-dumbbell text-2xl text-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--secondary-color)]">S.R. Engineering</h1>
                <p className="text-xs text-[var(--text-secondary)]">Health Club Equipment</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Products</button>
              <button onClick={() => scrollToSection('about')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">About</button>
              <button onClick={() => scrollToSection('location')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Location</button>
              <button onClick={() => scrollToSection('contact')} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Contact</button>
            </nav>
            
            <a href="tel:9890301738" className="btn-primary hidden md:block">
              Call Now
            </a>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}