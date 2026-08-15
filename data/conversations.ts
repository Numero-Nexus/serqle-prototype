export type Message = {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isMine: boolean;
};

export type Conversation = {
  id: string;
  userId: string;
  name: string;
  archetype: string;
  lastMessage: string;
  lastMessageAt: string;
  unreadCount: number;
  messages: Message[];
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "conv-001",
    userId: "usr-001",
    name: "Aanya Shah",
    archetype: "The Creator",
    lastMessage: "Are you going to Solstice Social?",
    lastMessageAt: "2h ago",
    unreadCount: 2,
    messages: [
      { id: "m1", senderId: "usr-001", content: "Hey! Saw you're going to Neon Frequencies 👀", timestamp: "10:12 AM", isMine: false },
      { id: "m2", senderId: "usr-000", content: "Yes! Are you going too?", timestamp: "10:14 AM", isMine: true },
      { id: "m3", senderId: "usr-001", content: "100%! We should meet there.", timestamp: "10:15 AM", isMine: false },
      { id: "m4", senderId: "usr-001", content: "Are you going to Solstice Social?", timestamp: "11:30 AM", isMine: false },
    ],
  },
  {
    id: "conv-002",
    userId: "usr-002",
    name: "Rohan Mehta",
    archetype: "The Visionary",
    lastMessage: "That talk on AI was 🔥",
    lastMessageAt: "Yesterday",
    unreadCount: 0,
    messages: [
      { id: "m5", senderId: "usr-000", content: "Did you catch the Tech Founders Night?", timestamp: "8:00 PM", isMine: true },
      { id: "m6", senderId: "usr-002", content: "That talk on AI was 🔥", timestamp: "8:05 PM", isMine: false },
      { id: "m7", senderId: "usr-000", content: "Agreed. We should go together next time.", timestamp: "8:07 PM", isMine: true },
    ],
  },
  {
    id: "conv-003",
    userId: "usr-003",
    name: "Priya Nair",
    archetype: "The Nurturer",
    lastMessage: "Breathwork session was so good 🌿",
    lastMessageAt: "2d ago",
    unreadCount: 0,
    messages: [
      { id: "m8", senderId: "usr-003", content: "Breathwork session was so good 🌿", timestamp: "9:00 AM", isMine: false },
      { id: "m9", senderId: "usr-000", content: "Wish I had gone! Next time for sure.", timestamp: "9:30 AM", isMine: true },
    ],
  },
];