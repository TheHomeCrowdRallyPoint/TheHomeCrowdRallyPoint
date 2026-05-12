import React, { useEffect, useState } from "react";
import { articles } from "./articles/articles";

const colors = {
  navy: "#0C2340",
  blue: "#4B92DB",
  red: "#C8102E",
  silver: "#A5ACAF",
  white: "#FFFFFF",
  black: "#000000",
};

const contactEmail = "ForwardProgressHQ@gmail.com";
const twitterHandle = "@HCRallyPoint";
const twitterUrl = "https://x.com/HCRallyPoint";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const styles = {
  page: {
    minHeight: "100vh",
    background: colors.white,
    color: colors.black,
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  header: {
    position: "relative",
    zIndex: 10,
    background: colors.white,
    borderBottom: `5px solid ${colors.red}`,
    padding: "10px 16px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
  },

  container: {
    maxWidth: "1180px",
    margin: "0 auto",
  },

  headerInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  brandLink: {
    display: "flex",
    alignItems: "center",
    color: colors.black,
    textDecoration: "none",
  },

  logoImage: {
    width: "340px",
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  nav: {
    display: "flex",
    gap: "10px",
    fontWeight: 900,
    flexWrap: "wrap",
    alignItems: "center",
  },

  navButton: {
    color: colors.black,
    textDecoration: "none",
    border: `3px solid ${colors.blue}`,
    borderRadius: "999px",
    padding: "9px 12px",
    background: colors.white,
    fontSize: "13px",
    fontWeight: 900,
    cursor: "pointer",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  main: {
    padding: "28px 16px 46px",
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, 0.9fr)",
    gap: "24px",
    alignItems: "stretch",
  },

  hero: {
    border: `5px solid ${colors.navy}`,
    borderRadius: "24px",
    padding: "40px",
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
    fontSize: "clamp(34px, 8vw, 58px)",
    lineHeight: 1,
    fontWeight: 900,
    color: colors.black,
  },

  h2: {
    margin: 0,
    fontSize: "clamp(28px, 7vw, 36px)",
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
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  sideCard: {
    border: `5px solid ${colors.silver}`,
    borderRadius: "24px",
    padding: "32px",
    background: `linear-gradient(135deg, ${colors.white} 0%, #f8fbff 100%)`,
    color: colors.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "360px",
    boxShadow: "0 14px 34px rgba(0,0,0,0.07)",
  },

  xFeedFrame: {
    marginTop: "18px",
    border: `4px solid ${colors.silver}`,
    borderRadius: "18px",
    padding: "10px",
    background: "#f8fbff",
    overflow: "hidden",
  },

  eyebrow: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: colors.black,
    borderLeft: `6px solid ${colors.red}`,
    paddingLeft: "12px",
    marginBottom: "18px",
  },

  focusRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "18px",
  },

  focusChip: {
    border: `3px solid ${colors.blue}`,
    borderRadius: "999px",
    padding: "9px 13px",
    fontWeight: 900,
    background: colors.white,
    color: colors.black,
  },

  smallNote: {
    marginTop: "22px",
    paddingTop: "18px",
    borderTop: `3px solid ${colors.silver}`,
    fontSize: "15px",
    lineHeight: 1.6,
    fontWeight: 700,
  },

  pageSection: {
    border: `5px solid ${colors.blue}`,
    borderRadius: "24px",
    padding: "40px",
    background: colors.white,
    color: colors.black,
    boxShadow: "0 14px 34px rgba(0,0,0,0.07)",
  },

  articlesSection: {
    marginTop: "34px",
    border: `5px solid ${colors.blue}`,
    borderRadius: "24px",
    padding: "34px",
    background: colors.white,
    color: colors.black,
    boxShadow: "0 14px 34px rgba(0,0,0,0.07)",
  },

  articleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
    marginTop: "24px",
  },

  articleCard: {
    border: `4px solid ${colors.silver}`,
    borderRadius: "22px",
    overflow: "hidden",
    background: colors.white,
    color: colors.black,
  },

  articleCardTop: {
    minHeight: "105px",
    background: colors.blue,
    borderBottom: `4px solid ${colors.red}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px",
    fontSize: "22px",
    fontWeight: 900,
    color: colors.black,
  },

  articleCardBody: {
    padding: "22px",
  },

  aboutGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  },

  aboutCard: {
    border: `4px solid ${colors.silver}`,
    borderRadius: "22px",
    padding: "26px",
    background: `linear-gradient(135deg, ${colors.white} 0%, #f8fbff 100%)`,
  },

  aboutCardTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 900,
    color: colors.black,
  },

  aboutText: {
    fontSize: "18px",
    lineHeight: 1.75,
    color: colors.black,
  },

  goalBox: {
    marginTop: "24px",
    borderLeft: `8px solid ${colors.red}`,
    padding: "22px",
    background: "#f8fbff",
    borderRadius: "18px",
    fontSize: "20px",
    lineHeight: 1.6,
    fontWeight: 900,
  },

  articleShell: {
    maxWidth: "850px",
    margin: "0 auto",
    border: `5px solid ${colors.blue}`,
    borderRadius: "24px",
    padding: "34px",
    background: colors.white,
    color: colors.black,
  },

  footer: {
    borderTop: `5px solid ${colors.blue}`,
    padding: "24px 16px",
    textAlign: "center",
    fontWeight: 900,
    color: colors.black,
    lineHeight: 1.8,
    fontSize: "14px",
  },

  footerLink: {
    color: colors.black,
    textDecoration: "none",
    overflowWrap: "anywhere",
  },
};

