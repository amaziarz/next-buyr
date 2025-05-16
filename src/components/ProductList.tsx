import type { Product } from '@/lib/types';

import { ProductCard } from './ProductCard';

type Props = {
  products: Product[];
};

export function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
