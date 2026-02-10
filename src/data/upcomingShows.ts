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
    date: '2026-04-24',
    time: '19:00',
    venue: 'G5 - Live Music Bar',
    city: 'Wien',
    ticketLink: 'https://ticket1389.tickethome.at/buchen/250/24.04.2026/1900=&ref=lena',
  }
];
