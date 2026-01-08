
export type UserRole = 'SUPER_ADMIN' | 'OWNER' | 'CLIENT';
export type ThemeType = 'LUXURY' | 'LIGHT' | 'CONTRAST';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  theme: ThemeType;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number; // For anti-collision logic
  category: 'Cabelo' | 'Unhas' | 'Maquiagem' | 'Pele';
  image: string;
}

export interface DetailedRating {
  atendimento: number;
  ambiente: number;
  qualidade: number;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: string; // ISO format YYYY-MM-DD
  time: string; // HH:mm
  endTime: string; // HH:mm (calculated)
  professional: string;
  status: 'Pendente' | 'Confirmado' | 'Concluído' | 'Cancelado';
  price: number; // Captured at booking
  rating?: number; // legacy/total
  detailedRatings?: DetailedRating;
  reviewComment?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
