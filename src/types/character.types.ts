export type Location = 'Konoha' | 'Suna' | 'Kiri' | 'Iwa' | 'Kumo';
export type Health = 'Healthy' | 'Injured' | 'Critical';

export interface Character {
  id: string;
  name: string;
  location: Location;
  health: Health;
  power: number;
  viewed: boolean;
}

export type SortOrder = 'asc' | 'desc' | null;
