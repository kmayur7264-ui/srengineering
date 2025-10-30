function Footer() {
  try {
    return (
      <footer className="bg-[var(--secondary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">S.R. Engineering</h3>
              <p className="text-gray-300 mb-4">
                Professional manufacturer of health club equipment and sports items serving fitness facilities across Maharashtra - Aurangabad, Mumbai, Pune, Nagpur, Nashik, and all cities.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white">Home</button></li>
                <li><button onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white">Products</button></li>
                <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white">About Us</button></li>
                <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="icon-map-pin text-xl mr-3 mt-1"></div>
                  <p className="text-gray-300 text-sm">W-54, M.I.D.C. Chikalthana, Naregaon, Aurangabad - 431006</p>
                </div>
                <div className="flex items-center">
                  <div className="icon-phone text-xl mr-3"></div>
                  <a href="tel:9890301738" className="text-gray-300 hover:text-white">+91 9890301738</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2025 S.R. Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}