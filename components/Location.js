function Location() {
  try {
    return (
      <section id="location" className="py-20 bg-white" data-name="location" data-file="components/Location.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Visit Our Manufacturing Facility</h2>
          <p className="section-subtitle">Located in the industrial hub of Aurangabad</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[var(--accent-color)] p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-[var(--secondary-color)]">S.R. Engineering</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="icon-map-pin text-2xl text-[var(--primary-color)] mr-4 mt-1"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-[var(--text-secondary)]">
                        Manufacturing of Health Club Equipment & Sports Item<br/>
                        W-54, M.I.D.C. Chikalthana<br/>
                        Naregaon, Ch. Sambhaji Nagar (Aurangabad)<br/>
                        Maharashtra - 431006
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="icon-phone text-2xl text-[var(--primary-color)] mr-4 mt-1"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:9890301738" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                        +91 9890301738
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="icon-clock text-2xl text-[var(--primary-color)] mr-4 mt-1"></div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-[var(--text-secondary)]">
                        Sunday - Saturday: 9:00 AM - 6:00 PM<br/>
                        Friday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8937682716474!2d75.3307845!3d19.9025477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9861ad76e935%3A0x7c236d6d29d1f0f8!2sS.R.%20Engineering!5e0!3m2!1sen!2sin!4v1735543931000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="S.R. Engineering Location"
                ></iframe>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">
                Easy access from NH-52 and close to Aurangabad Airport
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Location component error:', error);
    return null;
  }
}