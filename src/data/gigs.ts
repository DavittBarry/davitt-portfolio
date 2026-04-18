export type Locale = 'en' | 'fi';

type LocalizedString = { en: string; fi: string };

export type Gig = {
  date: string;
  timeStart: string;
  timeEnd: string;
  venue: string;
  city: string;
  address: string;
  description: LocalizedString;
  website?: string;
  image?: string;
  isPrivate?: boolean;
};

export type LocalizedGig = {
  date: string;
  day: string;
  dayNum: string;
  month: string;
  year: string;
  timeStart: string;
  timeEnd: string;
  venue: string;
  city: string;
  address: string;
  description: string;
  website?: string;
  image?: string;
  isPrivate?: boolean;
};

const DAY_ABBR: Record<Locale, string[]> = {
  en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  fi: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
};

const MONTH_ABBR: Record<Locale, string[]> = {
  en: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  fi: [
    'Tammi',
    'Helmi',
    'Maalis',
    'Huhti',
    'Touko',
    'Kesä',
    'Heinä',
    'Elo',
    'Syys',
    'Loka',
    'Marras',
    'Joulu',
  ],
};

export const gigs: Gig[] = [
  {
    date: '2026-06-06',
    timeStart: '19:00',
    timeEnd: '21:00',
    venue: 'Benitas Café',
    city: 'Pellinki',
    address: 'Santasaarentie 162, 07370 Pellinki, Finland',
    description: {
      en: 'Troubadour evening at this idyllic archipelago café. Established 1972, a summer institution on the Pellinki islands east of Porvoo.',
      fi: 'Trubaduuri-ilta tässä idyllisessä saaristokahvilassa. Perustettu 1972, Pellingin saariston kesän klassikko Porvoon edustalla.',
    },
    website: 'https://benitascafe.fi',
    image: '/assets/images/venues/benitas-cafe.jpg',
  },
  {
    date: '2026-07-11',
    timeStart: '19:00',
    timeEnd: '21:00',
    venue: 'Hamarinranta',
    city: 'Porvoo',
    address: 'Hamarintie 1, 06100 Porvoo, Finland',
    description: {
      en: 'Seaside terrace gig at Hamarinranta (Hamarin SEO), a year-round beach restaurant with a marina and sea-facing terrace in Hamari village, just west of central Porvoo.',
      fi: 'Merellinen terassikeikka Hamarinrannassa (Hamarin SEO), ympärivuotinen rantaravintola vierasvenesataman kupeessa, Hamarin kylässä aivan Porvoon keskustan tuntumassa.',
    },
    website: 'https://hamarinranta.fi',
    image: '/assets/images/venues/hamarinranta.jpg',
  },
  {
    date: '2026-08-15',
    timeStart: '15:00',
    timeEnd: '18:00',
    venue: 'Private Booking',
    city: 'Helsinki',
    address: 'Private venue',
    description: {
      en: 'An exclusive private performance for an intimate summer gathering.',
      fi: 'Eksklusiivinen yksityiskeikka pienimuotoiseen kesäjuhlaan.',
    },
    image: '/assets/images/venues/private-booking.jpg',
    isPrivate: true,
  },
];

export function getLocalizedGigs(locale: Locale): LocalizedGig[] {
  return gigs.map((gig) => {
    const d = new Date(gig.date);
    return {
      date: gig.date,
      day: DAY_ABBR[locale][d.getUTCDay()] || '',
      dayNum: String(d.getUTCDate()).padStart(2, '0'),
      month: MONTH_ABBR[locale][d.getUTCMonth()] || '',
      year: String(d.getUTCFullYear()),
      timeStart: gig.timeStart,
      timeEnd: gig.timeEnd,
      venue: gig.venue,
      city: gig.city,
      address: gig.address,
      description: gig.description[locale],
      website: gig.website,
      image: gig.image,
      isPrivate: gig.isPrivate,
    };
  });
}
