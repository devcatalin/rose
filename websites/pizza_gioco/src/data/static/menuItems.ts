import type {MenuItem} from './types';

export const menuItems: MenuItem[] = [
  // PIZZA MENU - Complete authentic Pizza Gioco menu
  {
    id: '1',
    name: 'Pizza Margherita',
    ingredients: ['sos de roșii', 'mozzarella', 'oregano'],
    price: 35, // Mare
    smallPrice: 33, // Mica
    image:
      'https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGJhc2lsfGVufDF8fHx8MTc1ODAyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '2',
    name: 'Pizza Funghi',
    ingredients: ['sos de roșii', 'mozzarella', 'ciuperci proaspete', 'oregano'],
    price: 37,
    smallPrice: 35,
    image:
      'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBpenphJTIwZnVuZ2hpfGVufDF8fHx8MTc1ODAyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '3',
    name: 'Pizza Prosciutto',
    ingredients: ['sos de roșii', 'mozzarella', 'sunca Praga', 'oregano'],
    price: 38,
    smallPrice: 36,
    image:
      'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zY2l1dHRvJTIwcGl6emElMjBoYW18ZW58MXx8fHwxNzU4MDIwNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '4',
    name: 'Pizza Prosciutto Crudo',
    ingredients: ['sos de roșii', 'mozzarella', 'prosciutto crudo', 'rosie', 'oregano'],
    price: 43,
    smallPrice: 41,
    image:
      'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zY2l1dHRvJTIwcGl6emElMjBoYW18ZW58MXx8fHwxNzU4MDIwNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '5',
    name: 'Pizza Funghi Salami',
    ingredients: ['sos de roșii', 'mozzarella', 'salam crud uscat', 'ciuperci proaspete', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBpenphJTIwZnVuZ2hpfGVufDF8fHx8MTc1ODAyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '6',
    name: 'Pizza Prosciutto Funghi',
    ingredients: ['sos de roșii', 'mozzarella', 'sunca Praga', 'ciuperci proaspete', 'oregano'],
    price: 39,
    smallPrice: 37,
    image:
      'https://images.unsplash.com/photo-1717883235373-ef10b2a745a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBpenphJTIwZnVuZ2hpfGVufDF8fHx8MTc1ODAyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '7',
    name: 'Pizza Romana',
    ingredients: ['sos de roșii', 'mozzarella', 'sunculita', 'bacon', 'telemea', 'ceapa rosie', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '8',
    name: 'Pizza Quattro Stagioni',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'sunculita',
      'salam crud uscat',
      'carnati',
      'masline',
      'ciuperci proaspete',
      'rosie',
      'oregano',
    ],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '9',
    name: 'Pizza Capriciosa',
    ingredients: ['sos de roșii', 'mozzarella', 'sunca Praga', 'ciuperci proaspete', 'anghinare', 'masline', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '10',
    name: 'Pizza Calzone',
    ingredients: ['sos de roșii', 'bacon', 'salam crud uscat', 'ciuperci', 'mozzarela', 'masline', 'usturoi'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1610913948701-42071d6a1df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWx6b25lJTIwZm9sZGVkJTIwcGl6emF8ZW58MXx8fHwxNzU4MDk4MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '11',
    name: 'Pizza Chicken',
    ingredients: ['sos de roșii', 'mozzarella', 'piept de pui', 'sunca Praga', 'rosii', 'masline', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1750190624221-fdbd17f40eda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwcGl6emElMjB0b3BwaW5nc3xlbnwxfHx8fDE3NTgwMjA1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '12',
    name: 'Pizza Paesana',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'sunca Praga',
      'sunculita',
      'ardei',
      'ceapa rosie',
      'porumb',
      'oregano',
    ],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1717250180588-8737e18314d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTgwMTI1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '13',
    name: 'Pizza Diavolo',
    ingredients: [
      'chilli',
      'mozzarella',
      'salam crud uscat picant',
      'ceapa rosie',
      'ciuperci proaspete',
      'chilli',
      'oregano',
    ],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1716745142127-89c75a65aeef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGRpYXZvbG8lMjBwaXp6YSUyMHBlcHBlcm9uaXxlbnwxfHx8fDE3NTgwOTgxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '14',
    name: 'Pizza Vegetariana',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'ciuperci proaspete',
      'masline',
      'ardei',
      'porumb',
      'rosii',
      'ceapa rosie',
      'oregano',
    ],
    price: 39,
    smallPrice: 37,
    image:
      'https://images.unsplash.com/photo-1717250180588-8737e18314d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwcGl6emElMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTgwMTI1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '15',
    name: 'Pizza Haway',
    ingredients: ['sos de roșii', 'mozzarella', 'sunca Praga', 'ananas', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1671572579989-fa11cbd86eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXdhaWlhbiUyMHBpenphJTIwcGluZWFwcGxlJTIwaGFtfGVufDF8fHx8MTc1ODAyMDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '16',
    name: 'Pizza Banateana',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'bacon',
      'sunculita',
      'ou-batut',
      'masline',
      'patrunjel',
      'ciuperci proaspete',
      'rosie',
      'oregano',
    ],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '17',
    name: 'Pizza Chisozeana',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'carnati',
      'salam crud uscat',
      'telemea',
      'ou batut',
      'masline',
      'ciuperci proaspete',
      'ceapa rosie',
      'rosie',
      'oregano',
    ],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '18',
    name: 'Pizza Gioco',
    ingredients: [
      'sos de roșii',
      'prosciutto crudo',
      'bacon',
      'salam crud uscat',
      'parmezan',
      'ceapa rosie',
      'mozzarella',
      'rosie',
      'oregano',
    ],
    price: 42,
    smallPrice: 40,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTgwOTgxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
    isSignature: true,
  },
  {
    id: '19',
    name: 'Pizza Speciala',
    ingredients: ['sos de roșii', 'mozzarella', 'ton', 'sunca Praga', 'telemea', 'rosii', 'porumb', 'oregano'],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1747709779727-b945ae8cb090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b25uYSUyMHR1bmElMjBwaXp6YSUyMG9saXZlc3xlbnwxfHx8fDE3NTgwOTgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '20',
    name: 'Pizza Tonno',
    ingredients: ['sos de roșii', 'mozzarella', 'ton', 'ceapa rosie', 'lamaie', 'masline', 'oregano'],
    price: 40,
    smallPrice: 38,
    image:
      'https://images.unsplash.com/photo-1747709779727-b945ae8cb090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b25uYSUyMHR1bmElMjBwaXp6YSUyMG9saXZlc3xlbnwxfHx8fDE3NTgwOTgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '21',
    name: 'Pizza Quatro Formaggi',
    ingredients: ['sos de roșii', 'mozzarella', 'cascaval', 'telemea', 'parmezan', 'oregano'],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1748955309347-a54c340e38b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwY2hlZXNlJTIwcGl6emElMjBxdWF0dHJvJTIwZm9ybWFnZ2l8ZW58MXx8fHwxNzU4MDIwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '22',
    name: 'Pizza Salami',
    ingredients: ['sos de roșii', 'salam crud uscat', 'mozzarella'],
    price: 39,
    smallPrice: 37,
    image:
      'https://images.unsplash.com/photo-1708649360970-1739eb95204b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhbWklMjBwaXp6YSUyMHBlcHBlcm9uaXxlbnwxfHx8fDE3NTgwOTg0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '23',
    name: 'Pizza Focaccia',
    ingredients: ['aluat de pizza', 'ulei de măsline', 'busuioc', 'sare'],
    price: 27,
    image:
      'https://images.unsplash.com/photo-1625938144755-652e08e359b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2NhY2NpYSUyMGJyZWFkJTIwb2xpdmUlMjBvaWwlMjBiYXNpbHxlbnwxfHx8fDE3NTgwOTg0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },
  {
    id: '24',
    name: 'Pizza Carbonara',
    ingredients: [
      'sos de roșii',
      'mozzarella',
      'piept de pui',
      'bacon',
      'ciuperci proaspete',
      'ardei',
      'ou-batut',
      'oregano',
    ],
    price: 41,
    smallPrice: 39,
    image:
      'https://images.unsplash.com/photo-1602874909256-16469a2ff8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib25hcmElMjBwaXp6YSUyMGJhY29uJTIwZWdnfGVufDF8fHx8MTc1ODAyMDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pizza' as const,
  },

  // PASTA MENU
  {
    id: '25',
    name: 'Spaghetti Carbonara',
    ingredients: ['smantana', 'parmezan', 'bacon', 'ou', 'busuioc'],
    price: 32,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1651585594107-859f80b4ca3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjBjYXJib25hcmElMjBwYXN0YXxlbnwxfHx8fDE3NTc5MzAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '26',
    name: 'Spaghetti Formaggi',
    ingredients: ['mozzarella', 'cascaval', 'parmezan', 'busuioc', 'telemea'],
    price: 32,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1590912710024-6d51a6771abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBwYXN0YSUyMGZvdXIlMjBjaGVlc2V8ZW58MXx8fHwxNzU4MDIwNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '27',
    name: 'Spaghetti cu Ton',
    ingredients: ['sos de rosii', 'ton', 'piper', 'usturoi', 'rosii', 'patrunjel'],
    price: 32,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1747984383659-7dc99cf1d11e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjB0dW5hJTIwcGFzdGF8ZW58MXx8fHwxNzU4MDIwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '28',
    name: 'Spaghetti Milaneze',
    ingredients: ['smantana', 'sunca de Praga', 'parmezan', 'lamaie', 'busuioc', 'ciuperci', 'patrunjel'],
    price: 32,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1651585594107-859f80b4ca3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjBjYXJib25hcmElMjBwYXN0YXxlbnwxfHx8fDE3NTc5MzAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '29',
    name: 'Spaghetti cu sos de ciuperci',
    ingredients: ['smantana', 'ciuperci', 'parmezan', 'lamaie', 'busuioc', 'usturoi'],
    price: 31,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1648694693003-57aaad836f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHBhc3RhJTIwY3JlYW15fGVufDF8fHx8MTc1ODAyMDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '30',
    name: 'Spaghetti Siciliene',
    ingredients: ['sos de rosii', 'parmezan', 'usturoi', 'busuioc', 'patrunjel', 'rosii'],
    price: 31,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1747984383659-7dc99cf1d11e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFnaGV0dGklMjB0dW5hJTIwcGFzdGF8ZW58MXx8fHwxNzU4MDIwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '31',
    name: 'Farfalle Chicken',
    ingredients: ['smantana', 'parmezan', 'piept de pui', 'ciuperci', 'ceapa', 'usturoi', 'patrunjel'],
    price: 34,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1601614478692-7efc66444695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJmYWxsZSUyMHBhc3RhJTIwY2hpY2tlbnxlbnwxfHx8fDE3NTgwMjA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },
  {
    id: '32',
    name: 'Farfalle Gioco',
    ingredients: ['smantana', 'parmezan', 'ciuperci', 'usturoi', 'kaiser'],
    price: 34,
    portion: '450g',
    image:
      'https://images.unsplash.com/photo-1601614478692-7efc66444695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJmYWxsZSUyMHBhc3RhJTIwY2hpY2tlbnxlbnwxfHx8fDE3NTgwMjA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'pasta' as const,
  },

  // DESSERTS
  {
    id: '33',
    name: 'Clătite cu gem',
    ingredients: ['clătite proaspete', 'gem de casă', 'zahăr pudră'],
    price: 16,
    image:
      'https://images.unsplash.com/photo-1637036124732-cb0fab13bb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGphbSUyMGNyZXBlfGVufDF8fHx8MTc1ODAyMDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'dessert' as const,
  },
  {
    id: '34',
    name: 'Clătite cu Nutella',
    ingredients: ['clătite proaspete', 'Nutella', 'zahăr pudră', 'fructe proaspete'],
    price: 18,
    image:
      'https://images.unsplash.com/photo-1695518069327-60d7601794a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRlbGxhJTIwY3JlcGVzJTIwY2hvY29sYXRlfGVufDF8fHx8MTc1ODAyMDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'dessert' as const,
  },

  // CATERING
  {
    id: '35',
    name: 'Pachet Catering Mic',
    ingredients: ['3 pizza mari', '2 paste', 'salată Caesar', 'băuturi', 'desert'],
    price: 280,
    image:
      'https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBmcmVzaCUyMGJhc2lsfGVufDF8fHx8MTc1ODAyMDQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'special' as const,
  },
  {
    id: '36',
    name: 'Pachet Catering Mare',
    ingredients: ['6 pizza mari', '4 paste', '2 salate', 'antipasto', 'băuturi', 'desert'],
    price: 520,
    image:
      'https://images.unsplash.com/photo-1670275559226-cacd73cdfc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWF0dHJvJTIwc3RhZ2lvbmklMjBwaXp6YXxlbnwxfHx8fDE3NTc5NTA3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'special' as const,
  },

  // POMENI - ORGANIZARE POMENI
  {
    id: '47',
    name: 'Masa Tradițională de Pomenire',
    ingredients: [
      'preparate tradiționale românești',
      'ciorbă de legume',
      'tocană',
      'salată de icre',
      'cozonac',
      'colivă',
      'vin fiert',
      'țuică',
    ],
    price: 'contactați-ne la telefon pentru mai multe detalii',
    image:
      'https://images.unsplash.com/photo-1627605235961-267bdb4b8c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHJvbWFuaWFuJTIwZm9vZCUyMHRhYmxlJTIwZmVhc3QlMjBtZW1vcmlhbHxlbnwxfHx8fDE3NTg3ODg5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'pomeni' as const,
  },
];
