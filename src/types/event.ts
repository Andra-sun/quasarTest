export interface SportEvent {
  id: number;
  title: string;
  sport: string;
  start: string;
  venue: string;
  neighborhood: string;
  free: boolean;
  live?: boolean;
}
