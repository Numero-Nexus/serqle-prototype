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
  city: "Ahmedabad",
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
    city: "Ahmedabad",
    avatar: "",
    traits: ["Creative", "Expressive", "Warm"],
    isConnected: true,
  },
  {
    id: "usr-002",
    name: "Rohan Mehta",
    username: "rohan",
    archetype: "The Visionary",
    city: "Ahmedabad",
    avatar: "",
    traits: ["Strategic", "Bold", "Curious"],
    isConnected: true,
  },
  {
    id: "usr-003",
    name: "Priya Nair",
    username: "priya",
    archetype: "The Nurturer",
    city: "Ahmedabad",
    avatar: "",
    traits: ["Empathetic", "Grounded", "Loyal"],
    isConnected: false,
  },
  {
    id: "usr-004",
    name: "Karan Joshi",
    username: "karan",
    archetype: "The Leader",
    city: "Mumbai",
    avatar: "",
    traits: ["Decisive", "Charismatic", "Driven"],
    isConnected: false,
  },
];