import {useState} from 'react';

import baptismCandleArrangement from '@/assets/baptismCandleArrangement.png';
import bridesmaidsImage from '@/assets/bridesmaidsImage.png';
import colorfulBasketArrangement from '@/assets/colorfulBasketArrangement.png';
import colorfulBridalBouquet from '@/assets/colorfulBridalBouquet.png';
import corsagesImage from '@/assets/corsagesImage.png';
import elegantTableCenterpiece from '@/assets/elegantTableCenterpiece.png';
import greenRedMixedBouquet from '@/assets/greenRedMixedBouquet.png';
import heatherBoxArrangement from '@/assets/heatherBoxArrangement.png';
import mixedCarnationBouquet from '@/assets/mixedCarnationBouquet.png';
import mixedFloralBouquet from '@/assets/mixedFloralBouquet.png';
import mixedPastelBouquet from '@/assets/mixedPastelBouquet.png';
import mixedPinkPurpleBouquet from '@/assets/mixedPinkPurpleBouquet.png';
import newBridalBouquet from '@/assets/newBridalBouquet.png';
import newBurgundyCallaBouquet from '@/assets/newBurgundyCallaBouquet.png';
import newClassicBrideBouquet from '@/assets/newClassicBrideBouquet.png';
import newPastelBridalBouquet from '@/assets/newPastelBridalBouquet.png';
import pinkRosesBrandedBouquet from '@/assets/pinkRosesBrandedBouquet.png';
import pinkRosesChrysanthemumBouquet from '@/assets/pinkRosesChrysanthemumBouquet.png';
import pinkRosesRibbonBouquet from '@/assets/pinkRosesRibbonBouquet.png';
import springMixedBouquet from '@/assets/springMixedBouquet.png';
import vintageBouquet from '@/assets/vintageBouquet.png';
import whiteBaptismCandles from '@/assets/whiteBaptismCandles.png';
import whiteBridalRoses from '@/assets/whiteBridalRoses.png';
import whiteFloralBoxArrangement from '@/assets/whiteFloralBoxArrangement.png';
import whiteOrchidBridalBouquet from '@/assets/whiteOrchidBridalBouquet.png';
import whiteRibbonBouquet from '@/assets/whiteRibbonBouquet.png';
import {AboutSection} from '@/components/about-section';
import {ContactSection} from '@/components/contact-section';
import {ContentSection} from '@/components/content-section';
import {Footer} from '@/components/footer';
import {HeroSection} from '@/components/hero-section';
import {MobileCarousel} from '@/components/mobile-carousel';

import {SlideshowModal} from './components/slideshow-modal';

