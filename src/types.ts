export type UserMode = 'customer' | 'provider';

export type NavProps = {
  navigation: any;
  route?: any;
};

export interface ServiceType {
  id: string; name: string; description: string; price: number; duration: string;
}
export interface ProviderType {
  id: string; name: string; profession: string; avatar: string; rating: number; reviews: number;
  experience: string; location: string; price: number; priceUnit: string; available: boolean;
  verified: boolean; about: string; services: ServiceType[]; gallery: string[]; workingHours: string;
  category: string; distance?: string;
}
export interface BookingType {
  id: string; provider: ProviderType; service: ServiceType; date: string; time: string;
  location: string; status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'; price: number; bookingId: string;
}
export interface NotificationType { id: string; type: 'booking'|'payment'|'promo'|'review'; title: string; message: string; time: string; read: boolean; }
export interface MessageType { id: string; text: string; sender: 'me'|'other'; time: string; }
export interface CategoryType { id: string; name: string; emoji: string; color: string; }
