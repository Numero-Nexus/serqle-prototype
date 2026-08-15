export type SoulCard = {
  archetype: string;
  archetypeCode: string;
  title: string;
  subtitle: string;
  tagline: string;
  vibeTags: string[];
  matchHint: string;
  cardStatus: "active" | "locked";
};

export const MY_SOUL_CARD: SoulCard = {
  archetype: "The Explorer",
  archetypeCode: "EXP",
  title: "The Explorer",
  subtitle: "Curious wanderer of worlds within and without",
  tagline: "You arrive at every room like it is a new country — open, alert, and quietly thrilled.",
  vibeTags: ["Curious", "Adventurous", "Social", "Creative", "Open"],
  matchHint: "You connect best with Creators and Visionaries who share your hunger for the new.",
  cardStatus: "active",
};