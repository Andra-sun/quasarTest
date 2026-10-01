export interface MenuItem{
  label: string;
  icon: string;
  to: string;
  live?: boolean;
}


export const menu: MenuItem[] = [
  { label: 'Hoje', icon: 'today', to: '/hoje', live: true },
  { label: 'Agenda', icon: 'calendar_month', to: '/agenda' },
  { label: 'Mapa de eventos', icon: 'map', to: '/mapa' },
  { label: 'Favoritos', icon: 'favorite', to: '/favoritos' },
];
