import {useMemo, useState} from 'react';

import type {MenuCategory, MenuItem} from '../data';

import {PizzaCard} from './PizzaCard';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from './ui/select';
import {Tabs, TabsContent, TabsList, TabsTrigger} from './ui/tabs';

interface MenuSectionProps {
  menuItems: MenuItem[];
  categories: MenuCategory[];
}

export function MenuSection({menuItems, categories}: MenuSectionProps) {
  // Default to first category or 'pizza'
  const [activeTab, setActiveTab] = useState(categories.length > 0 ? String(categories[0].id) : 'pizza');

  // Group menu items by category
  const itemsByCategory = useMemo(() => {
    const grouped: Record<string, MenuItem[]> = {};

    menuItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    return grouped;
  }, [menuItems]);

  // Create menu options from categories
  const menuOptions = categories.map(cat => ({
    value: String(cat.id),
    label: `${cat.category} (${itemsByCategory[String(cat.id)]?.length || 0})`,
  }));

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
          <TabsList
            className="hidden md:flex md:grid w-full mb-8 bg-white border border-amber-200 gap-2 md:gap-0 p-2 md:p-1"
            style={{gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))`}}
          >
            {categories.map(cat => (
              <TabsTrigger
                key={cat.id}
                value={String(cat.id)}
                className="data-[state=active]:bg-amber-700 data-[state=active]:text-white"
              >
                {cat.category} ({itemsByCategory[String(cat.id)]?.length || 0})
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => {
            const categoryItems = itemsByCategory[String(cat.id)] || [];

            return (
              <TabsContent key={cat.id} value={String(cat.id)} className="mt-4 md:mt-8">
                <div className="md:bg-transparent md:p-0 md:rounded-none p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryItems.map(item => (
                      <PizzaCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                        categoryName={item.categoryName}
                        smallPrice={item.smallPrice}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
