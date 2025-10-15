# Data Folder

This folder contains all constant data for the Pizza Gioco application, extracted from `App.tsx` for better organization
and maintainability.

## Files

### `types.ts`

TypeScript type definitions for the application data:

- `Category`: Union type for menu item categories ('pizza' | 'pasta' | 'dessert' | 'special' | 'pomeni' | 'extra')
- `Promotion`: Interface for promotional offers
- `MenuItem`: Interface for menu items with all their properties

### `promotions.ts`

Promotional offers and special deals:

- Array of `Promotion` objects
- Contains special offers like "2 pizza at the price of 1", family packages, etc.

### `menuItems.ts`

Main menu items including:

- Pizzas (24 items)
- Pasta dishes (8 items)
- Desserts (2 items)
- Catering packages (2 items)
- Pomeni (memorial) services (1 item)

Total: 47 menu items

### `extraItems.ts`

Additional items and extras:

- Extra toppings
- Beverages (sodas in various sizes)
- Sauces (ketchup, garlic sauce, chili sauce)
- Packaging

Total: 8 extra items

### `index.ts`

Central export file that re-exports all data and types for convenient importing:

```typescript
import {extraItems, menuItems, promotions} from './data';
import type {Category, MenuItem, Promotion} from './data';
```

## Usage

Import data in your components:

```typescript
import {extraItems, menuItems, promotions} from './data';
import type {MenuItem} from './data';
```

## Type Safety

All arrays are properly typed with TypeScript interfaces, ensuring:

- Compile-time type checking
- Better IDE autocomplete
- Easier refactoring
- Documentation through types
