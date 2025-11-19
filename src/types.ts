export enum EventType {
  CEREMONY = 'Cerimônia',
  RECEPTION = 'Recepção',
  PARTY = 'Festa'
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  type: EventType;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface RSVPFormData {
  name: string;
  email: string;
  attendance: 'yes' | 'no';
  guests: number;
  dietaryRestrictions: string;
}