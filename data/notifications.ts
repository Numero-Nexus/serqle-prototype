export type Notification = {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  entityType?: string;
  entityId?: string;
};

export const NOTIFICATIONS: Notification[] = [
  { id: "n1", type: "new_message",   title: "New message",          message: "Aanya Shah sent you a message.",                isRead: false, time: "2h ago",    entityType: "conversation", entityId: "conv-001" },
  { id: "n2", type: "event_reminder",title: "Event tomorrow",        message: "Neon Frequencies starts tomorrow at 9 PM.",     isRead: false, time: "5h ago",    entityType: "event",        entityId: "evt-001" },
  { id: "n3", type: "nearby_event",  title: "New event near you",    message: "Canvas & Conversations is 1.7 km from you.",    isRead: false, time: "1d ago",    entityType: "event",        entityId: "evt-005" },
  { id: "n4", type: "serqlemate",    title: "New Serqlemate",        message: "Rohan Mehta connected with you.",               isRead: true,  time: "2d ago",    entityType: "user",         entityId: "usr-002" },
  { id: "n5", type: "event_update",  title: "Event update",          message: "Solstice Social is now sold out.",              isRead: true,  time: "3d ago",    entityType: "event",        entityId: "evt-003" },
  { id: "n6", type: "soul_card",     title: "Soul Card unlocked",    message: "Your Explorer Soul Card is now active.",        isRead: true,  time: "5d ago" },
];