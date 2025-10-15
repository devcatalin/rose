import {AboutSection} from './components/AboutSection';
import {BookingSection} from './components/BookingSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {MenuSection} from './components/MenuSection';

// Mock data for promotions (customizable by restaurant)
const promotions = [
  {
    id: '1',
    title: '🍕 OFERTĂ SPECIALĂ!',
    description: '2 pizza la prețul unei + băutură gratis',
    validUntil: '30 septembrie 2024',
  },
  {
    id: '2',
    title: '🎉 Pachet Familie',
    description: '4 pizza + 2L Coca Cola - doar 89 RON',
    validUntil: '15 octombrie 2024',
  },
];

// Complete menu data with all pizzas, pastas, desserts, and extras
const menuItems = [
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

// Extra items transformed to work with PizzaCard component
const extraItems = [
  {
    id: '37',
    name: 'Topping Extra',
    ingredients: ['mozzarella extra', 'mezeluri extra'],
    price: 7,
    portion: '100g',
    image:
      'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3p6YXJlbGxhJTIwY2hlZXNlJTIwcGl6emElMjB0b3BwaW5nfGVufDF8fHx8MTc1ODEwMDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '38',
    name: 'Băuturi Răcoritoare',
    ingredients: ['Coca-Cola', 'Pepsi', 'Sprite', 'Fanta'],
    price: 13,
    portion: '0.5L',
    image:
      'https://images.unsplash.com/photo-1741519425149-e353fce02897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGRyaW5rcyUyMGJldmVyYWdlfGVufDF8fHx8MTc1ODEwMDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '39',
    name: 'Doză Băuturi',
    ingredients: ['Coca-Cola', 'Pepsi', 'Sprite', 'Fanta'],
    price: 11,
    portion: '330ml',
    image:
      'https://images.unsplash.com/photo-1741519425149-e353fce02897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGRyaW5rcyUyMGJldmVyYWdlfGVufDF8fHx8MTc1ODEwMDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '40',
    name: 'Sticlă 2L Băuturi',
    ingredients: ['Coca-Cola', 'Pepsi', 'Sprite', 'Fanta'],
    price: 21,
    portion: '2L',
    image:
      'https://images.unsplash.com/photo-1741519425149-e353fce02897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NhJTIwY29sYSUyMGRyaW5rcyUyMGJldmVyYWdlfGVufDF8fHx8MTc1ODEwMDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '41',
    name: 'Ketchup Dulce/Iute',
    ingredients: ['ketchup dulce', 'ketchup iute', 'condimente'],
    price: 6,
    portion: '70g',
    image:
      'https://images.unsplash.com/photo-1638697586690-37f66f05083a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXRjaHVwJTIwc2F1Y2UlMjBjb25kaW1lbnR8ZW58MXx8fHwxNzU4MTAwODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '42',
    name: 'Sos Alb cu Usturoi',
    ingredients: ['maioneză', 'usturoi', 'ierburi', 'lămâie'],
    price: 6,
    portion: '70g',
    image:
      'https://images.unsplash.com/photo-1641905777022-a2f31c030af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJsaWMlMjBhaW9saSUyMHdoaXRlJTIwc2F1Y2V8ZW58MXx8fHwxNzU4MTAwODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '43',
    name: 'Sos Picant cu Chilli',
    ingredients: ['chilli', 'ardei iute', 'condimente', 'maioneză'],
    price: 6,
    portion: '70g',
    image:
      'https://images.unsplash.com/photo-1566055894390-94b7eb26e3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljeSUyMGNoaWxpJTIwaG90JTIwc2F1Y2V8ZW58MXx8fHwxNzU4MTAwODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
  {
    id: '44',
    name: 'Ambalaj',
    ingredients: ['cutie pizza', 'protecție transport', 'eco-friendly'],
    price: 3,
    image:
      'https://images.unsplash.com/photo-1659353739940-b94a4801920b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGRlbGl2ZXJ5JTIwYm94JTIwcGFja2FnaW5nfGVufDF8fHx8MTc1ODEwMDg4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'extra' as const,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header promotions={promotions} />

      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-36">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 leading-tight transition-all duration-300 hover:scale-105 flex flex-col">
                <span>Cea mai bună pizza</span>
                <span className="text-red-600">din Chișoda</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed transition-all duration-300 hover:text-gray-600">
                Descoperă gustul autentic al Italiei în fiecare înghițitură. Pizza tradițională, paste delicioase și
                servicii de catering pentru toate evenimentele tale speciale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 w-fit sm:w-auto text-center mx-auto sm:mx-0"
                >
                  Vezi Meniul
                </button>
              </div>
            </div>

            {/* Right Content - Pizza Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg md:max-w-xl group">
                {/* Main pizza image with hover effects */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjBwaXp6YSUyMG1hcmdoZXJpdGElMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc1ODAxOTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Delicious Pizza Margherita"
                    className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl cursor-pointer"
                  />

                  {/* Hover overlay with message */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl flex items-center justify-center">
                    <div className="text-white text-2xl font-bold transform scale-75 group-hover:scale-100 transition-all duration-300">
                      Mmm... delicioasă!
                    </div>
                  </div>
                </div>

                {/* Subtle decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full opacity-60 animate-pulse"></div>
                <div
                  className="absolute top-1/4 -left-4 w-4 h-4 bg-red-400 rounded-full opacity-50 animate-pulse"
                  style={{animationDelay: '1s'}}
                ></div>
                <div
                  className="absolute -bottom-2 right-1/4 w-5 h-5 bg-orange-400 rounded-full opacity-40 animate-pulse"
                  style={{animationDelay: '2s'}}
                ></div>

                {/* Steam effect */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    <div
                      className="w-1 h-8 bg-white opacity-40 rounded-full animate-pulse"
                      style={{animationDelay: '0s'}}
                    ></div>
                    <div
                      className="w-1 h-6 bg-white opacity-30 rounded-full animate-pulse"
                      style={{animationDelay: '0.5s'}}
                    ></div>
                    <div
                      className="w-1 h-10 bg-white opacity-50 rounded-full animate-pulse"
                      style={{animationDelay: '1s'}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MenuSection menuItems={[...menuItems, ...extraItems]} />
      <AboutSection restaurantImage="https://images.unsplash.com/photo-1730020596764-2a51086abd49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgwMTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      <BookingSection />
      <Footer />
    </div>
  );
}
