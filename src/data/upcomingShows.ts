export interface UpcomingShow {
  id: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  ticketLink?: string;
}

export const upcomingShows: UpcomingShow[] = [
  {
    id: '1',
    date: '2025-02-15',
    time: '20:00',
    venue: 'Reigen',
    city: 'Wien',
    ticketLink: 'https://example.com/tickets',
  },
  {
    id: '2',
    date: '2025-03-22',
    time: '19:30',
    venue: 'Stockwerk',
    city: 'Wien',
    ticketLink: 'https://example.com/tickets',
  },
  {
    id: '3',
    date: '2025-04-10',
    time: '20:00',
    venue: 'Vorstadttheater',
    city: 'Wien',
  },
];
