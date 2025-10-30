function About() {
  try {
    return (
      <section id="about" className="py-20 bg-[var(--accent-color)]" data-name="about" data-file="components/About.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About S.R. Engineering</h2>
          <p className="section-subtitle">Your trusted partner in health club equipment manufacturing</p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80" 
                   alt="Manufacturing Facility" 
                   className="rounded-lg shadow-lg"/>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[var(--secondary-color)]">Serving Maharashtra Since Years</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                S.R. Engineering is Maharashtra's trusted manufacturer of health club equipment and sports items. Our state-of-the-art facility in Chikalthana, Aurangabad, serves gyms across Mumbai, Pune, Nagpur, Nashik, Kolhapur, and all Maharashtra cities.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                We deliver durable, ergonomic, and safe equipment that meets international quality standards. With fast delivery across Maharashtra and competitive pricing, we're the preferred choice for fitness facilities throughout the state.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="icon-award text-3xl text-[var(--primary-color)] mb-3"></div>
                  <h4 className="font-bold text-xl mb-2">Quality Assured</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Premium materials and rigorous testing</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="icon-truck text-3xl text-[var(--primary-color)] mb-3"></div>
                  <h4 className="font-bold text-xl mb-2">Timely Delivery</h4>
                  <p className="text-sm text-[var(--text-secondary)]">On-time shipping across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}