// Slideshow data for each section
const slideshowData = {
  despre: [
    {
      src: 'https://images.unsplash.com/photo-1742399484633-4ffe32c347ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc1ODE3NDY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Interior elegant al Florăriei Hortensia',
      description: 'Spațiul nostru elegant și primitor',
    },
    {
      src: 'https://images.unsplash.com/photo-1753982861953-9d83250dc213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yaXN0JTIwd29ya3NwYWNlJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NTgxODEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Atelier florist profesionist',
      description: 'Atelierul nostru de creație',
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MTE4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Colecția noastră de flori proaspete',
      description: 'Flori proaspete zilnic',
    },
  ],
  buchete: [
    {
      src: bridesmaidsImage,
      alt: 'Buchet romantic cu trandafiri roz',
      description: 'Buchete romantice cu trandafiri',
    },
    {
      src: pinkRosesBrandedBouquet,
      alt: 'Buchet cu trandafiri roz în ambalaj elegant Hortensia',
      description: 'Trandafiri roz cu ambalaj de marcă și panglică',
    },
    {
      src: mixedFloralBouquet,
      alt: 'Buchet mixt elegant cu crini albi și flori roz delicate',
      description: 'Combinație perfectă de crini și flori delicate',
    },
    {
      src: mixedCarnationBouquet,
      alt: 'Buchet mixt colorat cu garoafe și crizanteme în ambalaj roz',
      description: 'Aranjament colorat cu garoafe și crizanteme',
    },
    {
      src: mixedPinkPurpleBouquet,
      alt: 'Buchet mixt cu trandafiri roz, flori violete și crizanteme albe',
      description: 'Combinație vibrantă de culori roz și violet',
    },
    {
      src: pinkRosesRibbonBouquet,
      alt: 'Buchet cu trandafiri roz și floarea miresei cu panglică elegantă',
      description: 'Eleganță clasică cu trandafiri roz și accente delicate',
    },
    {
      src: greenRedMixedBouquet,
      alt: 'Buchet artistic cu flori verzi, roșii și fructe decorative',
      description: 'Aranjament unic cu nuanțe vibrante și elemente naturale',
    },
    {
      src: pinkRosesChrysanthemumBouquet,
      alt: 'Buchet vibrant cu trandafiri roz, crizanteme albe și gerbera',
      description: 'Combinație energizantă de trandafiri și crizanteme delicate',
    },
    {
      src: mixedPastelBouquet,
      alt: 'Buchet pastel mixt cu trandafiri roz, crizanteme și floarea miresei',
      description: 'Armonie pastel cu nuanțe de roz, alb și verde pale',
    },
    {
      src: springMixedBouquet,
      alt: 'Buchet de primăvară cu trandafiri coral, crizanteme violet și verdeață',
      description: 'Buchet primăvăratic cu nuanțe calde și vibrante',
    },
  ],
  aranjamente: [
    {
      src: corsagesImage,
      alt: 'Aranjament floral elegant alb',
      description: 'Aranjamente albe sofisticate',
    },
    {
      src: whiteFloralBoxArrangement,
      alt: 'Aranjament elegant cu flori albe în cutie roz pastel',
      description: 'Combinație rafinată de crizanteme și trandafiri albi cu finisaj delicat',
    },
    {
      src: heatherBoxArrangement,
      alt: 'Aranjament rustic cu iasomie albă și mov în cutie elegantă',
      description: 'Frumusețe naturală cu iasomie și accente decorative în nuanțe pastel',
    },
    {
      src: colorfulBasketArrangement,
      alt: 'Aranjament vibrant în coș împletit cu lalele și garoafe colorate',
      description: 'Bucurie primăvăratică cu flori multicolore în coș artizanal',
    },
  ],
  mireasa: [
    {
      src: newBridalBouquet,
      alt: 'Buchet de mireasă alb și roz',
      description: 'Buchete clasice de mireasă',
    },
    {
      src: whiteBridalRoses,
      alt: 'Buchet de mireasă cu trandafiri albi și frezii',
      description: 'Eleganță pură cu trandafiri albi',
    },
    {
      src: whiteRibbonBouquet,
      alt: 'Buchet de mireasă alb cu panglică elegantă',
      description: 'Design clasic cu finisaje rafinate',
    },
    {
      src: colorfulBridalBouquet,
      alt: 'Buchet de mireasă colorat cu nuanțe pastel',
      description: 'Combinații delicate de culori pastel',
    },
    {
      src: newPastelBridalBouquet,
      alt: 'Buchet de mireasă cu trandafiri și garoafe în nuanțe pastel',
      description: 'Armonie perfectă între roz, crem și alb',
    },
    {
      src: newBurgundyCallaBouquet,
      alt: 'Buchet elegant cu cale burgundy și finisaj alb',
      description: 'Sofisticare dramatică cu cale burgundy',
    },
    {
      src: newClassicBrideBouquet,
      alt: 'Mireasă elegantă cu buchet clasic alb și verde',
      description: 'Eleganță clasică pentru ziua perfectă',
    },
    {
      src: whiteOrchidBridalBouquet,
      alt: 'Mireasă cu buchet alb din orhidee și trandafiri',
      description: 'Buchet luxos cu orhidee albe și trandafiri',
    },
  ],
  evenimente: [
    {
      src: baptismCandleArrangement,
      alt: 'Lumânare de botez cu aranjament floral colorat în nuanțe pastel',
      description: 'Decorațiuni delicate pentru botez cu garoafe roz, trandafiri albi și crizanteme mov',
    },
    {
      src: whiteBaptismCandles,
      alt: 'Pereche de lumânări de botez cu aranjamente albe din orhidee și trandafiri',
      description: 'Eleganță pură cu orhidee albe, trandafiri și eucalipt pentru ceremonii speciale',
    },
    {
      src: elegantTableCenterpiece,
      alt: 'Masă elegantă de restaurant cu aranjamente florale albe ca centru de masă',
      description: 'Atmosferă sofisticată pentru evenimente cu aranjamente florale delicate și lumânări',
    },
  ],
  funerare: [
    {
      src: 'https://images.unsplash.com/photo-1706282170042-a4229c2f6141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5lcmFsJTIwZmxvd2VycyUyMHdoaXRlJTIwcm9zZXN8ZW58MXx8fHwxNzU4MTE4NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Aranjament funerar cu trandafiri albi',
      description: 'Aranjamente respectuoase',
    },
  ],
  'ingrijire-plante': [
    {
      src: 'https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGNhcmUlMjB3YXRlcmluZ3xlbnwxfHx8fDE3NTgxODEwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Îngrijirea plantelor de interior',
      description: 'Tehnici de udare corectă',
    },
    {
      src: 'https://images.unsplash.com/photo-1736477617974-85d22b27623f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBjb2xsZWN0aW9uJTIwZ3JlZW58ZW58MXx8fHwxNzU4MTgxMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Colecție de plante de interior',
      description: 'Amenajarea spațiului verde',
    },
    {
      src: 'https://images.unsplash.com/photo-1724344541945-267ba492ee38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBwbGFudHMlMjBjYXJlJTIwd2F0ZXJpbmclMjBob3VzZXBsYW50c3xlbnwxfHx8fDE3NTgxODA0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Îngrijirea zilnică a plantelor',
      description: 'Rutina de îngrijire zilnică',
    },
  ],
};

// This would typically come from a backend/CMS
const contentSections = [
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

export default function App() {
  const [currentSlideshow, setCurrentSlideshow] = useState<string | null>(null);

  const openSlideshow = (sectionId: string) => {
    setCurrentSlideshow(sectionId);
  };

  const closeSlideshow = () => {
    setCurrentSlideshow(null);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <MobileCarousel />
      {contentSections
        .filter(section => section.id !== 'despre')
        .map((section, index) => (
          <ContentSection
            key={section.id}
            {...section}
            buttonSpacing={section.id === 'funerare' ? 'normal' : 'extra'}
            onClick={section.buttonText === 'Vezi mai multe poze' ? () => openSlideshow(section.id) : undefined}
          />
        ))}
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* Slideshow Modal */}
      {currentSlideshow && (
        <SlideshowModal
          isOpen={!!currentSlideshow}
          onClose={closeSlideshow}
          images={slideshowData[currentSlideshow as keyof typeof slideshowData] || []}
          sectionTitle={contentSections.find(s => s.id === currentSlideshow)?.title || ''}
        />
      )}
    </div>
  );
}
