import React, { useState } from 'react';
import logo from './assets/chusquisimas-logo.webp';

const instagramUrl = 'https://www.instagram.com/chusquisimas.co/';

function FlameMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M33 4c3 13-5 17-1 24 2 4 7 6 10 1 2-3 1-8-1-12 10 8 17 18 17 29 0 12-10 18-23 18S12 58 12 46c0-9 5-17 12-24-1 8 2 12 7 13 5 1 7-4 6-9-1-5-3-10-4-22Z" fill="currentColor"/>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        Hecho a mano en Bogotá · Color, aroma y personalidad para tus espacios
      </div>

      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Chusquisimas, inicio">
            <img src={logo} alt="Chusquisimas" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Abrir menú</span>
          </button>

          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
            <a href="#coleccion" onClick={closeMenu}>Colección</a>
            <a href="#esencia" onClick={closeMenu}>Nuestra esencia</a>
            <a href="#personaliza" onClick={closeMenu}>Personaliza</a>
            <a href="#instagram" onClick={closeMenu}>Instagram</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-decoration hero-decoration-one"><FlameMark /></div>
          <div className="hero-decoration hero-decoration-two" />
          <div className="hero-copy">
            <p className="eyebrow">ARTE + AROMA + PERSONALIDAD</p>
            <h1>
              Haz que tu espacio
              <span>se sienta como tú.</span>
            </h1>
            <p className="hero-text">
              Velas aromáticas personalizadas y wax melts artesanales para
              transformar rincones cotidianos en espacios coloridos, acogedores y muy tuyos.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#coleccion">Descubre la colección</a>
              <a className="button button-secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                Síguenos en Instagram
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="sun sun-one" />
            <div className="sun sun-two" />
            <div className="hero-card">
              <img src={logo} alt="" />
              <p>Si estás buscando una señal...</p>
              <strong>escoge un aroma.</strong>
            </div>
          </div>
        </section>

        <section className="values-strip" aria-label="Valores de Chusquisimas">
          <div><span>01</span> Hecho artesanalmente</div>
          <div><span>02</span> Diseño que alegra</div>
          <div><span>03</span> Aromas para disfrutar</div>
        </section>

        <section id="coleccion" className="section collection-section">
          <div className="section-heading">
            <p className="eyebrow">LA COLECCIÓN</p>
            <h2>Pequeños objetos,<br /><em>muchísima personalidad.</em></h2>
            <p>
              Una colección pensada para quienes creen que el bienestar también
              puede verse increíble.
            </p>
          </div>

          <div className="collection-grid">
            <article className="product-card product-card-orange">
              <div className="product-visual">
                <div className="candle-shape"><span /></div>
                <div className="product-spark spark-a" />
                <div className="product-spark spark-b" />
              </div>
              <div className="product-content">
                <p className="product-kicker">01 · VELA</p>
                <h3>Velas aromáticas personalizadas</h3>
                <p>
                  Una pieza creada para tu espacio, tu ocasión o esa persona
                  que merece un regalo diferente.
                </p>
                <span className="product-note">Fotografías reales próximamente</span>
              </div>
            </article>

            <article className="product-card product-card-yellow">
              <div className="product-visual">
                <div className="wax-melts">
                  <span /><span /><span /><span />
                </div>
                <div className="product-spark spark-c" />
                <div className="product-spark spark-d" />
              </div>
              <div className="product-content">
                <p className="product-kicker">02 · AROMA</p>
                <h3>Wax melts</h3>
                <p>
                  Formas, color y aroma para llenar tu espacio de una experiencia
                  sensorial sin necesidad de encender una vela.
                </p>
                <span className="product-note">Fotografías reales próximamente</span>
              </div>
            </article>
          </div>
        </section>

        <section id="esencia" className="section essence-section">
          <div className="essence-mark">
            <FlameMark />
            <span>CHUSQUISIMAS</span>
          </div>
          <div className="essence-copy">
            <p className="eyebrow">NUESTRA ESENCIA</p>
            <h2>El bienestar no tiene por qué ser <em>aburrido.</em></h2>
            <p>
              Chusquisimas nace para personas que disfrutan rodearse de cosas
              bonitas, diferentes y con intención. Nos inspiran el arte dopamina,
              el diseño y esa necesidad de hacer que nuestros espacios cuenten
              algo sobre quienes somos.
            </p>
            <p>
              Creamos piezas artesanales que mezclan lo visual con lo sensorial:
              objetos que decoran, aromas que acompañan y detalles que convierten
              un espacio cotidiano en un lugar con más vida.
            </p>
            <div className="essence-pills">
              <span>Color</span>
              <span>Arte</span>
              <span>Bienestar</span>
              <span>Artesanal</span>
            </div>
          </div>
        </section>

        <section id="personaliza" className="section personalize-section">
          <div className="personalize-heading">
            <p className="eyebrow">HAZLO TUYO</p>
            <h2>Una vela puede contar <em>tu historia.</em></h2>
            <p>
              En esta primera etapa estamos preparando nuestra colección.
              Muy pronto podrás conocer los diseños disponibles y descubrir
              cómo crear una pieza pensada para ti.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Elige</h3>
              <p>Descubre diseños y aromas que conecten contigo.</p>
            </div>
            <div className="step">
              <span>02</span>
              <h3>Personaliza</h3>
              <p>Haz que el detalle tenga tu estilo y tu intención.</p>
            </div>
            <div className="step">
              <span>03</span>
              <h3>Disfruta</h3>
              <p>Enciende, derrite, respira y disfruta tu espacio.</p>
            </div>
          </div>
        </section>

        <section id="instagram" className="instagram-section">
          <div className="instagram-inner">
            <div className="instagram-flame"><FlameMark /></div>
            <p className="eyebrow">SIGAMOS LA SEÑAL</p>
            <h2>El color también se puede <em>oler.</em></h2>
            <p>
              Mira detrás de escena, conoce nuevos diseños y acompáñanos mientras
              construimos la colección.
            </p>
            <a className="instagram-link" href={instagramUrl} target="_blank" rel="noreferrer">
              @chusquisimas.co <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logo} alt="Chusquisimas" />
          <p>Velas y aromas artesanales para espacios con personalidad.</p>
        </div>
        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#coleccion">Colección</a>
          <a href="#esencia">Nuestra esencia</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Chusquisimas</span>
          <span>chusquisimas.com · Bogotá, Colombia</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
