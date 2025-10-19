import type {MenuItem} from './types';

export const extraItems: MenuItem[] = [
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
