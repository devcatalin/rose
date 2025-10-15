import {useState} from 'react';

import {PizzaCard} from './PizzaCard';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from './ui/select';
import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs';

interface MenuItem {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  category: 'pizza' | 'pasta' | 'special' | 'dessert' | 'extra' | 'pomeni';
  isPromotion?: boolean;
  originalPrice?: number;
  smallPrice?: number;
  portion?: string;
  isSignature?: boolean;
}

interface MenuSectionProps {
  menuItems: MenuItem[];
}

export function MenuSection({menuItems}: MenuSectionProps) {
  const [activeTab, setActiveTab] = useState('pizza');

  const pizzas = menuItems.filter(item => item.category === 'pizza');
  const pastas = menuItems.filter(item => item.category === 'pasta');
  const desserts = menuItems.filter(item => item.category === 'dessert');
  const specials = menuItems.filter(item => item.category === 'special');
  const extras = menuItems.filter(item => item.category === 'extra');
  const pomeni = menuItems.filter(item => item.category === 'pomeni');

  const menuOptions = [
    {value: 'pizza', label: `Pizza (${pizzas.length})`},
    {value: 'pasta', label: `Paste (${pastas.length})`},
    {value: 'dessert', label: `Deserturi (${desserts.length})`},
    {value: 'extra', label: `Extra & Băuturi (${extras.length})`},
    {value: 'special', label: `Catering (${specials.length})`},
    {value: 'pomeni', label: `Organizare Pomeni (${pomeni.length})`},
  ];

  return (
    <section id="menu" className="py-16" style={{backgroundColor: '#FFFBEB'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Meniul Nostru</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descoperă pizza noastră artizanală preparată cu ingrediente proaspete și rețete tradiționale italiene.
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-6 px-6">
          <Select value={activeTab} onValueChange={setActiveTab}>
            <SelectTrigger className="w-full bg-white border border-amber-200 text-amber-900">
              <SelectValue placeholder="Selectează categoria" />
            </SelectTrigger>
            <SelectContent>
              {menuOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden md:flex md:grid w-full md:grid-cols-6 mb-8 bg-white border border-amber-200 gap-2 md:gap-0 p-2 md:p-1">
            <TabsTrigger value="pizza" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Pizza ({pizzas.length})
            </TabsTrigger>
            <TabsTrigger value="pasta" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Paste ({pastas.length})
            </TabsTrigger>
            <TabsTrigger value="dessert" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Deserturi ({desserts.length})
            </TabsTrigger>
            <TabsTrigger value="extra" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Extra & Băuturi ({extras.length})
            </TabsTrigger>
            <TabsTrigger value="special" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Catering ({specials.length})
            </TabsTrigger>
            <TabsTrigger value="pomeni" className="data-[state=active]:bg-amber-700 data-[state=active]:text-white">
              Organizare Pomeni ({pomeni.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pizza" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pizzas.map(pizza => (
                  <PizzaCard
                    key={pizza.id}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    image={pizza.image}
                    category={pizza.category}
                    isPromotion={pizza.isPromotion}
                    originalPrice={pizza.originalPrice}
                    smallPrice={pizza.smallPrice}
                    isSignature={pizza.isSignature}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pasta" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none bg-transparent p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastas.map(pasta => (
                  <PizzaCard
                    key={pasta.id}
                    name={pasta.name}
                    ingredients={pasta.ingredients}
                    price={pasta.price}
                    image={pasta.image}
                    category={pasta.category}
                    isPromotion={pasta.isPromotion}
                    originalPrice={pasta.originalPrice}
                    portion={pasta.portion}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dessert" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none bg-transparent p-6 rounded-lg">
              <div className="mb-8 p-6 bg-red-50 rounded-lg border border-red-200 text-center md:text-left">
                <h3 className="text-xl font-semibold text-red-800 mb-4">Deserturi de Casă</h3>
                <p className="text-red-700">
                  Încheie masa cu o notă dulce! Clătitele noastre proaspete sunt preparate zilnic cu ingrediente
                  naturale și servite calde pentru o experiență culinară completă.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {desserts.map(dessert => (
                  <PizzaCard
                    key={dessert.id}
                    name={dessert.name}
                    ingredients={dessert.ingredients}
                    price={dessert.price}
                    image={dessert.image}
                    category={dessert.category}
                    isPromotion={dessert.isPromotion}
                    originalPrice={dessert.originalPrice}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extra" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none bg-transparent p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {extras.map(extra => (
                  <PizzaCard
                    key={extra.id}
                    name={extra.name}
                    ingredients={extra.ingredients}
                    price={extra.price}
                    image={extra.image}
                    category={extra.category}
                    isPromotion={extra.isPromotion}
                    originalPrice={extra.originalPrice}
                    portion={extra.portion}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="special" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none bg-transparent p-6 rounded-lg">
              <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200 text-center md:text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Servicii de Catering</h3>
                <p className="text-green-700">
                  Organizezi un eveniment special? Oferim servicii complete de catering pentru toate tipurile de
                  evenimente - petreceri private, evenimente corporative, nunți și multe altele. Pizza noastră proaspătă
                  și pastele delicioase vor face ca evenimentul tău să fie de neuitat!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specials.map(special => (
                  <PizzaCard
                    key={special.id}
                    name={special.name}
                    ingredients={special.ingredients}
                    price={special.price}
                    image={special.image}
                    category={special.category}
                    isPromotion={special.isPromotion}
                    originalPrice={special.originalPrice}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pomeni" className="mt-4 md:mt-8">
            <div className="md:bg-transparent md:p-0 md:rounded-none bg-transparent p-6 rounded-lg">
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200 text-center md:text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Organizare Pomeni</h3>
                <p className="text-blue-700">
                  Oferim servicii complete pentru organizarea pomenirii celor dragi. Meniuri tradiționale și servicii de
                  catering adaptate pentru aceste momente speciale, cu respect și înțelegere pentru tradițiile familiei
                  dumneavoastră.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pomeni.map(pomen => (
                  <PizzaCard
                    key={pomen.id}
                    name={pomen.name}
                    ingredients={pomen.ingredients}
                    price={pomen.price}
                    image={pomen.image}
                    category={pomen.category}
                    isPromotion={pomen.isPromotion}
                    originalPrice={pomen.originalPrice}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
