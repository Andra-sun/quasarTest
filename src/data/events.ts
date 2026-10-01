import type { SportEvent } from '@/types/event';

const inHours = (h: number) => new Date(Date.now() + h * 3_600_000).toISOString();

export const events: SportEvent[] = [
  {
    id: 1,
    title: 'Final do Campeonato Municipal',
    sport: 'futebol',
    start: inHours(-1),
    venue: 'Estádio Municipal',
    neighborhood: 'Centro',
    free: true,
    live: true,
  },
  {
    id: 2,
    title: 'Torneio Interbairros de Vôlei',
    sport: 'volei',
    start: inHours(3),
    venue: 'Ginásio Poliesportivo',
    neighborhood: 'Bela Vista',
    free: true,
  },
  {
    id: 3,
    title: 'Corrida do Parque 5K',
    sport: 'corrida',
    start: inHours(20),
    venue: 'Parque da Cidade',
    neighborhood: 'Jardim',
    free: false,
  },
  {
    id: 4,
    title: 'Copa de Basquete 3x3',
    sport: 'basquete',
    start: inHours(28),
    venue: 'Praça Esportiva',
    neighborhood: 'São José',
    free: true,
  },
  {
    id: 5,
    title: 'Travessia de Natação',
    sport: 'natacao',
    start: inHours(50),
    venue: 'Clube Náutico',
    neighborhood: 'Lagoa',
    free: false,
  },
  {
    id: 6,
    title: 'Open de Jiu-Jitsu',
    sport: 'lutas',
    start: inHours(75),
    venue: 'Ginásio Municipal',
    neighborhood: 'Centro',
    free: false,
  },
];
