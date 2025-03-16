import React from 'react';
import './ProductCatalog.scss';

const ProductCatalog = () => {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      items: "1000+ items"
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      items: "2500+ items"
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      items: "1500+ items"
    },
    {
      name: "Sports & Outdoor",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      items: "800+ items"
    }
  ];

  return (
    <section className="product-catalog">
      <div className="product-catalog-container">
        <h2 className="product-catalog-title">Explore Our Diverse Product Catalog</h2>
        <div className="product-catalog-grid">
          {categories.map((category, index) => (
            <div key={index} className="product-category">
              <div className="product-category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="product-category-image"
                />
                <div className="product-category-overlay">
                  <div className="product-category-content">
                    <h3 className="product-category-name">{category.name}</h3>
                    <p className="product-category-items">{category.items}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;