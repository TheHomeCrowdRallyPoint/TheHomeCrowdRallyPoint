import React, { useMemo, useState } from "react";

const colors = {
  navy: "#0C2340",
  blue: "#4B92DB",
  red: "#C8102E",
  silver: "#A5ACAF",
  white: "#FFFFFF",
  black: "#000000",
};

const articles = [
  {
    id: 1,
    title: "Titans 5 Best Primetime Opponents",
    dek: "The five future Titans matchups that give the NFL the best storylines for national television.",
    category: "Titans",
    author: "Jeremy Neasley",
    date: "May 12, 2026",
    readTime: "5 min read",
    imageLabel: "RALLY POINT",
    body: [
      "The Titans do not need primetime games built only around nostalgia or big-market opponents. They need games with stories people can follow.",
      "Houston brings the rivalry and the Oilers-color controversy. New York brings Brian Daboll, Wan'Dale Robinson, and the Cam Ward-Jaxson Dart quarterback comparison. Las Vegas brings two rebuilds and Fernando Mendoza. Washington brings Jayden Daniels as the progress test. Dallas brings the biggest national stage possible.",
      "That is exactly the kind of five-game primetime slate Tennessee needs.",
    ],
  },
  {
    id: 2,
    title: "Why Tennessee’s Rebuild Needs National Attention",
    dek: "A young quarterback, new weapons, a new look, and a franchise trying to reintroduce itself.",
    category: "NFL",
    author: "Jeremy Neasley",
    date: "May 10, 2026",
    readTime: "4 min read",
    imageLabel: "THE HOME CROWD",
    body: [
      "Rebuilds are usually discussed like waiting rooms. Fans are told to be patient, trust the process, and look toward the future.",
      "But the best rebuilds give people a reason to watch before the final product is ready. Tennessee has that opportunity now.",
      "The story is not just whether the Titans are back. It is whether the rest of the league can see the direction forming.",
    ],
  },
  {
    id: 3,
    title: "The New Titans Identity Has to Be More Than Uniforms",
    dek: "A new look matters, but the real question is whether the team can match the energy on the field.",
    category: "Opinion",
    author: "Jeremy Neasley",
    date: "May 8, 2026",
    readTime: "6 min read",
    imageLabel: "OPINION",
    body: [
      "Uniforms can create energy. They can reconnect a fanbase. They can make a franchise feel fresh again.",
      "But the look only matters if the football starts to match it. The Titans have a chance to build something with visual identity and competitive identity at the same time.",
      "That is what fans are really looking for: not just a better jersey, but a better direction.",
    ],
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background: colors.white,
    color: colors.black,
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    background: colors.white,
    borderBottom: `5px solid ${colors.red}`,
    padding: "18px 24px",
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },
  headerInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  brandMark: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: colors.blue,
    border: `4px solid ${colors.red}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "20px",
    color: colors.black,
    boxShadow: `inset 0 0 0 3px ${colors.white}`,
  },
  siteTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 900,
    color: colors.black,
  },
  siteSub: {
    margin: 0,
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "3px",
    color: colors.black,
  },
  nav: {
    display: "flex",
    gap: "22px",
    fontWeight: 900,
  },
  navLink: {
    color: colors.black,
    textDecoration: "none",
  },
  main: {
    padding: "36px 24px",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.3fr 0.7fr",
    gap: "24px",
  },
  hero: {
    border: `5px solid ${colors.navy}`,
    borderRadius: "24px",
    padding: "36px",
    background: `linear-gradient(135deg, ${colors.white} 0%, #f3f9ff 55%, #e7f2ff 100%)`,
    color: colors.black,
    boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
  },
  badge: {
    display: "inline-block",
    border: `3px solid ${colors.blue}`,
    borderRadius: "999px",
    padding: "8px 14px",
    fontWeight: 900,
    marginBottom: "18px",
    color: colors.black,
    background: colors.white,
  },
  h1: {
    margin: 0,
    fontSize: "52px",
    lineHeight: 1,
    fontWeight: 900,
    color: colors.black,
  },
  dek: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: colors.black,
  },
  meta: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    fontWeight: 900,
    color: colors.black,
    marginTop: "20px",
  },
  button: {
    marginTop: "26px",
    background: colors.blue,
    color: colors.black,
    border: `3px solid ${colors.red}`,
    borderRadius: "16px",
    padding: "14px 20px",
    fontWeight: 900,
    cursor: "pointer",
    fontSize: "16px",
  },
  sideCard: {
    border: `5px solid ${colors.silver}`,
    borderRadius: "24px",
    padding: "28px",
    background: colors.white,
    color: colors.black,
  },
  sectionHeader: {
    marginTop: "56px",
    marginBottom: "20px",
  },
  h2: {
    margin: 0,
    fontSize: "36px",
    fontWeight: 900,
    color: colors.black,
  },
  searchRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  input: {
    border: `4px solid ${colors.blue}`,
    borderRadius: "16px",
    padding: "14px",
    fontWeight: 800,
    color: colors.black,
    minWidth: "260px",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    margin: "20px 0 28px",
  },
  filterButton: {
    background: colors.white,
    color: colors.black,
    border: `3px solid ${colors.blue}`,
    borderRadius: "999px",
    padding: "10px 16px",
    fontWeight: 900,
    cursor: "pointer",
  },
  activeFilter: {
    background: colors.blue,
    border: `3px solid ${colors.red}`,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    border: `5px solid ${colors.silver}`,
    borderRadius: "24px",
    overflow: "hidden",
    background: colors.white,
    color: colors.black,
  },
  cardTop: {
    height: "145px",
    background: colors.blue,
    borderBottom: `5px solid ${colors.red}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    fontSize: "28px",
    fontWeight: 900,
    color: colors.black,
  },
  cardBody: {
    padding: "24px",
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    zIndex: 99,
    padding: "20px",
    overflowY: "auto",
  },
  modal: {
    maxWidth: "820px",
    margin: "20px auto",
    background: colors.white,
    border: `5px solid ${colors.blue}`,
    borderRadius: "24px",
    padding: "34px",
    color: colors.black,
  },
  close: {
    float: "right",
    border: `3px solid ${colors.red}`,
    background: colors.white,
    borderRadius: "999px",
    width: "40px",
    height: "40px",
    fontWeight: 900,
    cursor: "pointer",
    color: colors.black,
  },
  footer: {
    borderTop: `5px solid ${colors.blue}`,
    padding: "28px",
    textAlign: "center",
    fontWeight: 900,
    color: colors.black,
  },
};

function Brand() {
  return (
    <div style={styles.brand}>
      <div style={styles.brandMark}>HC</div>
      <div>
        <p style={styles.siteTitle}>The Home Crowd</p>
        <p style={styles.siteSub}>RALLY POINT</p>
      </div>
    </div>
  );
}

function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div style={styles.modalOverlay}>
      <article style={styles.modal}>
        <button style={styles.close} onClick={onClose}>
          X
        </button>
        <p style={{ fontWeight: 900 }}>{article.category}</p>
        <h1 style={{ ...styles.h1, fontSize: "42px" }}>{article.title}</h1>
        <p style={styles.dek}>{article.dek}</p>
        <p style={{ fontWeight: 900 }}>
          By {article.author} · {article.date} · {article.readTime}
        </p>
        <div style={{ fontSize: "19px", lineHeight: 1.8 }}>
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["All", ...new Set(articles.map((article) => article.category))];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesSearch = `${article.title} ${article.dek} ${article.category}`
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const featured = articles[0];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.headerInner }}>
          <Brand />
          <nav style={styles.nav}>
            <a style={styles.navLink} href="#latest">Latest</a>
            <a style={styles.navLink} href="#about">About</a>
            <a style={styles.navLink} href="mailto:youremail@example.com">Contact</a>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.container}>
          <section style={styles.heroGrid}>
            <div style={styles.hero}>
              <span style={styles.badge}>Featured Article</span>
              <h1 style={styles.h1}>{featured.title}</h1>
              <p style={styles.dek}>{featured.dek}</p>
              <div style={styles.meta}>
                <span>{featured.category}</span>
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <button style={styles.button} onClick={() => setActiveArticle(featured)}>
                Read Article
              </button>
            </div>

            <aside style={styles.sideCard} id="about">
              <h2 style={{ ...styles.h2, fontSize: "30px" }}>
                The Home Crowd Rally Point
              </h2>
              <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
                A fan-first sports media home for Titans coverage, NFL storylines,
                roster-building thoughts, and conversational analysis.
              </p>
              <p style={{ fontWeight: 900 }}>Primary Focus</p>
              <p>Tennessee Titans + NFL</p>
              <p style={{ fontWeight: 900 }}>Voice</p>
              <p>Sports media, conversational, opinionated</p>
            </aside>
          </section>

          <section id="latest" style={styles.sectionHeader}>
            <div style={styles.searchRow}>
              <div>
                <p style={{ fontWeight: 900 }}>LATEST ARTICLES</p>
                <h2 style={styles.h2}>Read the latest from The Home Crowd Rally Point</h2>
              </div>
              <input
                style={styles.input}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles..."
              />
            </div>

            <div style={styles.filters}>
              {categories.map((item) => (
                <button
                  key={item}
                  style={{
                    ...styles.filterButton,
                    ...(category === item ? styles.activeFilter : {}),
                  }}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div style={styles.cardGrid}>
              {filteredArticles.map((article) => (
                <article key={article.id} style={styles.card}>
                  <div style={styles.cardTop}>{article.imageLabel}</div>
                  <div style={styles.cardBody}>
                    <p style={{ fontWeight: 900 }}>{article.category} · {article.readTime}</p>
                    <h3 style={{ fontSize: "26px", fontWeight: 900, color: colors.black }}>
                      {article.title}
                    </h3>
                    <p style={{ lineHeight: 1.7 }}>{article.dek}</p>
                    <button style={styles.button} onClick={() => setActiveArticle(article)}>
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer style={styles.footer}>
        © 2026 The Home Crowd Rally Point. All rights reserved.
      </footer>

      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </div>
  );
}
