/* Central image registry. Swap URLs here (or point to /public files) without touching components.
   All use the same crop/size params so the colour treatment in motion.css stays consistent.
   Thumbnails are requested at 640px wide, not hero size. */
const u = (id, w = 640) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const editorialStrip = [
  { src: u("photo-1486406146926-c627a92ad1ab", 900), srcSet: `${u("photo-1486406146926-c627a92ad1ab", 640)} 640w, ${u("photo-1486406146926-c627a92ad1ab", 1200)} 1200w`, caption: "Architecture", w: 900, h: 560 },
  { src: u("photo-1448630360428-65456885c650"), srcSet: `${u("photo-1448630360428-65456885c650", 480)} 480w, ${u("photo-1448630360428-65456885c650", 800)} 800w`, caption: "Residential", w: 640, h: 480 },
  { src: u("photo-1460317442991-0ec209397118"), srcSet: `${u("photo-1460317442991-0ec209397118", 480)} 480w, ${u("photo-1460317442991-0ec209397118", 800)} 800w`, caption: "Urban", w: 640, h: 480 },
];

/* Full-bleed chapter image + per-card imagery (same colour treatment applied in CSS). */
export const statementImage = u("photo-1486325212027-8081e485255e", 1800);
export const heroPoster = u("photo-1486406146926-c627a92ad1ab", 1600);

const card = (id, pos = "center") => ({ src: u(id, 720), srcSet: `${u(id, 480)} 480w, ${u(id, 720)} 720w`, pos });
export const solutionImages = [
  card("photo-1486406146926-c627a92ad1ab", "50% 30%"),
  card("photo-1460317442991-0ec209397118", "40% 50%"),
  card("photo-1448630360428-65456885c650", "50% 60%"),
  card("photo-1494526585095-c41746248156", "50% 50%"),
  card("photo-1486325212027-8081e485255e", "60% 40%"),
  card("photo-1460317442991-0ec209397118", "70% 70%"),
];
