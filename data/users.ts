export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  city: string;
  avatar: string;
  archetype: string;
  coins: number;
  notifCount: number;
};

export const ME: User = {
  id: "usr-000",
  name: "Parv",
  username: "parv",
  email: "parv@serqle.com",
  city: "Melbourne",
  avatar: "",
  archetype: "The Explorer",
  coins: 240,
  notifCount: 3,
};

export type Contact = {
  id: string;
  name: string;
  username: string;
  archetype: string;
  city: string;
  avatar: string;
  traits: string[];
  isConnected: boolean;
};

export const CONTACTS: Contact[] = [
  {
    id: "usr-001",
    name: "Aanya Shah",
    username: "aanya",
    archetype: "The Creator",
    city: "Melbourne",
    avatar: "",
    traits: ["Creative", "Expressive", "Warm"],
    isConnected: true,
  },
  {
    id: "usr-002",
    name: "Rohan Mehta",
    username: "rohan",
    archetype: "The Visionary",
    city: "Melbourne",
    avatar: "",
    traits: ["Strategic", "Bold", "Curious"],
    isConnected: true,
  },
  {
    id: "usr-003",
    name: "Priya Nair",
    username: "priya",
    archetype: "The Nurturer",
    city: "Sydney",
    avatar: "",
    traits: ["Empathetic", "Grounded", "Loyal"],
    isConnected: false,
  },
  {
    id: "usr-004",
    name: "Jake Morrison",
    username: "jakemo",
    archetype: "The Leader",
    city: "Melbourne",
    avatar: "",
    traits: ["Decisive", "Charismatic", "Driven"],
    isConnected: false,
  },
  {
    id: "usr-005",
    name: "Chloe Bennett",
    username: "chloeb",
    archetype: "The Mystic",
    city: "Brisbane",
    avatar: "",
    traits: ["Intuitive", "Deep", "Calm"],
    isConnected: false,
  },
];