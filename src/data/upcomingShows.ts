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
    date: '2025-12-19',
    time: '19:00',
    venue: 'Loop',
    city: 'Wien',
  }
];
