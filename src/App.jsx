import React, { useEffect, useState } from "react";

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

const articles = [
  {
    id: 1,
    slug: "titans-5-best-primetime-opponents",
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
      "Jayden Daniels gives the Titans a clear quarterback measuring stick. He is the kind of young quarterback Tennessee wants Ward to become: dynamic, dangerous, and capable of making a franchise feel like it has arrived. Daniels, if healthy, will make a clean young-QB comparison for national television.",
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
      "Houston brings the rivalry and the Oilers-color controversy. New York brings Brian Daboll, Wan’Dale Robinson, and the Cam Ward-Jaxson Dart quarterback comparison. Las Vegas brings two rebuilds and Fernando Mendoza. Washington brings Jayden Daniels as the progress test. Dallas brings the biggest national stage possible.",
    ],
  },
  {
    id: 2,
    slug: "titans-need-to-be-interesting-offense-edition",
    title:
      "The Titans Don’t Need to Be Great Yet; They Need to Be Interesting: Offense Edition",
    dek: "The Titans offense does not need to be perfect right away, but it does need to give fans direction, growth, energy, and something worth watching.",
    category: "Titans",
    author: "Jeremy Neasley",
    date: "May 12, 2026",
    readTime: "7 min read",
    imageLabel: "OFFENSE EDITION",
    body: [
      "The Titans do not need the offense to be perfect right away.",
      "That is not realistic. Not with a young quarterback. Not with new pieces trying to fit together. Not with an offensive identity still being built. But the offense does need to become interesting.",
      "That is the next step.",
      "Interesting does not mean every drive ends in points. It does not mean Cam Ward has to look like a finished franchise quarterback immediately. It does not mean the Titans suddenly need to become one of the most explosive teams in football.",
      "It means there must be something worth watching. It means fans need to see direction. Growth. Energy. A reason to believe the offense is becoming something instead of just surviving another season.",
      "For Tennessee, that starts with Cam Ward.",

      "Cam Ward Gives the Offense a Reason to Matter",
      "When a team has a young quarterback, everything changes.",
      "The entire offense becomes part of his evaluation. Every route, every protection, every third down, every red zone trip, every mistake, and every flash become part of the bigger question.",
      "Is this the guy?",
      "That is what makes Cam Ward the center of the Titans’ offensive story. Ward’s first season gave Tennessee both reasons to believe and reasons to keep building. The record was ugly at 3-14, and the offense clearly was not where it needed to be. But Ward still started all 17 games, threw for 3,169 yards, completed 59.8% of his passes, and finished with 15 touchdowns to 7 interceptions.",
      "That matters because even in a rough year, he did not completely fall apart. He protected the football better than a lot of young quarterbacks do in bad situations, and he showed enough to keep the conversation moving forward.",
      "But the next step has to be about more than survival.",
      "Ward was sacked 55 times, which tells part of the story. The structure has to be better. The answers around him have to be better. Brian Daboll has to help make the offense easier for him to operate, not by hiding him, but by giving him a real plan.",
      "Ward does not have to be great yet. But he does have to make the offense feel like it has a future.",
      "Can he command the huddle? Can he handle pressure better? Can he turn more drives into touchdowns? Can he create without forcing the issue? Can he push the ball while still protecting it? Can he turn talent around him into real production?",
      "That is what makes a young quarterback interesting. Even when the results are uneven, there is value in seeing growth. There is value in watching him answer questions. There is value in knowing that every week might show you something new about where the franchise is headed.",
      "The Titans need that.",

      "Carnell Tate Has to Prove He Can Be the Guy",
      "Carnell Tate enters Tennessee with real talent, but also with a real question.",
      "At Ohio State, he was not the headline receiver. Jeremiah Smith was the main name in that room, and Tate had to play as the No. 2 option in one of the most talented wide receiver groups in college football. Now the question changes.",
      "Can Tate become a No. 1 type of receiver for the Titans?",
      "That does not mean he has to be a star immediately. It does not mean he has to dominate every matchup as a rookie. But Tennessee needs to find out whether he can grow into the kind of receiver Cam Ward can rely on as the offense develops.",
      "A rebuilding team needs players who can outgrow their draft slot, their college role, or the label people put on them coming into the league. Tate has that opportunity.",
      "He has to prove he can win when more attention is on him. He has to show he can handle tougher coverage, make contested catches, separate well enough to keep the offense on schedule, and become more than just a complementary piece.",
      "That is what makes him interesting.",
      "If Ward and Tate start building real chemistry, the Titans suddenly have one of the most important things a young offense can have: a quarterback and receiver connection that feels like part of the future. Tate does not have to prove everything right away. But he does have to prove he can be more than somebody’s No. 2.",

      "Nicholas Singleton Has to Push the Room",
      "Nicholas Singleton being drafted in the fifth round does not mean he should be treated like an afterthought.",
      "That is what makes him interesting.",
      "The Titans already have Tony Pollard and Tyjae Spears ahead of him, so Singleton does not walk into Tennessee with anything handed to him. He has to earn touches. He has to force the coaching staff to notice him. He has to make the running back room more competitive.",
      "That is exactly what the Titans need.",
      "Singleton has the talent to push Spears first. If he does that, the next question becomes whether he can eventually push Pollard by the end of the year. That does not mean the Titans need to rush him into a featured role. It means he has to make the team consider it.",
      "For a rebuilding offense, that kind of pressure is healthy.",
      "A young quarterback like Cam Ward needs help around him, and a running back who can bring energy, explosiveness, and pass-catching ability gives the offense another way to function. If Singleton can turn limited touches into real production, he gives Tennessee a reason to expand his role.",
      "The Titans do not need him to take over immediately. They need him to push the two backs ahead of him and make the offense more difficult to ignore.",

      "Gunnar Helm and Wan’Dale Robinson Can Give Cam Ward Reliable Answers",
      "Every young quarterback needs players who can make the game feel easier.",
      "For Cam Ward, Gunnar Helm and Wan’Dale Robinson can become those kinds of players. Helm is no longer just a young tight end trying to find a role. After his rookie year with the Titans, he enters this season as TE1, and that changes the expectation. He has to become a reliable part of the offense, especially in the areas where young quarterbacks need help most.",
      "Third downs. Red zone snaps. Quick throws. Middle-of-the-field targets. Safety-valve situations. Plays where the first read is covered and Ward needs someone who understands where to be. That is where Helm matters.",
      "Wan’Dale Robinson brings a similar kind of value from the receiver position. He comes to Tennessee from the Giants, just like Brian Daboll, and that connection matters. Robinson already has familiarity with Daboll, and that should give him a chance to settle into the offense quickly.",
      "Not every target has to be a deep shot. Not every play has to be explosive. Sometimes a young quarterback needs dependable players who can uncover quickly, work underneath, find space, and help keep the offense on schedule. That is where Helm and Robinson can operate in a similar way.",
      "Helm can work as the tight end who gives Ward structure. Robinson can work as the slot receiver who gives Ward quick answers. Together, they can help Daboll build an offense that does not ask Ward to make the hardest throw on every snap. That is how an offense starts to find rhythm.",
      "If Helm becomes a dependable TE1 and Robinson becomes a trusted underneath option, the Titans gain two players who can help Ward stay comfortable while the bigger pieces develop around him.",
      "That may not always create the flashiest highlights.",
      "But for a young quarterback, it can be the difference between chaos and control.",

      "The Offense Needs an Identity Fans Can Recognize",
      "The Titans do not need to be elite yet. But they do need an identity.",
      "Are they physical? Are they aggressive? Are they explosive? Are they balanced? Are they creative? Are they building around Ward’s strengths? Are they giving their young talent a chance to grow?",
      "That is what fans will be watching.",
      "Nobody should expect a finished product overnight. But there has to be something recognizable about the way Tennessee plays offense. If the Titans are going to look different, they need to feel different too.",
      "The new era cannot just be about uniforms and colors. The football has to match the energy.",

      "Final Thought",
      "The Titans offense does not need to be great yet.",
      "It needs to become interesting.",
      "That starts with Brian Daboll giving the offense real direction and Cam Ward showing that his rookie season was a foundation, not a ceiling. Ward survived a rough year, protected the football better than the record suggested, and now needs the structure, play-calling, and supporting cast to help him take the next step.",
      "Nicholas Singleton has to push the room. Even as a fifth-round pick, he has the talent to challenge Tyjae Spears first and possibly Tony Pollard by the end of the year. That kind of pressure is good for the offense.",
      "Carnell Tate has to prove he can be more than the No. 2 option he was at Ohio State behind Jeremiah Smith. Tennessee needs to find out if he can become a real go-to receiver for Ward.",
      "Gunnar Helm and Wan’Dale Robinson can help give Ward reliable answers. Helm enters the year as TE1, while Robinson brings familiarity with Daboll from New York. Together, they can help the offense stay on schedule, work the middle of the field, and give Ward options that do not require every throw to be difficult.",
      "That is what this season should be about. Not perfection. Progress. Not instant greatness. Direction.",
      "Before the Titans offense becomes dangerous, it has to become watchable. Before it becomes one of the league’s better units, it has to give fans something they can believe is being built the right way. That would be real progress.",
    ],
  },
];

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

  navLink: {
    color: colors.black,
    textDecoration: "none",
    border: `3px solid ${colors.blue}`,
    borderRadius: "999px",
    padding: "9px 12px",
    background: colors.white,
    fontSize: "13px",
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
    padding: "32px",
    background: `linear-gradient(135deg, ${colors.white} 0%, #f8fbff 100%)`,
    color: colors.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "360px",
    boxShadow: "0 14px 34px rgba(0,0,0,0.07)",
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

  h2: {
    margin: 0,
    fontSize: "clamp(28px, 7vw, 36px)",
    fontWeight: 900,
    color: colors.black,
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

  aboutSection: {
    marginTop: "34px",
    border: `5px solid ${colors.navy}`,
    borderRadius: "24px",
    padding: "40px",
    background: colors.white,
    color: colors.black,
    boxShadow: "0 14px 34px rgba(0,0,0,0.07)",
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

function Brand({ isMobile }) {
  return (
    <a
      href="/"
      style={{
        ...styles.brandLink,
        justifyContent: isMobile ? "center" : "flex-start",
        width: isMobile ? "100%" : "auto",
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
    </a>
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

function ArticlePage({ article, onBack }) {
  const isMobile = useIsMobile();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div
          style={{
            ...styles.container,
            ...styles.headerInner,
            justifyContent: isMobile ? "center" : "space-between",
          }}
        >
          <Brand isMobile={isMobile} />

          <button
            style={{
              ...styles.button,
              marginTop: 0,
              background: colors.white,
              width: isMobile ? "100%" : "auto",
            }}
            onClick={onBack}
          >
            Back to Home
          </button>
        </div>
      </header>

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
            By {article.author} · {article.date} · {article.readTime}
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
            onClick={onBack}
          >
            Back to Home
          </button>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [activeArticle, setActiveArticle] = useState(null);
  const featured = articles[articles.length - 1];
  const isMobile = useIsMobile();

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
        onBack={() => {
          setActiveArticle(null);
          window.history.pushState("", document.title, window.location.pathname);
        }}
      />
    );
  }

  return (
    <div style={styles.page}>
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
          <Brand isMobile={isMobile} />

          <nav
            style={{
              ...styles.nav,
              justifyContent: "center",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <a style={styles.navLink} href="/">
              Home
            </a>

            <a style={styles.navLink} href="#articles">
              Articles
            </a>

            <a style={styles.navLink} href="#about-me">
              About Me
            </a>

            <a style={styles.navLink} href={`mailto:${contactEmail}`}>
              Contact
            </a>

            <a
              style={styles.navLink}
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {twitterHandle}
            </a>
          </nav>
        </div>
      </header>

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
                <span>{featured.readTime}</span>
              </div>

              <button
                style={{
                  ...styles.button,
                  width: isMobile ? "100%" : "auto",
                }}
                onClick={() => {
                  window.location.hash = featured.slug;
                  setActiveArticle(featured);
                }}
              >
                Read Article
              </button>
            </div>

            <aside
              style={{
                ...styles.sideCard,
                padding: isMobile ? "24px" : "32px",
                minHeight: isMobile ? "auto" : "360px",
                borderWidth: isMobile ? "4px" : "5px",
              }}
            >
              <div>
                <span style={styles.eyebrow}>About the Site</span>

                <h2
                  style={{
                    ...styles.h2,
                    fontSize: isMobile ? "30px" : "34px",
                  }}
                >
                  Built for Titans Fans
                </h2>

                <p
                  style={{
                    fontSize: isMobile ? "17px" : "18px",
                    lineHeight: 1.7,
                  }}
                >
                  The Home Crowd Rally Point is a fan-first football site focused
                  on Titans storylines, roster direction, rebuild talk, and
                  national NFL conversations that matter to Tennessee.
                </p>

                <div style={styles.focusRow}>
                  <span style={styles.focusChip}>Tennessee Titans</span>
                  <span style={styles.focusChip}>NFL Storylines</span>
                  <span style={styles.focusChip}>Fan Analysis</span>
                </div>
              </div>

              <div>
                <p style={styles.smallNote}>
                  Coverage with a sports-media feel, written for readers who care
                  about where the franchise is headed.
                </p>

                <button
                  style={{
                    ...styles.button,
                    marginTop: "18px",
                    width: isMobile ? "100%" : "auto",
                  }}
                  onClick={() => {
                    window.location.hash = featured.slug;
                    setActiveArticle(featured);
                  }}
                >
                  Read the Featured Article
                </button>
              </div>
            </aside>
          </section>

          <section
            id="articles"
            style={{
              ...styles.articlesSection,
              padding: isMobile ? "24px" : "34px",
              borderWidth: isMobile ? "4px" : "5px",
            }}
          >
            <span style={styles.eyebrow}>Latest Articles</span>

            <h2 style={styles.h2}>Read the latest from The Home Crowd Rally Point</h2>

            <div
              style={{
                ...styles.articleGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : styles.articleGrid.gridTemplateColumns,
              }}
            >
              {[...articles].reverse().map((article) => (
                <article key={article.id} style={styles.articleCard}>
                  <div style={styles.articleCardTop}>{article.imageLabel}</div>

                  <div style={styles.articleCardBody}>
                    <p style={{ fontWeight: 900 }}>
                      {article.category} · {article.readTime}
                    </p>

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
                      onClick={() => {
                        window.location.hash = article.slug;
                        setActiveArticle(article);
                      }}
                    >
                      Read Article
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="about-me"
            style={{
              ...styles.aboutSection,
              padding: isMobile ? "24px" : "40px",
              borderWidth: isMobile ? "4px" : "5px",
            }}
          >
            <span style={styles.eyebrow}>About Me</span>

            <h2 style={styles.h2}>Jeremy Neasley</h2>

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
                <h3 style={styles.aboutCardTitle}>Who I Am</h3>

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
                  I currently work in healthcare. I am also a Veteran who spent
                  my career at Fort Campbell. Football has always been one of my
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
                <h3 style={styles.aboutCardTitle}>Why I Do This</h3>

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
                  care about the bigger picture: team identity, roster direction,
                  coaching decisions, player development, rivalries, and the
                  moments that shape how fans see the franchise.
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

      <Footer />
    </div>
  );
}