function Brand({ isMobile, goHome }) {
  return (
    <button
      onClick={goHome}
      style={{
        ...styles.brandLink,
        justifyContent: isMobile ? "center" : "flex-start",
        width: isMobile ? "100%" : "auto",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <img
        src="/logo.png"
        alt="The Home Crowd Rally Point logo"
        style={{
          ...styles.logoImage,
          width: isMobile ? "260px" : "340px",
        }}
      />
    </button>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © 2026 The Home Crowd Rally Point. All rights reserved.
      <br />
      <a href={`mailto:${contactEmail}`} style={styles.footerLink}>
        {contactEmail}
      </a>
      {" · "}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.footerLink}
      >
        {twitterHandle}
      </a>
    </footer>
  );
}

function getIsSectionHeading(paragraph) {
  return (
    paragraph.startsWith("1. Home or Away Game vs Houston Texans") ||
    paragraph.startsWith("2. Away Game vs New York Giants") ||
    paragraph.startsWith("3. Away Game vs Las Vegas Raiders") ||
    paragraph.startsWith("4. Home Game vs Washington Commanders") ||
    paragraph.startsWith("5. Away Game vs Dallas Cowboys") ||
    paragraph.startsWith("Cam Ward Gives the Offense a Reason to Matter") ||
    paragraph.startsWith("Carnell Tate Has to Prove He Can Be the Guy") ||
    paragraph.startsWith("Nicholas Singleton Has to Push the Room") ||
    paragraph.startsWith(
      "Gunnar Helm and Wan’Dale Robinson Can Give Cam Ward Reliable Answers"
    ) ||
    paragraph.startsWith("The Offense Needs an Identity Fans Can Recognize") ||
    paragraph.startsWith("Final Thought") ||
    paragraph.startsWith("Final Ranking")
  );
}

function Header({ isMobile, setPage, setActiveArticle }) {
  function goHome() {
    setActiveArticle(null);
    setPage("home");
    window.history.pushState("", document.title, window.location.pathname);
  }

  function goToPage(pageName) {
    setActiveArticle(null);
    setPage(pageName);
    window.history.pushState("", document.title, window.location.pathname);
  }

  return (
    <header style={styles.header}>
      <div
        style={{
          ...styles.container,
          ...styles.headerInner,
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
        }}
      >
        <Brand isMobile={isMobile} goHome={goHome} />

        <nav
          style={{
            ...styles.nav,
            justifyContent: "center",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <button style={styles.navButton} onClick={goHome}>
            Home
          </button>

          <button
            style={styles.navButton}
            onClick={() => goToPage("articles")}
          >
            Articles
          </button>

          <button style={styles.navButton} onClick={() => goToPage("about")}>
            About Me
          </button>

          <a style={styles.navButton} href={`mailto:${contactEmail}`}>
            Contact
          </a>

          <a
            style={styles.navButton}
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitterHandle}
          </a>
        </nav>
      </div>
    </header>
  );
}

function ArticleCard({ article, isMobile, openArticle }) {
  return (
    <article style={styles.articleCard}>
      <div style={styles.articleCardTop}>{article.imageLabel}</div>

      <div style={styles.articleCardBody}>
        <p style={{ fontWeight: 900 }}>{article.category}</p>

        <h3
          style={{
            fontSize: isMobile ? "22px" : "25px",
            fontWeight: 900,
            color: colors.black,
            marginTop: "10px",
          }}
        >
          {article.title}
        </h3>

        <p style={{ lineHeight: 1.7 }}>{article.dek}</p>

        <button
          style={{
            ...styles.button,
            width: isMobile ? "100%" : "auto",
          }}
          onClick={() => openArticle(article)}
        >
          Read Article
        </button>
      </div>
    </article>
  );
}

function XFeedCard({ isMobile }) {
  useEffect(() => {
    function loadXWidget() {
      if (
        typeof window !== "undefined" &&
        window.twttr &&
        window.twttr.widgets
      ) {
        window.twttr.widgets.load();
      }
    }

    loadXWidget();

    const timer = setTimeout(() => {
      loadXWidget();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      style={{
        ...styles.sideCard,
        padding: isMobile ? "18px" : "24px",
        minHeight: isMobile ? "auto" : "520px",
        borderWidth: isMobile ? "4px" : "5px",
        justifyContent: "flex-start",
      }}
    >
      <span style={styles.eyebrow}>Live from X</span>

      <h2
        style={{
          ...styles.h2,
          fontSize: isMobile ? "28px" : "32px",
        }}
      >
        @HCRallyPoint
      </h2>

      <p
        style={{
          fontSize: isMobile ? "16px" : "17px",
          lineHeight: 1.6,
          fontWeight: 700,
        }}
      >
        Titans stories. Real conversation. Fan-first coverage.
      </p>

      <div
        style={{
          ...styles.xFeedFrame,
          padding: isMobile ? "8px" : "10px",
        }}
      >
        <a
          className="twitter-timeline"
          data-height={isMobile ? "500" : "620"}
          data-theme="light"
          data-chrome="nofooter noborders transparent"
          href="https://twitter.com/HCRallyPoint"
        >
          Posts by @HCRallyPoint
        </a>
      </div>
    </aside>
  );
}

function AboutSiteSection({ isMobile }) {
  return (
    <section
      style={{
        ...styles.articlesSection,
        padding: isMobile ? "24px" : "34px",
        borderWidth: isMobile ? "4px" : "5px",
      }}
    >
      <span style={styles.eyebrow}>About the Site</span>

      <h2 style={styles.h2}>Built for Titans Fans</h2>

      <p
        style={{
          ...styles.dek,
          fontSize: isMobile ? "18px" : "20px",
        }}
      >
        The Home Crowd Rally Point is built for Titans fans who want real
        football stories and fan-first conversation.
      </p>

      <div style={styles.focusRow}>
        <span style={styles.focusChip}>Tennessee Titans</span>
        <span style={styles.focusChip}>NFL Storylines</span>
        <span style={styles.focusChip}>Fan Analysis</span>
      </div>

      <p style={styles.smallNote}>
        Titans stories. Real conversation. Fan-first coverage.
      </p>
    </section>
  );
}

function ArticlePage({ article, isMobile, setPage, setActiveArticle }) {
  function backToHome() {
    setActiveArticle(null);
    setPage("home");
    window.history.pushState("", document.title, window.location.pathname);
  }

  return (
    <div style={styles.page}>
      <Header
        isMobile={isMobile}
        setPage={setPage}
        setActiveArticle={setActiveArticle}
      />

      <main
        style={{
          ...styles.main,
          padding: isMobile ? "20px 12px 38px" : styles.main.padding,
        }}
      >
        <article
          style={{
            ...styles.articleShell,
            padding: isMobile ? "22px" : "34px",
            borderWidth: isMobile ? "4px" : "5px",
          }}
        >
          <p style={{ fontWeight: 900 }}>{article.category}</p>

          <h1
            style={{
              ...styles.h1,
              fontSize: isMobile ? "34px" : "clamp(36px, 6vw, 46px)",
              lineHeight: 1.05,
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              ...styles.dek,
              fontSize: isMobile ? "18px" : "20px",
            }}
          >
            {article.dek}
          </p>

          <p style={{ fontWeight: 900 }}>
            By {article.author} · {article.date}
          </p>

          <div
            style={{
              fontSize: isMobile ? "18px" : "19px",
              lineHeight: isMobile ? 1.7 : 1.8,
            }}
          >
            {article.body.map((paragraph, index) => {
              const isSectionHeading = getIsSectionHeading(paragraph);
              const isWhyLine = paragraph.startsWith("Why:");

              return (
                <p
                  key={index}
                  style={{
                    fontWeight: isSectionHeading || isWhyLine ? 900 : 400,
                    fontSize: isSectionHeading
                      ? isMobile
                        ? "23px"
                        : "26px"
                      : isMobile
                      ? "18px"
                      : "19px",
                    marginTop: isSectionHeading ? "32px" : "16px",
                    color: colors.black,
                  }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <button
            style={{
              ...styles.button,
              background: colors.white,
              width: isMobile ? "100%" : "auto",
            }}
            onClick={backToHome}
          >
            Back to Home
          </button>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function HomePage({ isMobile, openArticle, setPage }) {
  const featured = articles[articles.length - 1];
  const latestArticles = [...articles].reverse().slice(0, 2);

  return (
    <main
      style={{
        ...styles.main,
        padding: isMobile ? "22px 12px 40px" : styles.main.padding,
      }}
    >
      <div style={styles.container}>
        <section
          style={{
            ...styles.heroGrid,
            gridTemplateColumns: isMobile
              ? "1fr"
              : styles.heroGrid.gridTemplateColumns,
          }}
        >
          <div
            style={{
              ...styles.hero,
              padding: isMobile ? "24px" : "40px",
              borderWidth: isMobile ? "4px" : "5px",
            }}
          >
            <span style={styles.badge}>Featured Article</span>

            <h1
              style={{
                ...styles.h1,
                fontSize: isMobile ? "36px" : styles.h1.fontSize,
                lineHeight: 1.05,
              }}
            >
              {featured.title}
            </h1>

            <p
              style={{
                ...styles.dek,
                fontSize: isMobile ? "18px" : "20px",
              }}
            >
              {featured.dek}
            </p>

            <div style={styles.meta}>
              <span>{featured.category}</span>
              <span>{featured.date}</span>
            </div>

            <button
              style={{
                ...styles.button,
                width: isMobile ? "100%" : "auto",
              }}
              onClick={() => openArticle(featured)}
            >
              Read Article
            </button>
          </div>

          <XFeedCard isMobile={isMobile} />
        </section>

        <section
          style={{
            ...styles.articlesSection,
            padding: isMobile ? "24px" : "34px",
            borderWidth: isMobile ? "4px" : "5px",
          }}
        >
          <span style={styles.eyebrow}>Latest Articles</span>

          <h2 style={styles.h2}>
            Read the latest from The Home Crowd Rally Point
          </h2>

          <div
            style={{
              ...styles.articleGrid,
              gridTemplateColumns: isMobile
                ? "1fr"
                : styles.articleGrid.gridTemplateColumns,
            }}
          >
            {latestArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isMobile={isMobile}
                openArticle={openArticle}
              />
            ))}
          </div>

          <button
            style={{
              ...styles.button,
              background: colors.white,
              width: isMobile ? "100%" : "auto",
            }}
            onClick={() => setPage("articles")}
          >
            View All Articles
          </button>
        </section>

        <AboutSiteSection isMobile={isMobile} />
      </div>
    </main>
  );
}

function ArticlesPage({ isMobile, openArticle }) {
  return (
    <main
      style={{
        ...styles.main,
        padding: isMobile ? "22px 12px 40px" : styles.main.padding,
      }}
    >
      <div style={styles.container}>
        <section
          style={{
            ...styles.pageSection,
            padding: isMobile ? "24px" : "40px",
            borderWidth: isMobile ? "4px" : "5px",
          }}
        >
          <span style={styles.eyebrow}>All Articles</span>

          <h1
            style={{
              ...styles.h1,
              fontSize: isMobile ? "36px" : "clamp(38px, 6vw, 52px)",
            }}
          >
            Articles
          </h1>

          <p style={{ ...styles.dek, fontSize: isMobile ? "18px" : "20px" }}>
            Titans stories. Real conversation. Fan-first coverage.
          </p>

          <div
            style={{
              ...styles.articleGrid,
              gridTemplateColumns: isMobile
                ? "1fr"
                : styles.articleGrid.gridTemplateColumns,
            }}
          >
            {[...articles].reverse().map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isMobile={isMobile}
                openArticle={openArticle}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function AboutPage({ isMobile }) {
  return (
    <main
      style={{
        ...styles.main,
        padding: isMobile ? "22px 12px 40px" : styles.main.padding,
      }}
    >
      <div style={styles.container}>
        <section
          style={{
            ...styles.pageSection,
            padding: isMobile ? "24px" : "40px",
            borderWidth: isMobile ? "4px" : "5px",
          }}
        >
          <span style={styles.eyebrow}>About Me</span>

          <h1
            style={{
              ...styles.h1,
              fontSize: isMobile ? "36px" : "clamp(38px, 6vw, 52px)",
            }}
          >
            Jeremy Neasley
          </h1>

          <div
            style={{
              ...styles.aboutGrid,
              gridTemplateColumns: isMobile
                ? "1fr"
                : styles.aboutGrid.gridTemplateColumns,
            }}
          >
            <div
              style={{
                ...styles.aboutCard,
                padding: isMobile ? "22px" : "26px",
                borderWidth: "4px",
              }}
            >
              <h2 style={styles.aboutCardTitle}>Who I Am</h2>

              <p
                style={{
                  ...styles.aboutText,
                  fontSize: isMobile ? "17px" : "18px",
                }}
              >
                My name is Jeremy Neasley, founder of The Home Crowd Rally
                Point.
              </p>

              <p
                style={{
                  ...styles.aboutText,
                  fontSize: isMobile ? "17px" : "18px",
                }}
              >
                I currently work in healthcare. I am also a Veteran who spent my
                career at Fort Campbell. Football has always been one of my
                biggest passions. I am a Titans fan, I love the game, and I
                enjoy writing, so this site is my way of bringing those things
                together.
              </p>

              <p
                style={{
                  ...styles.aboutText,
                  fontSize: isMobile ? "17px" : "18px",
                }}
              >
                I was raised a Cowboys fan until the Houston Oilers moved to
                Tennessee. Once they became Tennessee’s team, I have been with
                them ever since. That connection is a big part of why I care
                about the direction of the franchise, the storylines around the
                team, and the way Titans fans talk about what is being built.
              </p>
            </div>

            <div
              style={{
                ...styles.aboutCard,
                padding: isMobile ? "22px" : "26px",
                borderWidth: "4px",
              }}
            >
              <h2 style={styles.aboutCardTitle}>Why I Do This</h2>

              <p
                style={{
                  ...styles.aboutText,
                  fontSize: isMobile ? "17px" : "18px",
                }}
              >
                I want to write about the Titans in a way that feels like
                sitting with real fans, having real conversations, but with
                enough structure and thought behind it to make the discussion
                matter.
              </p>

              <p
                style={{
                  ...styles.aboutText,
                  fontSize: isMobile ? "17px" : "18px",
                }}
              >
                That means looking beyond just wins, losses, and box scores. I
                care about the bigger picture: team identity, coaching decisions,
                player development, rivalries, and the moments that shape how
                fans see the franchise.
              </p>
            </div>
          </div>

          <div
            style={{
              ...styles.goalBox,
              fontSize: isMobile ? "18px" : "20px",
              padding: isMobile ? "18px" : "22px",
            }}
          >
            The goal is simple: tell better football stories. Build better
            football conversations. Give Titans fans a rally point.
          </div>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [page, setPage] = useState("home");
  const isMobile = useIsMobile();

  function openArticle(article) {
    setActiveArticle(article);
    window.location.hash = article.slug;
  }

  useEffect(() => {
    const slugFromUrl = window.location.hash.replace("#", "");

    if (slugFromUrl) {
      const matchedArticle = articles.find(
        (article) => article.slug === slugFromUrl
      );

      if (matchedArticle) {
        setActiveArticle(matchedArticle);
      }
    }
  }, []);

  if (activeArticle) {
    return (
      <ArticlePage
        article={activeArticle}
        isMobile={isMobile}
        setPage={setPage}
        setActiveArticle={setActiveArticle}
      />
    );
  }

  return (
    <div style={styles.page}>
      <Header
        isMobile={isMobile}
        setPage={setPage}
        setActiveArticle={setActiveArticle}
      />

      {page === "home" && (
        <HomePage
          isMobile={isMobile}
          openArticle={openArticle}
          setPage={setPage}
        />
      )}

      {page === "articles" && (
        <ArticlesPage isMobile={isMobile} openArticle={openArticle} />
      )}

      {page === "about" && <AboutPage isMobile={isMobile} />}

      <Footer />
    </div>
  );
}
