function Hero() {
  try {
    return (
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-[var(--accent-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[var(--secondary-color)] mb-6">
                Maharashtra's Leading Gym Equipment Manufacturer
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                S.R. Engineering manufactures premium health club equipment and sports items for gyms across Maharashtra - serving Aurangabad, Mumbai, Pune, Nagpur, Nashik, and all cities.
              </p>
              <div className="flex space-x-4">
                <button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                  View Products
                </button>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                  Get Quote
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="icon-phone text-2xl text-[var(--primary-color)] mr-2"></div>
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">Call Us</p>
                    <p className="font-semibold">9890301738</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" 
                   alt="Health Club Equipment" 
                   className="rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}