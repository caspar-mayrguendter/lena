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
    date: '2026-06-17',
    time: '20:00',
    venue: 'Club Lucia',
    city: 'Wien',
  }
];
