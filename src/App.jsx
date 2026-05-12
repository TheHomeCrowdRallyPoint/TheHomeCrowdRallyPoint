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
    dek: "The Titans’ 2026 schedule has several games that could make sense for national television, but the best primetime matchups are not just about brand names. They are about storylines.",
    category: "Titans",
    author: "Jeremy Neasley",
    date: "May 12, 2026",
    readTime: "8 min read",
    imageLabel: "RALLY POINT",
    body: [
      "Tennessee’s future opponent list includes the Texans, Giants, Raiders, Commanders, and Cowboys, and each of those games gives the NFL something different to sell: rivalry drama, quarterback comparisons, rebuild progress, coaching revenge, and a true national-stage opportunity.",
      "For a Titans team trying to reintroduce itself under a new identity, these are the five best primetime opponents.",

      "1. Home or Away Game vs Houston Texans",
      "This is the best primetime matchup because it has everything: division stakes, history, bad blood, and now uniform drama.",
      "Titans-Texans was already the AFC South game with the most natural juice. Houston is one of the teams Tennessee has to measure itself against if the Titans want to become a serious threat in the division again. But the rivalry has another layer now because of the Titans’ renewed use of Oilers-inspired colors and uniforms.",
      "The Titans’ new look leans heavily into the Oilers legacy, and that has reopened old wounds in Houston, where many fans still view the Oilers identity as part of their city’s football history. The Titans kept the franchise rights after the Oilers moved to Tennessee, and the use of that blue has remained a source of tension between the Titans and Texans fanbases.",
      "That makes this more than just a football game. It is Tennessee wearing a look Houston fans feel belongs to them, against the team that now represents Houston.",
      "That is primetime material.",
      "Why: AFC South rivalry, Oilers/Texans uniform drama, and a true measuring-stick game for the Titans’ rebuild.",

      "2. Away Game vs New York Giants",
      "Titans at Giants has one of the best storylines on the entire schedule.",
      "Brian Daboll is now Tennessee’s offensive coordinator after his time as the Giants’ head coach, and that immediately makes this game personal. The Titans officially list Daboll as their offensive coordinator, and his return to face New York gives the broadcast an easy storyline before kickoff.",
      "Then there is Wan’Dale Robinson.",
      "Robinson was drafted by the Giants in 2022, Daboll’s first year with the team, and he later reunited with Daboll in Tennessee on a major free-agent deal. That means this is not just Daboll against his old team. It is Daboll and one of his former Giants weapons walking back into MetLife wearing Titans colors.",
      "And then there is the quarterback angle: Cam Ward vs. Jaxson Dart.",
      "Ward went No. 1 overall to the Titans in the 2025 NFL Draft, while the Giants traded back into the first round to take Dart at No. 25. Dart was the second quarterback taken after Ward, which gives this matchup a clean QB-class comparison.",
      "By the time this game happens, they are not rookies anymore. But the story still works: two first-round quarterbacks from the same draft class, both trying to prove their franchise got it right.",
      "Why: Daboll revenge game, Wan’Dale Robinson return, and Cam Ward vs. Jaxson Dart from the same first-round QB class.",

      "3. Away Game vs Las Vegas Raiders",
      "Titans-Raiders feels like a perfect rebuild-check game.",
      "Both teams are trying to climb out of the same part of the NFL standings. Both are trying to build around young offensive talent. And both picked near the top of the 2026 NFL Draft, with the Raiders selecting quarterback Fernando Mendoza at No. 1 overall and the Titans picking three spots later at No. 4.",
      "That gives this game a clean national TV hook: which rebuild looks more real?",
      "The Raiders will be selling Mendoza as the new face of the franchise. The Titans will be selling Cam Ward’s Year 2 progress, now with more help around him. Tennessee used that No. 4 pick on wide receiver Carnell Tate, another sign that the organization is trying to give Ward the type of weaponry he needs to take the next step.",
      "And because this game would be in Las Vegas, the atmosphere does half the work. Allegiant Stadium, a night-game setting, Raiders fans, Titans fans traveling, and two rebuilding teams trying to prove they are not stuck at the bottom anymore.",
      "Why: Raiders rebuild vs. Titans rebuild, Fernando Mendoza vs. Cam Ward, and a Vegas setting made for primetime.",

      "4. Home Game vs Washington Commanders",
      "This is the best “Cam Ward progress report” game on the list.",
      "Jayden Daniels gives the Titans a clear quarterback measuring stick. He is the kind of young quarterback Tennessee wants Ward to become: dynamic, dangerous, and capable of making a franchise feel like it has arrived. Daniels remains listed as Washington’s quarterback, which makes this a clean young-QB comparison for national television.",
      "For Ward, this game would not just be about winning. It would be about showing growth.",
      "Can he command the offense? Can he answer another explosive quarterback? Can he look like the kind of player Tennessee can build around for the next decade?",
      "That is why this matchup works so well at home. Nashville gets the stage. The Titans get a young, exciting opponent. And Ward gets a chance to show that his development is not just something Titans fans are talking themselves into.",
      "It is something the rest of the league can see.",
      "Why: Jayden Daniels is a strong measuring stick for Cam Ward’s growth, and Nashville gets a future-focused primetime matchup.",

      "5. Away Game vs Dallas Cowboys",
      "This is the biggest stage game.",
      "The Cowboys are always going to bring national attention. It does not matter where they are in the standings. Dallas on primetime is built into the NFL machine, and a Titans road game against the Cowboys gives Tennessee a rare chance to step into the biggest possible spotlight.",
      "For Cam Ward and the Titans, this is where they can truly make a name for themselves.",
      "A strong performance against Houston proves something inside the division. A strong performance against Washington or Las Vegas proves something about the rebuild. But a strong performance against Dallas on national television changes the way people talk about you.",
      "This is the game where casual fans learn names. This is the game where the broadcast focuses on Ward, the new uniforms, the rebuild, the coaching staff, and the direction of the franchise. This is the game where Tennessee can stop being discussed as a team “trying to get there” and start looking like a team people need to pay attention to.",
      "Why: Cowboys spotlight, national exposure, and a chance for Cam Ward and the Titans to announce themselves to the rest of the NFL.",

      "Final Ranking",
      "1. Home or Away vs Houston Texans",
      "2. Away vs New York Giants",
      "3. Away vs Las Vegas Raiders",
      "4. Home vs Washington Commanders",
      "5. Away vs Dallas Cowboys",
      "The Titans do not need primetime games built only around nostalgia or big-market opponents. They need games with stories people can follow.",
      "Houston brings the rivalry and the Oilers-color controversy. New York brings Brian Daboll, Wan’Dale Robinson, and the Cam Ward-Jaxson Dart quarterback comparison. Las Vegas brings two rebuilds and Fernando Mendoza. Washington brings Jayden Daniels as the progress test. Dallas brings the biggest national stage possible."
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
  {article.body.map((paragraph, index) => {
    const isGameSubtitle =
      paragraph.startsWith("1. Home or Away Game vs Houston Texans") ||
      paragraph.startsWith("2. Away Game vs New York Giants") ||
      paragraph.startsWith("3. Away Game vs Las Vegas Raiders") ||
      paragraph.startsWith("4. Home Game vs Washington Commanders") ||
      paragraph.startsWith("5. Away Game vs Dallas Cowboys") ||
      paragraph.startsWith("Final Ranking");

    return (
      <p
        key={index}
        style={{
          fontWeight: isGameSubtitle ? 900 : 400,
          fontSize: isGameSubtitle ? "26px" : "19px",
          marginTop: isGameSubtitle ? "34px" : "16px",
          color: colors.black,
        }}
      >
        {paragraph}
      </p>
    );
  })}
</div>
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
