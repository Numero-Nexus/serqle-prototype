export type ActivityItem = {
  id: string;
  icon: string;
  text: string;
  bold: string;
  suffix?: string;
  time: string;
  right?: "avatars" | "rating" | "image" | "avatar-single";
  count?: string;
  rating?: number;
};

export const UPCOMING_EVENTS = [
  {
    id: "evt-001",
    date: "SAT 24 MAY • 9:00PM",
    title: "Neon Frequencies",
    location: "The Warehouse, Collingwood",
    tag: "You're going",
    tagColor: "#2DC9A0",
    attendeeCount: "+12",
  },
  {
    id: "evt-003",
    date: "FRI 23 MAY • 8:00PM",
    title: "Solstice Social",
    location: "Studio 42, Fitzroy",
    tag: "Interested",
    tagColor: "#C9972D",
    attendeeCount: "+8",
  },
];

export const ATTENDED_EVENTS = [
  {
    id: "evt-a1",
    date: "FRI 16 MAY • 7:00PM",
    title: "Wine & Real Talk",
    location: "Neighbourhood Wine, Fitzroy",
    tag: "ID exchanged",
    tagColor: "#2DC9A0",
    attendeeCount: "+5",
  },
  {
    id: "evt-a2",
    date: "SAT 10 MAY • 6:00PM",
    title: "Sunset Picnic & Talks",
    location: "Princes Park, Carlton",
    tag: "Attended",
    tagColor: "#8cb89a",
    attendeeCount: "+9",
  },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: "r1", icon: "👥", text: "You connected with",  bold: "Aanya, Rohan and 3 others",  time: "2h ago",  right: "avatars", count: "+3" },
  { id: "r2", icon: "⭐", text: "You reviewed",        bold: "Neon Frequencies",            time: "5h ago",  right: "rating",  rating: 5  },
  { id: "r3", icon: "🔖", text: "You saved",           bold: "Full Moon Gathering",         time: "1d ago",  right: "image"                },
  { id: "r4", icon: "📋", text: "You RSVP'd to",       bold: "Breathwork & Beyond",         time: "3d ago",  right: "image"                },
  { id: "r5", icon: "🎁", text: "You gifted",          bold: "Canvas & Conversations",      suffix: "to Priya", time: "4d ago", right: "avatar-single" },
];