// Static data for "Despre Noi" (About) section
// This data is kept as reference for migrating to Directus
// Website now uses data from Directus CMS - hortensia_about collection

export interface AboutCard {
  icon: string; // Material Symbols icon name from Directus icon picker
  title: string;
  description: string;
}

// Reference data - add these to Directus hortensia_about collection
// Use Directus icon picker to select any Material Symbols icon
// Icons are rendered using Material Symbols from Google's CDN
export const aboutCardsReference: AboutCard[] = [
  {
    icon: 'ecg_heart', // or 'favorite'
    title: 'Pasiune și Dedicare',
    description: 'Fiecare aranjament este realizat cu dragoste și atenție la detalii',
  },
  {
    icon: 'local_florist', // or 'yard'
    title: 'Flori Proaspete',
    description: 'Aprovizionare zilnică cu cele mai proaspete și frumoase flori',
  },
  {
    icon: 'local_shipping', // or 'delivery_dining'
    title: 'Livrare Rapidă',
    description: 'Livrăm în toată București cu promptitudine și grijă',
  },
  {
    icon: 'star', // or 'grade'
    title: 'Calitate Premium',
    description: 'Folosim doar materiale de cea mai înaltă calitate',
  },
  {
    icon: 'workspace_premium', // or 'emoji_events', 'military_tech'
    title: 'Experiență',
    description: 'Echipă de floristi cu experiență și creativitate',
  },
  {
    icon: 'schedule', // or 'access_time', 'watch_later'
    title: 'Serviciu La Timp',
    description: 'Respectăm toate termenele și ne adaptăm urgent',
  },
  {
    icon: 'shield', // or 'verified_user', 'security'
    title: 'Garanție Calitate',
    description: 'Oferim garanție pentru toate aranjamentele noastre',
  },
  {
    icon: 'groups', // or 'people', 'group'
    title: 'Echipă Profesionistă',
    description: 'Floristi cu experiență internațională și pasiune autentică',
  },
];
