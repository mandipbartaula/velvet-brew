

const Home = () => {
    const menuItems = [
        { title: "Espresso Royale", price: "$3.50", desc: "Rich, dark roast with a velvety crema.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80" },
        { title: "Velvet Latte", price: "$4.75", desc: "Silky steamed milk over intense espresso.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80" },
        { title: "Dark Roast Cold Brew", price: "$5.00", desc: "Steeped for 24 hours for maximum smoothness.", img: "https://images.unsplash.com/photo-1461023058943-48dbf1399f98?auto=format&fit=crop&q=80" },
        { title: "Artisan Tiramisu", price: "$6.50", desc: "Classic Italian dessert made in-house.", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80" },
    ];

    const interiorImages = [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content animate-fade-in">
                    <h1>Taste the <span className="text-gradient">Extraordinary</span></h1>
                    <p>Where artistry meets the perfect brew. Step into a world of refined flavors and cozy ambiance.</p>
                    <a href="#menu" className="btn btn-primary delay-100">View Menu</a>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="menu-section">
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: "center", fontSize: "2.5rem" }}>Our Signature Menu</h2>
                    <div className="menu-grid">
                        {menuItems.map((item, index) => (
                            <div key={index} className="glass menu-card animate-fade-in">
                                <img src={item.img} alt={item.title} className="menu-image" />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.price}</span>
                                </div>
                                <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interior Section */}
            <section id="interior" className="interior-section">
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>Immersive Ambiance</h2>
                    <p style={{ textAlign: "center", color: "#a0a0a0", maxWidth: "600px", margin: "0 auto 3rem" }}>
                        Designed for comfort and inspiration. Whether you're working, chatting, or dreaming, our space is yours.
                    </p>
                    <div className="gallery-grid">
                        {interiorImages.map((img, index) => (
                            <div key={index} className="gallery-item glass animate-fade-in delay-200">
                                <img src={img} alt={`Interior ${index + 1}`} className="gallery-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
