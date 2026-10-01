export interface Sport{
  label: string;
  slug: string;
  icon: string;
  color: string;
}

export const esportes: Sport[] = [
  { label: 'Futebol', slug: 'futebol', icon: 'sports_soccer', color: 'green-4' },
  { label: 'Corrida', slug: 'corrida', icon: 'directions_run', color: 'light-blue-3' },
  { label: 'Vôlei', slug: 'volei', icon: 'sports_volleyball', color: 'amber-4' },
  { label: 'Basquete', slug: 'basquete', icon: 'sports_basketball', color: 'orange-4' },
  { label: 'Natação', slug: 'natacao', icon: 'pool', color: 'cyan-3' },
  { label: 'Lutas', slug: 'lutas', icon: 'sports_martial_arts', color: 'red-3' },
];
