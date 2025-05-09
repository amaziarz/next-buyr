import type { Product } from '@/lib/types';

import { ProductList } from '@/components/ProductList';

const PRODUCTS = [
  {
    category: 'Electronics',
    currency: 'USD',
    description: 'A high-quality smartphone with a sleek design.',
    id: '1',
    imageUrl: 'https://example.com/image1.jpg',
    name: 'Smartphone',
    price: 699,
  },
  {
    category: 'Clothing',
    currency: 'USD',
    description: 'A stylish and comfortable t-shirt.',
    id: '2',
    imageUrl: 'https://example.com/image2.jpg',
    name: 'T-Shirt',
    price: 19.99,
  },
  {
    category: 'Books',
    currency: 'USD',
    description: 'An insightful book on modern web development.',
    id: '3',
    imageUrl: 'https://example.com/image3.jpg',
    name: 'Web Development Book',
    price: 29.99,
  },
  {
    category: 'Home Appliances',
    currency: 'USD',
    description: 'A powerful and efficient vacuum cleaner.',
    id: '4',
    imageUrl: 'https://example.com/image4.jpg',
    name: 'Vacuum Cleaner',
    price: 199.99,
  },
] satisfies Product[];

export default function Home() {
  return (
    <main className="p-8">
      <h1>Next BuyR</h1>
      <ProductList products={PRODUCTS} />
    </main>
  );
}
