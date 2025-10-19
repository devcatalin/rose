import {AboutSection} from './components/AboutSection';
import {BookingSection} from './components/BookingSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {MenuSection} from './components/MenuSection';
import {useDirectusCategories, useDirectusDetails, useDirectusMenuItems, useDirectusOffers} from './hooks';

export default function App() {
  const {data: details, loading: detailsLoading} = useDirectusDetails();
  const {data: menuItems, loading: menuLoading} = useDirectusMenuItems();
  const {data: offers, loading: offersLoading} = useDirectusOffers();
  const {data: categories, loading: categoriesLoading} = useDirectusCategories();

  const loading = detailsLoading || menuLoading || offersLoading || categoriesLoading;

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">PG</span>
          </div>
          <p className="text-amber-900 text-lg">Se încarcă...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header promotions={offers} />

      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-36">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-amber-900 leading-tight transition-all duration-300 hover:scale-105 flex flex-col">
                {details?.title ? (
                  details.title.split('\n').map((line, i) => (
                    <span key={i} className={i === 1 ? 'text-red-600' : ''}>
                      {line}
                    </span>
                  ))
                ) : (
                  <>
                    <span>Cea mai bună pizza</span>
                    <span className="text-red-600">din Chișoda</span>
                  </>
                )}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed transition-all duration-300 hover:text-gray-600">
                {details?.about ||
                  'Descoperă gustul autentic al Italiei în fiecare înghițitură. Pizza tradițională, paste delicioase și servicii de catering pentru toate evenimentele tale speciale.'}
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

      <MenuSection menuItems={menuItems} categories={categories} />
      <AboutSection restaurantImage="https://images.unsplash.com/photo-1730020596764-2a51086abd49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBwaXp6YSUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgwMTI1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      <BookingSection phoneNumber={details?.phone_number} />
      <Footer schedule={details?.schedule} phoneNumber={details?.phone_number} />
    </div>
  );
}
