function Products() {
  try {
    const products = [
      {
        name: 'Strength Training Systems',
        description: 'Commercial-grade multi-station strength training equipment designed for intensive use in health clubs',
        icon: 'dumbbell',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Cardio Equipment',
        description: 'Advanced treadmills, ellipticals, and exercise bikes with digital tracking systems',
        icon: 'activity',
        image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Free Weight Systems',
        description: 'Premium barbells, dumbbells, weight plates and racks for professional training',
        icon: 'weight',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Sports Equipment',
        description: 'Complete range of sports items including indoor and outdoor training equipment',
        icon: 'trophy',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Functional Training Gear',
        description: 'Battle ropes, medicine balls, kettlebells and functional training accessories',
        icon: 'crosshair',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Custom Solutions',
        description: 'Tailored equipment solutions designed to meet specific gym layout and requirements',
        icon: 'settings',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80'
      }
    ];

    return (
      <section id="products" className="py-20 bg-white" data-name="products" data-file="components/Products.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Product Range</h2>
          <p className="section-subtitle">High-quality health club equipment and sports items manufactured with precision</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)] flex items-center justify-center mr-3">
                      <div className={`icon-${product.icon} text-xl text-[var(--primary-color)]`}></div>
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                  <p className="text-[var(--text-secondary)]">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}