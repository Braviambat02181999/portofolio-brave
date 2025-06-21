import React, { useState } from "react";
import "./style.css";

const projects = [
  {
    title: "Analisis Data Timbangan Cargo",
    images: [
      "https://via.placeholder.com/400x250.png?text=Cargo+1",
      "https://via.placeholder.com/400x250.png?text=Cargo+2",
      "https://via.placeholder.com/400x250.png?text=Cargo+3"
    ],
    description: "Visualisasi data berat outgoing cargo menggunakan Python & Power BI."
  },
  {
    title: "Visualisasi Penjualan (Power BI)",
    images: [
      "https://via.placeholder.com/400x250.png?text=Sales+1",
      "https://via.placeholder.com/400x250.png?text=Sales+2",
      "https://via.placeholder.com/400x250.png?text=Sales+3"
    ],
    description: "Dashboard penjualan interaktif dengan filter kota dan kategori."
  },
  {
    title: "Aplikasi Booking",
    images: [
      "/public/images/login-ui.jpeg",
      "https://via.placeholder.com/400x250.png?text=Bassromba+2",
      "https://via.placeholder.com/400x250.png?text=Bassromba+3"
    ],
    description: "Aplikasi booking tempat penggilingan padi berbasis android di daerah langowan menggunakan React Native."
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <section className="hero-section">
            <div className="hero-text">
              <h1>Selamat Datang 👋</h1>
              <h2>Saya Bravi Ambat</h2>
              <p>Siap membantu Anda dalam berbagai kebutuhan IT dan Data:</p>
              <ul className="service-list">
                <li>✅ Data Analyst & Visualisasi (SQL, Python, Power BI)</li>
                <li>✅ Data Entry & Automasi</li>
                <li>✅ Frontend Mobile App (Flutter, React)</li>
                <li>✅ Backend (PHP, Firebase)</li>
                <li>✅ IT Support (Hardware, Network, Troubleshooting)</li>
              </ul>
              <p>Ayo optimalkan data dan teknologi untuk mendukung pertumbuhan bisnis Anda.</p>
              <button
                className="cta-button"
                onClick={() => setActiveSection("tentang")}
              >
                Tentang Saya
              </button>
            </div>
            <div className="hero-image">
              <img src="https://via.placeholder.com/400x400.png?text=Welcome+Image" alt="Bravi Ambat" />
            </div>
          </section>
        );
      case "keahlian":
        return (
          <section className="section">
            <h2>Keahlian</h2>
            <ul className="skills">
              <li>SQL (MySQL, PostgreSQL)</li>
              <li>Python (pandas, matplotlib)</li>
              <li>Power BI, Google Colab, Microsoft Excel</li>
              <li>React.js, Flutter, PHP</li>
              <li>Linux & Windows Administration</li>
              <li>Instalasi Kabel LAN/Optic</li>
              <li>Maintenance Hardware & Software</li>
              <li>Troubleshooting Network</li>
            </ul>
          </section>
        );
      case "proyek":
        return (
          <section className="section">
            <h2>Portfolio</h2>
            <div className="grid">
              {projects.map((proj, index) => (
                <div className="card" key={index}>
                  <div className="carousel">
                    {proj.images.map((img, i) => (
                      <img key={i} src={img} alt={`${proj.title} ${i + 1}`} className="card-img" />
                    ))}
                  </div>
                  <div className="card-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "tentang":
        return (
          <section className="section">
            <h2>Tentang Saya</h2>
            <div className="content-container">
              <p><strong>Nama:</strong> Bravi Ambat</p>
              <p><strong>Pendidikan:</strong> Sistem Informasi, Universitas Klabat (2019–2024)</p>
              <p><strong>Email:</strong> bravi@email.com</p>
              <p><strong>LinkedIn:</strong>{" "}
                <a href="https://linkedin.com/in/bravi" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/bravi
                </a>
              </p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="site-title">Bravi Ambat</h1>
        <nav className="nav-bar">
          <button className={activeSection === "dashboard" ? "active" : ""} onClick={() => setActiveSection("dashboard")}>Dashboard</button>
          <button className={activeSection === "keahlian" ? "active" : ""} onClick={() => setActiveSection("keahlian")}>Keahlian</button>
          <button className={activeSection === "proyek" ? "active" : ""} onClick={() => setActiveSection("proyek")}>Portfolio</button>
          <button className={activeSection === "tentang" ? "active" : ""} onClick={() => setActiveSection("tentang")}>Tentang Saya</button>
        </nav>
      </header>

      <main>{renderSection()}</main>

      <footer className="footer">
        <div className="footer-line"></div>
        <p>© 2025 Bravi Ambat</p>
      </footer>
    </div>
  );
}
