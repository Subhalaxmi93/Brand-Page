const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Your FEET DESERVE THE BEST</h1>
        <p>Your FEET DESERVE THE BEST</p>
        <p>
          YOUR DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.YOUR
          FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>

      <img src="/images/hero-image.png" alt="hero-image" />
    </main>
  );
};
export default HeroSection;
