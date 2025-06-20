import React, { useState } from "react";
import "./style.css";

const projects = [
  {
    title: "Analisis Data Timbangan Cargo",
    image: "https://via.placeholder.com/400x250.png?text=Cargo+Analysis",
    description:
      "Visualisasi data berat outgoing cargo menggunakan Python & Power BI.",
  },
  {
    title: "Visualisasi Penjualan (Power BI)",
    image: "https://via.placeholder.com/400x250.png?text=Sales+Dashboard",
    description:
      "Dashboard penjualan interaktif dengan filter kota dan kategori.",
  },
  {
    title: "Aplikasi Booking 'Bassromba'",
    image: "https://via.placeholder.com/400x250.png?text=Bassromba+App",
    description:
      "Aplikasi booking tempat berbasis Flutter dengan fitur pemilihan jam.",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "tentang":
        return (
          <section className="section">
            <h2>Tentang Saya</h2>
            <p>
              Saya lulusan Sistem Informasi dari Universitas Klabat (2019–2024),
              berfokus pada Data Analyst, pengolahan data SQL & Python, serta
              visualisasi menggunakan Power BI.
            </p>
            <h3>Keahlian</h3>
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
            <h2>Proyek</h2>
            <div className="grid">
              {projects.map((proj, index) => (
                <div className="card" key={index}>
                  <img src={proj.image} alt={proj.title} className="card-img" />
                  <div className="card-content">
                    <h3>{proj.title}</h3>
                    <p>{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case "kontak":
        return (
          <section className="section">
            <h2>Kontak</h2>
            <div className="kontak-info">
              <p>
                <strong>Email:</strong> bravi@email.com
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="#">linkedin.com/in/bravi</a>
              </p>
            </div>
          </section>
        );
      default:
        return (
          <section className="hero-section">
            <div className="hero-text">
              <h2>Expert Analyst for Business Intelligence</h2>
              <p>
                Optimalkan data perusahaan Anda untuk keputusan yang lebih baik.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="https://via.placeholder.com/400x400.png?text=Profile+Image"
                alt="Bravi Ambat"
              />
            </div>
          </section>
        );
    }
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="site-title">Bravi Ambat</h1>
        <nav className="nav-bar">
          <button
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            Welcome
          </button>
          <button
            className={activeSection === "tentang" ? "active" : ""}
            onClick={() => setActiveSection("tentang")}
          >
            About
          </button>
          <button
            className={activeSection === "proyek" ? "active" : ""}
            onClick={() => setActiveSection("proyek")}
          >
            Portfolio
          </button>
          <button
            className={activeSection === "kontak" ? "active" : ""}
            onClick={() => setActiveSection("kontak")}
          >
            Contact
          </button>
        </nav>
      </header>

      <main>{renderSection()}</main>

      <footer className="footer">
        <p>© 2025 Bravi Ambat</p>
      </footer>
    </div>
  );
}
