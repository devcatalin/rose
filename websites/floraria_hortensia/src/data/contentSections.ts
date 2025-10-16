import bridesmaidsImage from '@/assets/bridesmaidsImage.png';
import corsagesImage from '@/assets/corsagesImage.png';
import newBridalBouquet from '@/assets/newBridalBouquet.png';
import vintageBouquet from '@/assets/vintageBouquet.png';

import type {ContentSection} from './types';

export const contentSections: ContentSection[] = [
  {
    id: 'despre',
    title: 'Despre Florăria Hortensia',
    description:
      'Din februarie 2024, Florăria Hortensia aduce bucurie și culoare în viețile oamenilor prin aranjamente florale unice, realizate cu pasiune și dedicare.',
    image: {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MTE4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Interior elegant al Florăriei Hortensia',
    },
    bulletPoints: [
      {text: 'Flori proaspete zilnic'},
      {text: 'Aranjamente personalizate'},
      {text: 'Livrare în toată București'},
      {text: 'Experiență și profesionalism'},
    ],
    buttonText: 'Vezi mai multe poze',
    imagePosition: 'left',
    backgroundGradient: 'bg-white',
  },
  {
    id: 'buchete',
    title: 'Buchete Personalizate',
    description:
      'Oferim aranjamente florale pentru evenimente, buchete personalizate cu felicitare handmade gratuită la fiecare comandă.',
    image: {
      src: bridesmaidsImage,
      alt: 'Buchete clasice cu trandafiri roz',
    },
    bulletPoints: [
      {text: 'Buchete clasice cu trandafiri'},
      {text: 'Aranjamente pastel moderne'},
      {text: 'Combinații elegante și sofisticate'},
      {text: 'Felicitare handmade gratuită'},
    ],
    buttonText: 'Vezi mai multe poze',
    buttonHref: 'https://wa.me/40123456789',
    imagePosition: 'right',
    backgroundGradient: 'bg-white',
  },
  {
    id: 'aranjamente',
    title: 'Aranjamente Florale',
    description: 'Creații florale personalizate pentru a aduce frumusețe în fiecare colț al vieții tale.',
    image: {
      src: corsagesImage,
      alt: 'Aranjamente florale elegante',
    },
    bulletPoints: [
      {text: 'Aranjamente în cutii elegante'},
      {text: 'Combinații rustice în coșulețe'},
      {text: 'Design personalizat'},
      {text: 'Materiale naturale premium'},
    ],
    buttonText: 'Vezi mai multe poze',
    buttonHref: 'https://wa.me/40123456789',
    imagePosition: 'left',
    backgroundGradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50',
  },
  {
    id: 'mireasa',
    title: 'Buchete de Mireasă',
    description: 'Creăm buchete de mireasă unice și elegante, perfecte pentru cea mai importantă zi din viața ta.',
    image: {
      src: newBridalBouquet,
      alt: 'Buchet de mireasă elegant',
    },
    bulletPoints: [
      {text: 'Design personalizat pentru nuntă'},
      {text: 'Flori selectate premium'},
      {text: 'Adaptat stilului și culorilor'},
      {text: 'Consultanță specializată'},
    ],
    buttonText: 'Vezi mai multe poze',
    buttonHref: 'https://wa.me/40123456789',
    imagePosition: 'right',
    backgroundGradient: 'bg-white',
  },
  {
    id: 'evenimente',
    title: 'Aranjamente Evenimente',
    description: 'Transformăm fiecare eveniment într-o experiență memorabilă cu decorațiuni florale spectaculoase.',
    image: {
      src: vintageBouquet,
      alt: 'Aranjament elegant cu trandafiri pe scaun vintage',
    },
    bulletPoints: [
      {text: 'Decorațiuni complete pentru nunți'},
      {text: 'Aranjamente delicate pentru botezuri'},
      {text: 'Flori vesele pentru zile de naștere'},
      {text: 'Evenimente corporate profesionale'},
    ],
    buttonText: 'Vezi mai multe poze',
    buttonHref: 'https://wa.me/40123456789',
    imagePosition: 'left',
    backgroundGradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50',
  },
  {
    id: 'funerare',
    title: 'Aranjamente Funerare',
    description: 'Oferim aranjamente funerare realizate cu respect și grijă, pentru a omagia memoria celor dragi.',
    image: {
      src: 'https://images.unsplash.com/photo-1706282170042-a4229c2f6141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwZmxvd2VycyUyMHdoaXRlJTIwcm9zZXN8ZW58MXx8fHwxNzU4MTE4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Aranjamente funerare respectuoase cu trandafiri albi',
    },
    note: {
      text: 'Nu oferim coroane funerare, ci doar aranjamente florale delicate și respectuoase.',
      isStrong: true,
    },
    bulletPoints: [
      {text: 'Aranjamente în vaze elegante'},
      {text: 'Buchete de condoleanțe'},
      {text: 'Aranjamente pentru case de marcat'},
      {text: 'Livrare discretă și la timp'},
    ],
    buttonText: 'Vezi mai multe poze',
    imagePosition: 'right',
    backgroundGradient: 'bg-gradient-to-br from-gray-50 to-white',
  },
  {
    id: 'ingrijire-plante',
    title: 'Sfaturi pentru Îngrijirea Plantelor',
    description: 'Oferim și sfaturi pentru îngrijirea plantelor de acasă. Contactează-ne pentru consultanță gratuită!',
    image: {
      src: 'https://images.unsplash.com/photo-1724344541945-267ba492ee38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBjYXJlJTIwd2F0ZXJpbmclMjBob3VzZXBsYW50c3xlbnwxfHx8fDE3NTgxODA0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Îngrijirea plantelor de apartament',
    },
    bulletPoints: [
      {text: 'Sfaturi de udare și fertilizare'},
      {text: 'Poziționare optimă în casă'},
      {text: 'Prevenirea bolilor și dăunătorilor'},
      {text: 'Consultanță gratuită personalizată'},
    ],
    buttonText: 'Vezi mai multe poze',
    buttonHref: 'https://wa.me/40123456789',
    imagePosition: 'left',
    backgroundGradient: 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50',
  },
];
