export interface MenuPrice {
  label: string;
  price: number;
}

export interface MenuDish {
  name: string;
  description: string;
  prices: MenuPrice[];
}

export interface MenuCategory {
  id: string;
  name: string;
  intro: string;
  dishes: MenuDish[];
}

const pizzaSizes = (personal: number, familiar: number, xl: number): MenuPrice[] => [
  { label: 'Personal', price: personal },
  { label: 'Familiar', price: familiar },
  { label: 'XL', price: xl },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'pizzas-de-la-casa',
    name: 'Pizzas de la casa',
    intro: 'Hechas con pasión, con masa artesanal y horneadas a la leña.',
    dishes: [
      { name: 'La Terraza', description: 'Mozzarella, salsa de tomate, jamón, tocino, salchichón, cabanossi, chorizo, pimentón, pepperoni, cebolla, carne, aceituna, champiñones y espárragos.', prices: pizzaSizes(26, 48, 59) },
      { name: 'Americana', description: 'Salsa de tomate, mozzarella y jamón.', prices: pizzaSizes(18, 32, 39) },
      { name: 'Vegetariana', description: 'Salsa de tomate, mozzarella, carne, cebolla, pimentón, espárragos y aceitunas.', prices: pizzaSizes(18, 32, 39) },
      { name: 'Calabresa', description: 'Salsa de tomate, mozzarella, albahaca, tomate, aceituna y cebolla.', prices: pizzaSizes(18, 32, 39) },
      { name: 'Hawaiana', description: 'Salsa de tomate, mozzarella, piña y jamón.', prices: pizzaSizes(19, 34, 42) },
      { name: 'Suprema', description: 'Salsa de tomate, mozzarella, champiñones, cebolla, pimentón, carne y doble queso.', prices: pizzaSizes(20, 36, 44) },
      { name: 'La Belleza', description: 'Salsa de tomate, mozzarella, piña, pepperoni y jamón.', prices: pizzaSizes(21, 37, 45) },
      { name: 'Francesa', description: 'Salsa de tomate, mozzarella, champiñones, aceituna y pimentón.', prices: pizzaSizes(20, 36, 44) },
      { name: 'Española', description: 'Salsa de tomate, mozzarella, chorizo, aceituna y pimentón.', prices: pizzaSizes(20, 36, 44) },
      { name: 'Peruana', description: 'Salsa de tomate, mozzarella, carne, albahaca y aceituna.', prices: pizzaSizes(20, 36, 44) },
      { name: 'Tropical', description: 'Salsa de tomate, mozzarella, tocino, chorizo y piña.', prices: pizzaSizes(21, 37, 45) },
    ],
  },
  {
    id: 'especialidades',
    name: 'Especialidades',
    intro: 'Combinaciones de la casa para compartir.',
    dishes: [
      { name: 'Papas al hilo', description: 'Salsa de tomate, mozzarella, cabanossi y papas al hilo.', prices: pizzaSizes(23, 42, 50) },
      { name: 'Diávola', description: 'Salsa de tomate, mozzarella, pepperoni, salame y chorizo.', prices: pizzaSizes(24, 43, 51) },
      { name: 'Caprichosa', description: 'Salsa de tomate, mozzarella, piña, jamón y cabanossi.', prices: pizzaSizes(24, 43, 51) },
      { name: 'Primavera', description: 'Salsa de tomate, mozzarella, champiñones, piña y pimentón.', prices: pizzaSizes(23, 42, 50) },
      { name: 'Siciliana', description: 'Salsa de tomate, mozzarella, aceituna verde, chorizo y pimentón.', prices: pizzaSizes(23, 41, 49) },
      { name: 'La del pollo', description: 'Salsa de tomate, mozzarella, tocino, aceituna verde y pollo.', prices: pizzaSizes(23, 41, 49) },
      { name: 'La Che', description: 'Salsa de tomate, mozzarella, carne, cebolla y chorizo.', prices: pizzaSizes(23, 42, 50) },
      { name: 'Champiñones', description: 'Salsa de tomate, mozzarella, jamón y champiñones.', prices: pizzaSizes(23, 43, 51) },
      { name: 'La Albert', description: 'Salsa de tomate, mozzarella, hot dog, aceituna, chorizo y pimentón.', prices: pizzaSizes(23, 43, 51) },
      { name: 'Chepes', description: 'Salsa de tomate, mozzarella, hot dog, aceituna, chorizo y tocino.', prices: pizzaSizes(22, 41, 49) },
      { name: 'A lo Cajacho', description: 'Salsa de tomate, mozzarella, carne, cebolla, queso suizo, albahaca y aceituna.', prices: pizzaSizes(23, 43, 51) },
      { name: 'D. Frutas', description: 'Mozzarella, salsa de tomate, jamón, piña, durazno y leche condensada.', prices: pizzaSizes(24, 45, 53) },
      { name: 'Florentina', description: 'Salsa de tomate, mozzarella, jamón, salchichón, chorizo, aceituna y pimentón.', prices: pizzaSizes(24, 45, 53) },
    ],
  },
  {
    id: 'lasagnas',
    name: 'Lasañas',
    intro: 'Capas de pasta, salsa y queso al horno.',
    dishes: [
      { name: 'De carne', description: 'Carne, salsa de tomate, queso mozzarella y bechamel.', prices: [{ label: 'Porción', price: 23 }] },
      { name: 'Cuatro quesos', description: 'Carne, queso suizo, queso crema, mozzarella y parmesano.', prices: [{ label: 'Porción', price: 26 }] },
      { name: 'Tres sabores', description: 'Carne, chorizo y jamón.', prices: [{ label: 'Porción', price: 25 }] },
      { name: 'La Terraza', description: 'Carne, cuatro quesos, tres sabores, champiñones y tocino.', prices: [{ label: 'Porción', price: 28 }] },
    ],
  },
  {
    id: 'calzones',
    name: 'Calzones',
    intro: 'Masa dorada al horno con rellenos sabrosos.',
    dishes: [
      { name: 'En salsa roja · chorizo y jamón', description: 'Salsa roja, chorizo y jamón.', prices: [{ label: 'Calzone', price: 23 }] },
      { name: 'En salsa roja · tomate y aceituna', description: 'Tomate, aceituna verde y cebolla.', prices: [{ label: 'Calzone', price: 23 }] },
      { name: 'En salsa roja · ajo y mozzarella', description: 'Salsa de ajos, mozzarella y chorizos.', prices: [{ label: 'Calzone', price: 26 }] },
    ],
  },
  {
    id: 'pan-al-ajo',
    name: 'Pan al ajo',
    intro: 'Para empezar a compartir desde el primer bocado.',
    dishes: [
      { name: 'Simple', description: 'Pan artesanal al ajo.', prices: [{ label: 'Porción', price: 6 }] },
      { name: 'Especial', description: 'Pan al ajo en versión especial.', prices: [{ label: 'Porción', price: 10 }] },
      { name: 'Hawaiana', description: 'Pan al ajo con combinación hawaiana.', prices: [{ label: 'Porción', price: 10 }] },
      { name: 'La Terraza', description: 'Pan al ajo con la combinación de la casa.', prices: [{ label: 'Porción', price: 13 }] },
    ],
  },
  {
    id: 'adicionales',
    name: 'Adicionales',
    intro: 'Dale un toque extra a tu pizza.',
    dishes: [
      { name: 'Borde de queso', description: 'Agrega borde de queso a tu pizza.', prices: [{ label: 'Adicional', price: 7 }] },
      { name: 'Extra de carne', description: 'Una porción extra de carne.', prices: [{ label: 'Adicional', price: 7 }] },
      { name: 'Verduras adicionales', description: 'Agrega verduras a tu pizza.', prices: [{ label: 'Adicional', price: 5 }] },
      { name: 'Adicional de embutido', description: 'En cualquier embutido; precio por tamaño según la carta.', prices: [{ label: 'Personal', price: 3 }, { label: 'Familiar', price: 6 }] },
    ],
  },
];
